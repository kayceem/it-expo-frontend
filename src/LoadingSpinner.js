import React from 'react';
import { BeatLoader, HashLoader, PacmanLoader } from 'react-spinners'; 
import './LoadingSpinner.css'

const LoadingSpinner = () => (
  <div className="spinner-container">
    <PacmanLoader color="#3afeff" size={50} />
  </div>
);

export default LoadingSpinner;
