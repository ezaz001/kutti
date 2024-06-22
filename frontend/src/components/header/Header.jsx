import React from "react";
import "./header.css";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="intro">
          <h2>Best Picks For You</h2>
          <p>Impressive Collection For Your Dream Home</p>
        </div>
        <div className="items">
          <a href="/" className="item">
            <img src="./images/sofaset.jpg" alt="" />
            <p>Sofa Set</p>
          </a>
          <a href="/" className="item">
            <img src="./images/bed1.jpg" alt="" />
            <p>Beds</p>
          </a>
          <a href="/" className="item">
            <img src="./images/dressingtable.jpg" alt="" />
            <p>Dressing Tables</p>
          </a>
          <a href="/" className="item">
            <img src="./images/Wardrobes.jpg" alt="" />
            <p>Wardrobes</p>
          </a>
          <a href="/" className="item">
            <img src="./images/Cabinets.jpg" alt="" />
            <p>Cabinets</p>
          </a>
          <a href="/" className="item">
            <img src="./images/Diningtable.jpg" alt="" />
            <p>Dining Table Set</p>
          </a>
          <a href="/" className="item">
            <img src="./images/TVunits.jpg" alt="" />
            <p>TV Units</p>
          </a>
          <a href="/" className="item">
            <img src="./images/door1.jpeg" alt="" />
            <p>TV Units</p>
          </a>
          <a href="/" className="item">
            <img src="./images/door1.jpeg" alt="" />
            <p>TV Units</p>
          </a>
          <a href="/" className="item">
            <img src="./images/door1.jpeg" alt="" />
            <p>TV Units</p>
          </a>
          <a href="/" className="item">
            <img src="./images/door1.jpeg" alt="" />
            <p>TV Units</p>
          </a>
          <a href="/" className="item">
            <img src="./images/door1.jpeg" alt="" />
            <p>TV Units</p>
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
