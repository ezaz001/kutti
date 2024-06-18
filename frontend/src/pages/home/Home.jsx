import React from "react";
import "./home.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
// import Body from "../../components/body/Body";
import Floating from "../../components/floating/Floating";
// import Slider from "../../components/slider/Slider";
import Carousel from "../../components/carousel/Carousel";
import WhatsAppLogo from "../../components/WhatsAppLogo/WhatsAppLogo";
import NavbarTop from "../../components/navbartop/NavbarTop";

const home = () => {
  return (
    <div>
      <NavbarTop/>
      <Navbar />
      <WhatsAppLogo />
      <Floating />
      <Carousel />
      <Header />
      {/* <Slider/>
      <Body /> */}
    </div>
  );
};

export default home;
