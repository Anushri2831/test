import React from "react";
import "./HotelCard.css";
import {FaBookmark} from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import {Md360} from "react-icons/md";
import {FaArrowRight} from "react-icons/fa";
import { MdLocationOn} from "react-icons/md";

const HotelCard = () => {
  return (
    <div className="hotel-card">
      <div className="hotel-image">
        <img src="https://th.bing.com/th/id/OIP.uLyHs0eKWMzSD-QKPgYy7QHaE8?w=279&h=186&c=7&r=0&o=5&pid=1.7" alt="Suite"  />
        <div className="icons">
      <FaArrowLeft style={{backgroundColor:"white", borderRadius:"50px", marginLeft:"9px"}}/>
      <FaBookmark  size={16} style={{backgroundColor:"white", borderRadius:"120px", marginRight:"7px"}} />
      </div>
        <button className="tour-btn"> <span><Md360 /></span>Take a 360 tour of the suite <FaArrowRight /></button>
      </div>
      <div className="hotel-info">
        <div className="hotel-header">
          <div>
            <h2 style={{color:"goldenRod"}}>Suite</h2>
            <p className="location" style={{color:"darkgreen"}}><MdLocationOn /> Viana do Castelo, Portugal</p>
          </div>
          <div className="price">
            <h2 style={{color:"goldenRod"}}>$160</h2>
            <p  style={{color:"darkgreen"}}>High season</p>
          </div>
        </div>

        <div className="hotel-details">
          <span>👤 3</span>
          <span>🛏 2+2</span>
          <span>🛁 1</span>
          <span>📏 53.75 sqm</span>
        </div>

        <h3>Accommodations</h3>
        <div className="accommodations">
          <span>📶 Wi-Fi</span>
          <span>🛏 King-size bed 2x2m</span>
          <span>🥂 Minibar</span>
          <span>🌅 Sea side balcony</span>
          <span>📺 Digital safe</span>
          <span>🔇 Soundproof windows</span>
        </div>

        <h3>Details</h3>
        <p className="description">
          Sophisticated and cozy, these suites were designed to envelop your senses,
          enabling you to free your mind, relax, and enjoy a complete experience.
        </p>

        <button className="book-btn">Book the room</button>
      </div>
    </div>
  );
};

export default HotelCard;