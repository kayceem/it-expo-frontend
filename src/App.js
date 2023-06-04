import React, { useState } from 'react';
import WebCam from './WebCam';
import './App.css';

const App = () => {
  const [isCapturePhoto, setIsCapturePhoto] = useState(false);
  
  const handleCaptureClick = () => {
    setIsCapturePhoto(true);
  }

  return (
    <div className="main">
      <h1 className="title">Emotion Detector</h1> // your title here
      <WebCam isCapturePhoto={isCapturePhoto} setIsCapturePhoto={setIsCapturePhoto} />
      <div className="buttons">
        <button className="button" onClick={() => setIsCapturePhoto(false)}>Detect with Video</button>
        <button className="button" onClick={handleCaptureClick}>Detect with Photo</button>
      </div>
    </div>
  )
}

export default App;