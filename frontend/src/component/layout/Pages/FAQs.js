import React from "react";
import { Link } from "react-router-dom";
import "../QuickLinks/QuickLinks.css";

const FAQs = () => {
  const faqData = [
    {
      question: "How do I track my order?",
      answer: "Once your order is confirmed, you will receive a tracking ID via email. Use it on our Order Status page to track your delivery in real-time."
    },
    {
      question: "What is your return policy?",
      answer: "You can return or exchange items within 7 days of delivery, provided the products are in original condition. Please refer to our Returns page for full details."
    },
    {
      question: "How can I contact customer support?",
      answer: "Our support team is available via email at support@aurashop.com or through the Live Chat option on the website for instant assistance."
    },
    {
      question: "Do you deliver internationally?",
      answer: "Currently, our deliveries are limited to India. We are working on expanding our services globally."
    },
    {
      question: "Can I modify or cancel my order?",
      answer: "Yes! Orders can be modified or canceled within 24 hours of placement. Visit the Order Status page to make changes."
    }
  ];

  return (
    <div className="quickPage" style={{ padding: "3rem", maxWidth: "900px", margin: "auto", lineHeight: "1.7" }}>
      <header style={{ textAlign: "center", marginBottom: "2rem" }}>
        <h1 style={{ fontSize: "2.5rem", color: "#222" }}>Frequently Asked Questions</h1>
        <p style={{ color: "#555", fontSize: "1.1rem" }}>
          Find answers to common questions about orders, returns, delivery, and customer support.
        </p>
      </header>

      {faqData.map((faq, index) => (
        <section key={index} style={{ marginBottom: "2rem" }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: "bold", color: "#000", marginBottom: "0.5rem" }}>
            {index + 1}. {faq.question}
          </h2>
          <p style={{ color: "#555" }}>{faq.answer}</p>
        </section>
      ))}

      <footer style={{ textAlign: "center", marginTop: "3rem", color: "#888", fontSize: "0.9rem" }}>
        Need more help? Visit our <Link to="/support" style={{ color: "#0077cc", textDecoration: "none" }}>Support</Link> page for guidance.
      </footer>
    </div>
  );
};

export default FAQs;
