import React from "react";
import "./Header.css";
import {FaBookmark} from 'react-icons/fa';

const Header = () => {
  return (
    <div className="header" style={{border:"1px solid black",backgroundColor:"#8BC34A" }}>
      <div className="header1">
      <div className="user-info">
        <img src="https://www.pngkey.com/png/full/446-4462649_animated-faces-my-hero-design-clip-art-woman.png" alt="User Avatar" className="avatar" />
        <div className="user-details">
          <h2>Joana Barros</h2>
          <p>Hotel Guest</p>
        </div>
        <div className="lock-icon">
          <FaBookmark /> 

        </div>
      </div>

      <div className="recommended-card">
        <img src="spa.jpg" alt="Recommended" className="recommended-img" />
        <div className="recommended-content">
          <span className="price-tag">From $30/person</span>
          <h3>Enjoy some me time</h3>
          <p>Relax with our massages and treatments.</p>
          <p className="small-text">Spa facilities will close in 4 hours</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;