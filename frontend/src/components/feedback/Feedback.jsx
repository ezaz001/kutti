import React from "react";
import Slider from "react-slick";
import "./feedback.css";
import { useEffect, useState } from "react";

const Feedback = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    fetch("/feedback.json")
      .then((response) => response.json())
      .then((data) => setFeedbacks(data))
      .catch((error) => console.error("Error fetching feedback data:", error));
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: true,
          slidesToShow: 1,
          infinite: true,
          slidesToScroll: 1,
          autoplay: false,
          autoplaySpeed: 5000,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          dots: true,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: false,
          autoplaySpeed: 5000,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="main-container">
      <h3 className="feedback-headinhg">"Your Feedback, Our Pride" </h3>
      <p className="feedback-para">
        Your feedback empowers us to make meaningful changes
      </p>
      <div className="slider-container">
        <Slider {...settings}>
          {feedbacks.map((feedback, index) => (
            <div key={index} className="feedback-slide">
              <img className="feedback-image" src={feedback.image} alt="" />
              <p className="feedback-text">{feedback.text}</p>
              <p className="feedback-author">- {feedback.author}</p>
              <p className="feedback-rating"> {feedback.rating}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
export default Feedback;
