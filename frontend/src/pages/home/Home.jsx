import React from "react";
import "./home.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Floating from "../../components/floating/Floating";
import Carousel from "../../components/carousel/Carousel";
import WhatsAppLogo from "../../components/WhatsAppLogo/WhatsAppLogo";
import NavbarTop from "../../components/navbartop/NavbarTop";
import Furniturelist from "../../components/furniturelist/Furniturelist";
import Footer from "../../components/footer/Footer";
import Manubar from "../../components/menubar/Manubar";
import Feedback from "../../components/feedback/Feedback";

const home = () => {
  return (
    <div>
      <NavbarTop />
      <Navbar />
      <WhatsAppLogo />
      <Manubar />
      <Floating />
      <Carousel />
      <Header />
      <Furniturelist />
      <Feedback/>
      <Footer />
    </div>
  );
};

export default home;
