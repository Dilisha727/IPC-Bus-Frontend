import React from 'react';
import './NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <span className="navbar-title">Bus Tracking System</span>
      </div>
      <div className="navbar-menu">
        <a href="/real-time" className="navbar-item">Real-Time</a>
        <a href="/historical" className="navbar-item">Historical</a>
        <a href="/mileage" className="navbar-item">Mileage</a>
        <a href="/device" className="navbar-item">Device</a>
        <a href="/logout" className="navbar-item">
          <FontAwesomeIcon icon={faUser} className="profile-icon" />
          Logout
        </a>
      </div>
    </div>
  );
};

export default NavBar;
