import React, { useRef } from 'react';
import Webcam from "react-webcam";
import axios from 'axios';
import './Login.css';
import { Link } from 'react-router-dom';

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: 'user',
};

const Login = ({ setIsLoggedIn }) => {
  const webcamRef = useRef(null);

  const capture = React.useCallback(
    () => {
      const imageSrc = webcamRef.current.getScreenshot();
      
      // Send the image to the backend
      axios.post('http://localhost:8000/login', { image: imageSrc })
        .then(response => {
          if (response.data.status === 'ok') {
            alert(`User verified! User ID: ${response.data.user_id}`);
            setIsLoggedIn(true); // Set isLoggedIn to true when user is verified
          } else {
            alert(`Error: ${response.data.status}`);
          }
        })
        .catch(err => {
          console.error(err);
        });
    },
    [webcamRef, setIsLoggedIn] // Add setIsLoggedIn to the dependency array
  );

  return (
    <div className='container'>
      <div className='image'>
        <Webcam 
                    audio={false}
                    height={565}
                    ref={webcamRef}
                    screenshotFormat="image/jpeg"
                    width={1000}
                    videoConstraints={videoConstraints}
        />
      </div>
      <div className='button-class'>
        <Link to="/" className="button">Login</Link>
      </div>
    </div>
  )
}

export default Login;

