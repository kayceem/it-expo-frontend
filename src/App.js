import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import WebCam from './WebCam';
import Image from './Image';
import Dashboard from './Dashboard';
import Signup from './SignUp'; // Import Signup component
import Login from './Login'; // Import Login component
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="main">
        <h1 className="title">Emotion Detector</h1>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/detect-with-video" element={<WebCam />} />
          <Route path="/detect-with-photo" element={<Image />} />
          <Route path="/signup" element={<Signup />} /> {/* Add Signup route */}
          <Route path="/login" element={<Login />} /> {/* Add Login route */}
        </Routes>
      </div>
    </Router>
  )
}

export default App;
