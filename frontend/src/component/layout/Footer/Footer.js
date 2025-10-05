import React from "react";
import { Link } from "react-router-dom";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      {/* Top Footer - Left, Middle, Right */}
      <div className="topFooter">
        {/* Left Section */}
        <div className="footer-section leftFooter">
          <h4>DOWNLOAD OUR APP</h4>
          <p>Download App for Android and iOS mobile phones</p>
          <div className="app-images">
            <img src={playStore} alt="playstore" />
            <img src={appStore} alt="Appstore" />
          </div>
        </div>

        {/* Middle Section */}
        <div className="footer-section midFooter">
          <p>High Quality is our first priority</p>
          <p>Stay updated with our latest products and offers</p>
          <p>Copyrights 2025 &copy; Chakradhar Reddy</p>
        </div>

        {/* Right Section */}
        <div className="footer-section rightFooter">
          <h4>Follow Us</h4>
          <a
            href="http://instagram.com/sreechakradharreddyguddili"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a
            href="http://youtube.com/sreechakradharreddyguddili"
            target="_blank"
            rel="noopener noreferrer"
          >
            YouTube
          </a>
          <a
            href="http://facebook.com/sreechakradharreddyguddili"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
        </div>
      </div>

      {/* Quick Links Section */}
      <div className="quickLinks">
        <h4>Quick Links</h4>
        <div className="linksContainer">
          <Link to="/support">Support</Link>
          <Link to="/faqs">FAQs</Link>
          <Link to="/promotions">Promotions & Sale</Link>
          <Link to="/track-order">Track Order</Link>
          <Link to="/termsandconditions">Terms & Conditions</Link>
          <Link to="/privacy">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
