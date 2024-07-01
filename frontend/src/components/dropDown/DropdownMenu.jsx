import React from "react";
import "./dropDownMenu.css";
import { useState, useRef, useEffect } from "react";

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="dropdown">
      <button className="dropdown-toggle" onClick={toggleDropdown}>
        <img src="./images/menu.png" alt="" />
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/products">Product</a>
          </li>
          <li>
            <a href="/contactus">Contact</a>
          </li>
          <li>
            <a href="/about">About Us</a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;
