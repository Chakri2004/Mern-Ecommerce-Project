import React from "react";
import "./aboutSection.css";

const About = () => {
  return (
    <div className="aboutSection">
      <h1>About </h1>

      <div className="aboutContent">
        <p>
          Aura is more than just a shopping app – it's your personal gateway to
          discovering high-quality products effortlessly. From fashion to
          tech, Aura brings everything you love under one seamless digital roof.
        </p>
        <p>
          Built with the latest MERN stack technology, Aura is fast, secure, and
          designed for a flawless shopping experience on both mobile and
          desktop.
        </p>
        <p>
          Our goal is simple: provide a reliable, enjoyable, and personalized
          shopping journey that makes every purchase satisfying and memorable.
        </p>
      </div>

      <h2>Why Choose Aura?</h2>
      <ul>
        <li>Curated selection of top-quality products</li>
        <li>Fast and secure checkout process</li>
        <li>User-friendly interface with intuitive navigation</li>
        <li>Responsive design for any device</li>
        <li>Dedicated customer support for every shopper</li>
      </ul>

      <h2>Our Vision</h2>
      <p>
        To revolutionize online shopping by creating an app that blends
        technology, convenience, and customer satisfaction into one unforgettable
        experience.
      </p>
    </div>
  );
};

export default About;
