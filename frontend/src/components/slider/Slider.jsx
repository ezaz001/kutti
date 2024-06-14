import React, { useEffect, useState } from "react";
import "./slider.css";
import img1 from "../../slideimg/img1.jpeg";
import img2 from "../../slideimg/img2.jpeg";
import img3 from "../../slideimg/img3.jpeg";
import img4 from "../../slideimg/img4.jpeg";
import img5 from "../../slideimg/img5.jpeg";
import img6 from "../../slideimg/img6.jpeg";

const Slider = () => {
  const data = [img1, img2, img3, img4, img5, img6];

  const [slider, SetSlider] = useState(0);

  const HandleRight = () => {
    SetSlider(slider === data.length - 1 ? 0 : slider + 1);
  };
  const HandleLeft = () => {
    SetSlider(slider === 0 ? data.length - 1 : slider - 1);
  };

  useEffect(() => {
    const sliderClear = setInterval(() => {
      HandleRight();
    }, 2000);
    return () => clearInterval(sliderClear);
  }, [slider]);

  return (
    <div className="slider">
      <div className="sliderimg">
        <img className={`img `} src={data[slider]} alt="" />
      </div>
      <div className="button">
        <button onClick={HandleLeft} className="btn">
          <img className="arrow" src="./images/leftarrow.png" alt="" />
        </button>
        <button onClick={HandleRight} className="btn">
          <img className="arrow" src="./images/rightarrow.png" alt="" />
        </button>
      </div>
    </div>
  );
};

export default Slider;
