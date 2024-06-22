import { useEffect, useState } from "react";
import React from "react";
import "./manubar.css";

const Manubar = () => {
  const [isFixed, setIsFixed] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    setIsFixed(offset > 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className={`menubar ${isFixed ? "fixed" : ""}`}>
      <div className="manubarlists">
        <ul className="manubarlist">
          <li>
            <a href="">Beds</a>
          </li>
          <li>
            <a href="">Sofa Set</a>
          </li>
          <li>
            <a href="">Dressing Table</a>
          </li>
          <li>
            <a href="">T-TABLE</a>
          </li>
          <li>
            <a href="">Wardrobe</a>
          </li>
          <li>
            <a href="">TV Unit</a>
          </li>
          <li>
            <a href="">Cabinet</a>
          </li>
          <li>
            <a href="">Study Table</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Manubar;
