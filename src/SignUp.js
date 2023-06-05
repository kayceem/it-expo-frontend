import React, { useRef } from 'react';
import Webcam from 'react-webcam';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import './SignUp.css';

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: 'user',
};

const Signup = () => {
  const webcamRef = useRef(null);
  const [capturedImage, setCapturedImage] = React.useState(null);
  const navigate = useNavigate(); // Get the navigate function

  const capture = React.useCallback(
    () => {
      const imageSrc = webcamRef.current.getScreenshot();
      setCapturedImage(imageSrc);
    },
    [webcamRef]
  );

  const handleSignUp = async () => {
    try {
      const response = await axios.post('http://localhost:8000/signup', { image: capturedImage });
      if(response.data.status === 'ok') {
        // signup successful, navigate to login page
        navigate('/login');
      } else {
        // signup failed, show error message
        alert('Signup failed: ' + response.data.status);
      }
    } catch(error) {
      console.error(error);
      alert('An error occurred during signup: ' + error.message);
    }
  }

return (
    <div className='signup'>
      <div className='container'>
        <div className='capture'>
            <h2>Capture</h2>
            <Webcam
            audio={false}
            height={565}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            width={1000}
            videoConstraints={videoConstraints}
            />
            <button onClick={capture}>Capture photo</button>
        </div>
        {capturedImage && (
            <div className='preview'>
                <h2>Preview</h2>
            <img src={capturedImage} alt="preview" />
            <button onClick={()=>handleSignUp(capturedImage)}>Sign Up</button>
            </div>
        )}
        </div>
    </div>
  );
}

export default Signup;
