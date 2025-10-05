import React from "react";
import "../QuickLinks/QuickLinks.css";

const Support = () => {
  return (
    <div className="quickPage">
      <h1>Support</h1>
      <p>
        We’re here to help! If you have any questions, concerns, or need
        assistance, reach out to us through any of the methods below:
      </p>

      <h2>Email Support</h2>
      <p>
        For general inquiries or assistance, email us at:{" "}
        <a href="mailto:support@aurashop.com">support@aurashop.com</a>
      </p>

      <h2>Phone Support</h2>
      <p>
        Call us at: <b>+91 98765 43210</b> (Mon – Fri, 9 AM – 6 PM)
      </p>

      <h2>Live Chat</h2>
      <p>
        Use the live chat option on the bottom-right corner of the website to
        speak with our support team instantly.
      </p>

      <h2>Help Center</h2>
      <p>
        Visit our <a href="/faqs">FAQs</a> page for answers to the most common
        questions.
      </p>

      <h2>Feedback</h2>
      <p>
        We value your feedback! Share your thoughts with us at{" "}
        <a href="mailto:feedback@aurashop.com">feedback@aurashop.com</a>
      </p>
    </div>
  );
};

export default Support;
