import React, { useRef } from 'react';
import Webcam from "react-webcam";
import axios from 'axios';

const Login = () => {
  const webcamRef = useRef(null);

  const capture = React.useCallback(
    () => {
      const imageSrc = webcamRef.current.getScreenshot();
      
      // Send the image to the backend
      axios.post('http://localhost:8000/login', { image: imageSrc })
        .then(response => {
          if (response.data.status === 'ok') {
            alert(`User verified! User ID: ${response.data.user_id}`);
          } else {
            alert(`Error: ${response.data.status}`);
          }
        })
        .catch(err => {
          console.error(err);
        });
    },
    [webcamRef]
  );

  return (
    <div>
      <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" />
      <button onClick={capture}>Login</button>
    </div>
  )
}

export default Login;
