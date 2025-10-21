import React from "react";
import { Link } from "react-router-dom";  
import "./QuickLinks.css";

const QuickLinks = () => {
  return (
    <div className="quick-links">
      <h2>Quick Links</h2>
      <ul>
        <li><Link to="/support">Support</Link></li>
        <li><Link to="/faqs">FAQs</Link></li>
        <li><Link to="/promotions">Promotions & Sale</Link></li>
        <li><Link to="/trackorder">Track Order</Link></li>
        <li><Link to="/terms-and-conditions">Terms & Conditions</Link></li>
        <li><Link to="/privacy-policy">Privacy Policy</Link></li>
      </ul>
    </div>
  );
};

export default QuickLinks;
