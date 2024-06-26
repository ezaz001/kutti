import React, { useEffect, useState, useCallback } from "react";
import "./carousel.css";
import img1 from "../../slideimg/img1.jpeg";
import img2 from "../../slideimg/img2.jpeg";
import img3 from "../../slideimg/img3.jpeg";
import img4 from "../../slideimg/img4.jpeg";
import img5 from "../../slideimg/img5.jpeg";
import img6 from "../../slideimg/img6.jpeg";
import diningtable from "../../slideimg/diningtable.jpg";
import sofa from "../../slideimg/sofaset.jpg";

const data = [img1, img2, img3, img4, img5, img6];

const Carousel = () => {
  const [slide, setSlide] = useState(0);
  const numberOfSlides = data.length;

  const nextSlide = useCallback(() => {
    setSlide((prevSlide) => (prevSlide + 1) % numberOfSlides);
  }, [numberOfSlides]);

  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };

  // useEffect(() => {
  //   const sliderClear = setInterval(() => {
  //     nextSlide();
  //   }, 2000);
  //   return () => clearInterval(sliderClear);
  // }, [nextSlide]);

  return (
    <div className="main">
      <div className="carousel">
        <img
          className="arrow arrow-left"
          src="./images/leftarrow.png"
          alt=""
          onClick={prevSlide}
        />
        {data.map((item, idx) => {
          return (
            <img
              src={item}
              alt={item.alt}
              key={idx}
              className={slide === idx ? "slide" : "slide slide-hidden"}
            />
          );
        })}
        <img
          className="arrow arrow-right"
          src="./images/rightarrow.png"
          alt=""
          onClick={nextSlide}
        />
        <span className="indicators">
          {data.map((_, idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  setSlide(idx);
                }}
                className={
                  slide === idx ? "indicator" : "indicator indicator-inactive"
                }
              ></button>
            );
          })}
        </span>
      </div>
      <div className="right">
        <img className="img" src={diningtable} alt="" />
        <img className="img" src={sofa} alt="" />
      </div>
    </div>
  );
};

export default Carousel;
