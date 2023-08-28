import React from "react";
import './Notfound.css'
import { useNavigate } from "react-router-dom";
const NotFound = () => {
  const navigate = useNavigate();
  const handleFound = () => {
    navigate('/');
  };
  return (
    <div className="container">
      <h1 className="heading">Page Not Found</h1>
      <p className="text">The requested page does not exist.</p>
      <button className="button" onClick={handleFound}>Go to Home</button>
    </div>
  );
};

export default NotFound;
