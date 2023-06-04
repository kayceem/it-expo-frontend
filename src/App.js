import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import WebCam from './WebCam';
import Image from './Image';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="main">
        <h1 className="title">Emotion Detector</h1>
        <div className="buttons">
          <Link to="/detect-with-video" className="button">Detect with Video</Link>
          <Link to="/detect-with-photo" className="button">Detect with Photo</Link>
        </div>

        <Routes>
          <Route path="/detect-with-video" element={<WebCam />} />
          <Route path="/detect-with-photo" element={<Image />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;
