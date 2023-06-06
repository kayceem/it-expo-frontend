import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WebCam from './WebCam';
import Image from './Image';
import Dashboard from './Dashboard';
import SignUp from './SignUp';
import Login from './Login';
import { ProtectedRoute } from './ProtectedRoute'; 
import './App.css';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <div className="main">
        <h1 className="title">Emotion Detector</h1>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/detect-with-video" element={<ProtectedRoute isLoggedIn={isLoggedIn}><WebCam /></ProtectedRoute>} />
          <Route path="/detect-with-photo" element={<ProtectedRoute isLoggedIn={isLoggedIn}><Image /></ProtectedRoute>} />
        </Routes>
      </div>
    </Router>
  );
};


export default App;
