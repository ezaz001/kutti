import React from "react";
import "./navbar.css";
import { useNavigate } from "react-router-dom";
import DropdownMenu from "../dropDown/DropdownMenu";

const Navbar = () => {
  const navigate = useNavigate();

  const navigateProduct = () => {
    navigate("/products");
  };
  const navigateAbout = () => {
    navigate("/about");
  };
  const navigateContactUs = () => {
    navigate("/contactus");
  };

  return (
    <>
      <div className="navbar">
        <div className="navcontainer">
          <div className="navleft">
            <img className="logo" src="./images/logo.jpeg" alt="logo" />
            <h2 className="name">M/S Khan Furniture Shop</h2>
          </div>
          <div className="navright">
            <button className="navbutton" onClick={navigateProduct}>
              Products
            </button>
            <button className="navbutton borderline" onClick={navigateContactUs}>
              Contact Us
            </button>
            <button className="navbutton" onClick={navigateAbout}>
              About
            </button>
          </div>
          <div className="dropDown">
            <DropdownMenu />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
