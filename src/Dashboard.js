import React from 'react'
import { Link } from 'react-router-dom';
import './Dashboard.css'
const Dashboard = () => {
  return (
    <div className="buttons">
    <Link to="/detect-with-video" className="button">Detect with Video</Link>
    <Link to="/detect-with-photo" className="button">Detect with Photo</Link>
  </div>
  )
}

export default Dashboard