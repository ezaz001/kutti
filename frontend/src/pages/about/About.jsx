import React from "react";
import "./about.css";
import Navbar from "../../components/navbar/Navbar";
import NavbarTop from "../../components/navbartop/NavbarTop";
import Footer from "../../components/footer/Footer";
import Manubar from "../../components/menubar/Manubar";
import Feedback from "../../components/feedback/Feedback";
import WhatsAppLogo from "../../components/WhatsAppLogo/WhatsAppLogo";

const about = () => {
  return (
    <div className="aboutpage">
      <NavbarTop />
      <Navbar />
      <Manubar />
      <WhatsAppLogo />
      <div className="aboutmain">
        <div className="aboutbody">
          <h3>About US:</h3>
          <p>
            Welcome to M/S Khan Furniture Shop, where tradition meets
            craftsmanship. Our passion for creating exquisite wooden furniture
            is reflected in every piece we offer. From timeless classics to
            modern designs, we handcraft each item with meticulous attention to
            detail and the finest materials. Whether you're looking for a
            statement piece for your living room or custom-made furniture for
            your entire home, M/S Khan Furniture Shop promises quality,
            durability, and elegance. <br />
            <br />
            At M/S Khan Furniture Shop, exceptional customer service is at the
            heart of what we do. From your first visit to the final delivery, we
            strive to provide an outstanding experience. Discover the beauty of
            handcrafted wooden furniture and transform your space with our
            exceptional creations, all while supporting local artisans and
            sustainable practices.
          </p>
        </div>
      </div>
      
      <Feedback/>
      <Footer />
    </div>
  );
};

export default about;
