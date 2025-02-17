import React from "react";
import "./BottomNavigation.css";

const BottomNavigation = () => {
  return (
    <div className="bottom-navigation">
      <button className="nav-button">
        <span className="nav-icon">🏠</span>
      </button>
      <button className="nav-button">
        <span className="nav-icon">📋</span>
      </button>
      <button className="nav-button">
        <span className="nav-icon">👤</span>
      </button>
    </div>
  );
};

export default BottomNavigation;