import React, { useState, useRef } from 'react';
import Webcam from 'react-webcam';
import io from 'socket.io-client';

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: 'user',
};

const Image = () => {
  const webcamRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [emotion, setEmotion] = useState(null);
  const [cameraEnabled, setCameraEnabled] = useState(false);

  const handleImageUpload = (event) => {
    setSelectedImage(URL.createObjectURL(event.target.files[0]));
  };

  const handleDetectClick = () => {
    const socket = io.connect('http://localhost:8000');
    socket.emit('image', { image: selectedImage });
    socket.on('emotion', data => {
      setEmotion(data.emotion);
    });
  };

  const handleCaptureClick = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setSelectedImage(imageSrc);
  };

  return (
    <div className='image-container'>
      {cameraEnabled ? (
        <div>
          <Webcam
            audio={false}
            height={350}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            width={350}
            videoConstraints={videoConstraints}
          />
          <button onClick={handleCaptureClick}>Capture photo</button>
        </div>
      ) : (
        <div>
          <input type="file" accept="image/*" onChange={handleImageUpload} />
        </div>
      )}
      <button onClick={() => setCameraEnabled(!cameraEnabled)}>
        {cameraEnabled ? 'Upload Image' : 'Take Photo'}
      </button>
      <button onClick={handleDetectClick}>Detect Emotion</button>
      {emotion && <div>Emotion: {emotion}</div>}
    </div>
  );
};

export default Image;
