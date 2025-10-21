import React, { useState } from "react";
import { useHistory } from "react-router-dom"; // import history
import "./JoinUs.css";
import { FaGift, FaRunning, FaUsers, FaMobileAlt } from "react-icons/fa";

const JoinUs = () => {
  const [activeFAQ, setActiveFAQ] = useState(null);
  const history = useHistory(); // initialize history

  const faqs = [
    { q: "What is Membership?", a: "Membership gives you exclusive access to products, rewards, and events." },
    { q: "Is Membership free?", a: "Yes! Membership is completely free and open to everyone." },
    { q: "How do I join?", a: "Just click 'Sign Up' and create your account. It takes less than a minute." }
  ];

  // Navigation handlers
  const goToSignUp = () => history.push("/signup"); // main signup page
  const goToShopApp = () => history.push("/signup");
  const goToRunClub = () => history.push("/signup");
  const goToTrainingClub = () => history.push("/signup");

  return (
    <div className="joinus-page">
      <div className="joinus-hero">
        <h1>IT’S BETTER AS A MEMBER</h1>
        <p>Move, shop, customise and celebrate with the best of us.</p>
        <button className="join-btn" onClick={goToSignUp}>Sign Up Now</button>
      </div>

      <h2 className="section-title">Member Benefits</h2>
      <div className="benefits-grid">
        <div className="benefit-card">
          <FaGift className="benefit-icon" />
          <h3>Exclusive Access</h3>
          <p>Shop members-only products and get early access to launches.</p>
        </div>
        <div className="benefit-card">
          <FaRunning className="benefit-icon" />
          <h3>Sport & Wellness</h3>
          <p>Stay active with training programs, challenges, and events.</p>
        </div>
        <div className="benefit-card">
          <FaUsers className="benefit-icon" />
          <h3>Community</h3>
          <p>Connect with other members through live, exclusive events.</p>
        </div>
        <div className="benefit-card">
          <FaMobileAlt className="benefit-icon" />
          <h3>Apps</h3>
          <p>Use our mobile apps for workouts, running, and shopping perks.</p>
        </div>
      </div>

      <h2 className="section-title">Our Apps</h2>
      <div className="apps-grid">
        <div className="app-card">
          <h3>Shop App</h3>
          <p>Get the latest gear, personalised for you.</p>
          <button className="explore-btn" onClick={goToShopApp}>Explore</button>
        </div>
        <div className="app-card">
          <h3>Run Club</h3>
          <p>Track your runs and join challenges worldwide.</p>
          <button className="explore-btn" onClick={goToRunClub}>Explore</button>
        </div>
        <div className="app-card">
          <h3>Training Club</h3>
          <p>Train with top coaches anytime, anywhere.</p>
          <button className="explore-btn" onClick={goToTrainingClub}>Explore</button>
        </div>
      </div>

      <h2 className="section-title">Frequently Asked Questions</h2>
      <div className="faq-section">
        {faqs.map((item, idx) => (
          <div
            className={`faq-item ${activeFAQ === idx ? "active" : ""}`}
            key={idx}
            onClick={() => setActiveFAQ(activeFAQ === idx ? null : idx)}
          >
            <h4>{item.q}</h4>
            {activeFAQ === idx && <p>{item.a}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default JoinUs;
