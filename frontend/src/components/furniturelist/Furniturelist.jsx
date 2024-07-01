import React from "react";
import "./furniturelist.css";

const Furniturelist = () => {
  return (
    <div className="furnitures">
      <div className="furnitureContainer">
        <div className="quotes">
          <h3>"Discover the beauty of handmade wooden furniture"</h3>
          <p>
            Quality wooden furniture, expertly crafted to bring elegance,
            comfort, and durability to every room
          </p>
        </div>
        <div className="itemboxes">
          <div className="furniturebox">
            <div className="imgtop">
              <h3>Living Room</h3>
              <p>Upto 12% off</p>
            </div>
            <img src="./images/sofaset2.jpg" alt="" />
          </div>
          <div className="furniturebox">
            <div className="imgtop">
              <h3>Bed Room</h3>
              <p>Upto 10% off</p>
            </div>
            <img src="./images/bed1.jpg" alt="" />
          </div>
          <div className="furniturebox">
            <div className="imgtop">
              <h3>Study Room</h3>
              <p>Upto 29% off</p>
            </div>
            <img src="./images/studyroom.jpeg" alt="" />
          </div>
          <div className="furniturebox">
            <div className="imgtop">
              <h3>Dressing Table</h3>
              <p>Upto 15% off</p>
            </div>
            <img src="./images/dressingtable.jpg" alt="" />
          </div>
          <div className="furniturebox">
            <div className="imgtop">
              <h3>Kids Room</h3>
              <p>Upto 20% off</p>
            </div>
            <img src="./images/TVunits.jpg" alt="" />
          </div>
          <div className="furniturebox">
            <div className="imgtop">
              <h3>Dining Area</h3>
              <p>Upto 30% off</p>
            </div>
            <img src="./images/Diningtable.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Furniturelist;
