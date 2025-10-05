import React from "react";
import "../QuickLinks/QuickLinks.css";

const FAQs = () => {
  return (
    <div className="quickPage">
      <h1>Frequently Asked Questions</h1>
      <h2>1. How do I track my order?</h2>
      <p>You can track your order using the tracking ID provided in the confirmation email.</p>
      <h2>2. How can I return a product?</h2>
      <p>Products can be returned within 7 days of delivery, following our return policy.</p>
      <h2>3. How can I contact support?</h2>
      <p>Email us at: <a href="mailto:support@aurashop.com">support@aurashop.com</a></p>
      <h2>4. Do you deliver internationally?</h2>
      <p>Currently, we deliver only within India.</p>
    </div>
  );
};

export default FAQs;
