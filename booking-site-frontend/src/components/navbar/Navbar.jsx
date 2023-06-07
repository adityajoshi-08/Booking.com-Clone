import React from 'react';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo" onClick={()=>navigate("/")}>adiBooking</span>
        <div className="navItems">
          <button className="navButton">Register</button>
          <button className="navButton">Login</button>
        </div>
      </div>
    </div>
    
  );
}
