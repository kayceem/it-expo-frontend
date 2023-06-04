import React, { useRef, useEffect, useState } from 'react';
import Webcam from 'react-webcam';
import io from 'socket.io-client';
import './WebCam.css';  // Import a CSS file

const videoConstraints = {
  width: 1200,
  height: 1200,
  facingMode: 'user',
};

const WebCam = () => {
  const webcamRef = useRef(null);
  const socketRef = useRef();
  const [emotion, setEmotion] = useState('Smile');

  useEffect(() => {
    socketRef.current = io.connect('http://localhost:8000');

    socketRef.current.on('emotion', data => {
      setEmotion(data.emotion);
    });

    return () => {
      socketRef.current.disconnect();
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (webcamRef.current) {
        const image = webcamRef.current.getScreenshot();
        if (image) {
          socketRef.current.emit('frame', { image });
        }
      }
    }, 500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="app">
      <div className="webcam">
        <Webcam
          audio={false}
          height={900}
          width={1000}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          videoConstraints={videoConstraints}
        />
      </div>
      <div className="emotion">
        <h2>Emotion</h2>
        <p>{emotion}</p>
      </div>
    </div>
  );
};

export default WebCam;
