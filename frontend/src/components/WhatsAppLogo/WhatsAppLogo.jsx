import React from "react";
import "./whatsAppLogo.css";

const WhatsAppLogo = () => {
  return (
    <div className="whatsapp-logo-container">
      <a href="https://wa.me/message/WHLD6ZDIXU6XE1" target="_blank">
        <img
          src="./images/whatsapp-logo.png"
          alt="WhatsApp Logo"
          className="whatsapp-logo"
        />
      </a>
    </div>
  );
};

export default WhatsAppLogo;
