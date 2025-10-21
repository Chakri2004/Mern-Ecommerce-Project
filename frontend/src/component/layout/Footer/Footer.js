import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = ({ country = "India" }) => {
  return (
    <footer id="footer">
      {/* Country Display */}
      <div className="countryDisplay">
        <p>Country / Region: {country}</p>
      </div>

      <div className="topFooter">
        {/* Left Section: All Columns */}
        <div className="footer-section leftFooter">
          {/* Resources */}
          <div className="footer-column">
            <h4>Resources</h4>
            <ul>
              <li><Link to="/find-store">Find a Store</Link></li>
              <li><Link to="/gift-cards">Gift Cards</Link></li>
              <li><Link to="/become-member">Become a Member</Link></li>
              <li><Link to="/track-order">Track Your Order</Link></li>
              <li><Link to="/promotions">Promotions & Sale</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="footer-column">
            <h4>Company</h4>
            <ul>
              <li><Link to="/about">About PRORCY</Link></li>
              <li><Link to="/careers">Careers</Link></li>
              <li><Link to="/sustainability">Sustainability</Link></li>
              <li><Link to="/news">News & Updates</Link></li>
              <li><Link to="/report">Report a Concern</Link></li>
            </ul>
          </div>

          {/* More */}
          <div className="footer-column">
            <h4>More</h4>
            <ul>
              <li><Link to="/support">Support</Link></li>
              <li><Link to="/faqs">FAQs</Link></li>
              <li><Link to="/termsandconditions">Terms & Conditions</Link></li>
              <li><Link to="/privacy">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Help & Contact */}
          <div className="footer-column">
            <h4>Help & Contact</h4>
            <ul>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/feedback">Send Feedback</Link></li>
              <li><Link to="/delivery">Delivery Info</Link></li>
              <li><Link to="/returns">Returns & Exchange</Link></li>
            </ul>
          </div>
        </div>

        {/* Right Section */}
        <div className="footer-section rightFooter">
          <p>High Quality is our first priority</p>
          <p>Stay updated with our latest products and offers</p>
          <p>© 2025 Aura, Inc. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
