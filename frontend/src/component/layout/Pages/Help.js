import React from "react";
import { Link } from "react-router-dom";
import "./Help.css";

const Help = () => {
  return (
    <div className="help-container">
      <h2>Help Center</h2>
      <ul>
        <li><Link to="/order-status">Order Status</Link></li>
        <li><Link to="/dispatch-delivery">Dispatch and Delivery</Link></li>
        <li><Link to="/returns">Returns</Link></li>
        <li><Link to="/contact-us">Contact Us</Link></li>
        <li><Link to="/privacy-policy">Privacy Policy</Link></li>
        <li><Link to="/terms-of-sale">Terms of Sale</Link></li>
        <li><Link to="/terms-of-use">Terms of Use</Link></li>
        <li><Link to="/feedback">Send Us Feedback</Link></li>
      </ul>
    </div>
  );
};

export default Help;
