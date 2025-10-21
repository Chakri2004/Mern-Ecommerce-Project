import React from "react";

const Careers = () => {
  const sectionStyle = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "4rem",
    gap: "2rem",
  };

  const textStyle = {
    flex: 1,
  };

  const imgStyle = {
    flex: 1,
    maxWidth: "450px",
    borderRadius: "10px",
    objectFit: "cover",
  };

  return (
    <div style={{ fontFamily: "'Arial', sans-serif", padding: "3rem", maxWidth: "1200px", margin: "auto", lineHeight: "1.6" }}>
      <header style={{ textAlign: "center", marginBottom: "3rem" }}>
        <h1 style={{ fontSize: "2.8rem", color: "#222" }}>Careers at Aura</h1>
        <p style={{ fontSize: "1.2rem", color: "#555", maxWidth: "700px", margin: "1rem auto 0 auto" }}>
          Join a team that inspires athletes, drives innovation, and makes a global impact. Explore opportunities to grow, create, and lead in a culture that celebrates creativity, collaboration, and excellence.
        </p>
      </header>

      <section style={sectionStyle}>
        <div style={textStyle}>
          <h2 style={{ fontSize: "2rem", fontWeight: "bold", color: "#000000ff", marginBottom: "0.8rem" }}>Retail & Customer Experience</h2>
          <p>
            Connect with our global customers and elevate their experience with Aura. From store management to customer support, every interaction matters. Build memorable experiences and showcase our products in the best way.
          </p>
        </div>
        <img style={imgStyle} src="/images/careers/Retail&CustomerExperience.png" alt="Retail & Customer Experience" />
      </section>

      <section style={sectionStyle}>
        <div style={textStyle}>
          <h2 style={{ fontSize: "2rem", fontWeight: "bold", color: "#000000ff", marginBottom: "0.8rem" }}>Corporate & Strategy</h2>
          <p>
            Drive the business forward with analytics, operations, and strategy. Join teams focused on sustainable growth, innovative solutions, and operational excellence. Influence decisions that shape Aura globally.
          </p>
        </div>
        <img src="/images/careers/Corporate&Strategy.png" alt="Corporate & Strategy" style={imgStyle} />
      </section>

      <section style={sectionStyle}>
        <div style={textStyle}>
          <h2 style={{ fontSize: "2rem", fontWeight: "bold", color: "#000000ff", marginBottom: "0.8rem" }}>Design & Innovation</h2>
          <p>
            Collaborate with engineers and designers to create the next generation of Aura products. Your creativity will influence performance, style, and user experience. Be at the forefront of sports innovation.
          </p>
        </div>
        <img style={imgStyle} src="/images/careers/Design&Innovation.png" alt="Design & Innovation" />
      </section>

      <section style={sectionStyle}>
        <div style={textStyle}>
          <h2 style={{ fontSize: "2rem", fontWeight: "bold", color: "#000000ff", marginBottom: "0.8rem" }}>Technology & Data</h2>
          <p>
            Work with AI, analytics, digital platforms, and IT infrastructure to power Aura. Enhance experiences for customers and teams alike while driving technological innovation that supports the entire organization.
          </p>
        </div>
        <img style={imgStyle} src="/images/careers/Technology&Data.png" alt="Technology & Data" />
      </section>

      <section style={sectionStyle}>
        <div style={textStyle}>
          <h2 style={{ fontSize: "2rem", fontWeight: "bold", color: "#000000ff", marginBottom: "0.8rem" }}>Internships & Graduate Programs</h2>
          <p>
            Hands-on opportunities for students and recent graduates to gain real-world experience. Learn from industry leaders, contribute to impactful projects, and kickstart your career with mentorship and growth opportunities.
          </p>
        </div>
        <img style={imgStyle} src="/images/careers/Internships&GraduatePrograms.png" alt="Internships & Graduate Programs" />
      </section>

      <section style={sectionStyle}>
        <div style={textStyle}>
          <h2 style={{ fontSize: "2rem", fontWeight: "bold", color: "#000000ff", marginBottom: "0.8rem" }}>Culture & Values</h2>
          <p>
            Our culture emphasizes curiosity, inclusivity, and continuous growth. Collaborate across teams, share ideas, and thrive in an environment that celebrates innovation, integrity, and teamwork.
          </p>
        </div>
        <img style={imgStyle} src="/images/careers/Culture&Values.png" alt="Culture & Values" />
      </section>

      <section style={sectionStyle}>
        <div style={textStyle}>
          <h2 style={{ fontSize: "2rem", fontWeight: "bold", color: "#000000ff", marginBottom: "0.8rem" }}>Purpose & Impact</h2>
          <p>
            Use sport as a vehicle for positive change. Contribute to sustainability, social responsibility, and community programs. Join initiatives that protect the planet, promote equality, and inspire athletes worldwide.
          </p>
        </div>
        <img style={imgStyle} src="/images/careers/Purpose&Impact.png" alt="Purpose & Impact" />
      </section>

      <footer style={{ textAlign: "center", marginTop: "4rem", color: "#888", fontSize: "0.9rem" }}>
        © 2025 Aura, Inc. All Rights Reserved
      </footer>
    </div>
  );
};

export default Careers;
