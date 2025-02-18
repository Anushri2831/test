import React from "react";
import "./Header.css";
import {FaBookmark} from 'react-icons/fa';

const Header = () => {
  return (
    <div className="header" style={{border:"1px solid black",}}>
      
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
        <img src="https://th.bing.com/th/id/OIP.WDpMazbySEELZbzGhB0TgQHaE8?w=242&h=180&c=7&r=0&o=5&pid=1.7" alt="Recommended" height="130" width="110px" className="recommended-img" padding="0px" />
        <div className="recommended-content">
          <span className="price-tag" style={{marginLeft:"130px"}}>From $30/person</span>
          <h3 style={{color:"#B38F3F"}}>Enjoy some me time</h3>
          <p style={{color:"#347835"}}>Relax with our massages and treatments.</p>
          <p className="small-text">Spa facilities will close in 4 hours</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;