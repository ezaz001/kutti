import React from "react";
import "./navbarTop.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

const NavbarTop = () => {
  return (
    <div className="navtop">
      <div className="containers">
        <div className="navtopleft">
          <h4>Welcome to Khan Furniture</h4>
        </div>
        <div className="navtopright">
          <div className="box number">
            <FontAwesomeIcon icon={faPhone} className="boxicon" />
            <button className="phone">+91-7005923335</button>
          </div>
          <div className="box email">
            <FontAwesomeIcon icon={faEnvelope} className="boxicon" />
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
