import React from "react";
import "./navbarTop.css";

const NavbarTop = () => {
  return (
    <div className="navtop">
      <div className="containers">
        <div className="navtopleft">
          <h4>Welcome to Khan Furniture</h4>
        </div>
        <div className="navtopright">
          <div className="box number">
            <img src="./images/phone.png" alt="" />
            <button className="phone">+91-7005923335</button>
          </div>
          <div className="box email">
            <img src="./images/mail.png" alt="" />
            <button className="">khanfurniture@gmail.com</button>
          </div>
          <div className="box location">
            <img src="./images/location.png" alt="" />
            <button className="city">Sonamure</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarTop;
