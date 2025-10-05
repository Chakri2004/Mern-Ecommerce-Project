import React from "react";
import "./Help.css";

const Help = () => {
  const faqSections = [
    {
      title: "Quick Assists",
      items: [
        "Answers to our most frequently asked questions are just one click away."
      ],
    },
    {
      title: "Returns",
      items: [
        "What is Aura's return policy?",
        "How do I return my Aura order?",
        "Where is my refund?"
      ],
    },
    {
      title: "Dispatch & Delivery",
      items: [
        "What are Aura's delivery options?",
        "Can my order be dispatched internationally?",
        "Does my order need to clear customs?"
      ],
    },
    {
      title: "Orders & Payment",
      items: [
        "Where is my Aura order?",
        "Can I cancel or change my order?",
        "What are Aura's payment options?"
      ],
    },
    {
      title: "Shopping",
      items: [
        "How do I find the right size and fit?",
        "How can I get Aura's best deals?",
        "Does Aura offer product advice?"
      ],
    },
    {
      title: "Membership & Apps",
      items: [
        "What is Aura Membership?",
        "How can I join a special draw?",
        "How do I get Aura's newest product releases?"
      ],
    },
    {
      title: "Company Info",
      items: [
        "Do Aura products have a warranty?",
        "What is Aura's mission?",
        "Where can I learn more about Aura, Inc.?"
      ],
    }
  ];

  const contactInfo = [
    { type: "Call", detail: "000-123-4567" },
    { type: "Chat", detail: "Available 9:00 - 22:00" },
    { type: "Email", detail: "Aura@example.com" }
  ];

  return (
    <div className="help-page">
      <h1>Need Help?</h1>
      <p className="help-intro">Choose a topic below to quickly find answers.</p>

      <div className="help-sections">
        {faqSections.map((section, index) => (
          <div className="help-section" key={index}>
            <h2>{section.title}</h2>
            {section.items.map((item, i) => (
              <p key={i}>{item}</p>
            ))}
          </div>
        ))}
      </div>

      <div className="help-contact">
        <h2>Still Need Assistance?</h2>
        <p>Our team is here 7 days a week.</p>
        {contactInfo.map((contact, i) => (
          <p key={i}><strong>{contact.type}:</strong> {contact.detail}</p>
        ))}
      </div>
    </div>
  );
};

export default Help;
