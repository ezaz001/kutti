import React from "react";
import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faSquareInstagram,
  faSquareFacebook,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footercontainer">
      <div className="footer">
        <div className="footertop">
          <div className="companydetails">
            <h3 className="footerh3">The Company:</h3>
            <ul>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Products</a>
              </li>
              <li>
                <a href="">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="moreinformation">
            <h3 className="footerh3">More Information:</h3>
            <ul>
              <li>
                <a href="">Location</a>
              </li>
              <li>
                <a href="">Terms of Use</a>
              </li>
              <li>
                <a href="">Warranty, Return and Refund</a>
              </li>
            </ul>
          </div>
          <div className="address">
            <h3 className="footerh3">Address:</h3>
            <p>
              MS Khan Furniture Shop, <br />
              Madhuban, Sonamura, Sepahijala Tripura. <br />
              Pincode- 799131
            </p>
          </div>
        </div>
        <div className="footermiddle">
          <div className="boxlists">
            <div className="payment">
              <h3>We Accept:</h3>
              <img src="./images/gpay.jpg" alt="gpay" />
              <img src="./images/phonepay.png" alt="phonepay" />
              <img src="./images/paytm.png" alt="paytm" />
              <img src="./images/bhimupi.png" alt="bhimupi" />
            </div>
            <div className="allsocial">
              <h3>Connect With Us:</h3>
              <a
                href="tel:+917005923335"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faPhone} className="faIcon" />
              </a>
              <a
                href="mailto:khanfurniture@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faEnvelope} className="faIcon" />
              </a>
              <a
                href="https://www.facebook.com/Moshirol786?mibextid=ZbWKwL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faSquareFacebook} className="faIcon" />
              </a>
              <a
                href="https://www.threads.net/@_khanfurniture"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faSquareInstagram} className="faIcon" />
              </a>
            </div>
          </div>
        </div>
        <div className="footerbottom">
          <p>
            <img src="./images/copyright.png" className="copyright" alt="" />
            2024 M/S Khan Furniture Shop. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
