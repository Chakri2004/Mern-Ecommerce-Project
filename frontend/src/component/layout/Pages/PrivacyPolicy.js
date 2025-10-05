import React from "react";
import "../QuickLinks/QuickLinks.css";

const PrivacyPolicy = () => {
  return (
    <div className="quickPage">
      <h1>Privacy Policy</h1>
      <p>We value your privacy and are committed to protecting your personal data.</p>
      <h2>Information Collection</h2>
      <p>We collect personal info like name, email, and shipping details to fulfill orders.</p>
      <h2>Use of Information</h2>
      <p>Information is used for processing orders, providing support, and sending updates.</p>
      <h2>Data Sharing</h2>
      <p>We do not sell personal information. Third-party sharing is only for order fulfillment.</p>
      <h2>Cookies</h2>
      <p>We use cookies to improve your experience on the website.</p>
      <h2>Contact Us</h2>
      <p>Email: <a href="mailto:privacy@aurashop.com">privacy@aurashop.com</a></p>
    </div>
  );
};

export default PrivacyPolicy;
