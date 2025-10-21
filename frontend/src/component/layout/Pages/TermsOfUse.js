import React from "react";

const TermsOfUse = () => {
  return (
    <div style={{ padding: "40px", maxWidth: "800px", margin: "auto", fontFamily: "Arial, sans-serif", lineHeight: "1.6" }}>
      <h1 style={{ marginBottom: "20px", color: "#333" }}>Terms of Use</h1>

      <section style={{ marginBottom: "20px" }}>
        <h3 style={{ color: "#555" }}>Acceptance of Terms</h3>
        <p>
          By accessing or using this website, you agree to comply with these Terms of Use and all applicable laws. 
          If you do not agree, please refrain from using the platform.
        </p>
      </section>

      <section style={{ marginBottom: "20px" }}>
        <h3 style={{ color: "#555" }}>User Responsibilities</h3>
        <p>
          You are responsible for using the platform in a lawful manner. Unauthorized access, hacking, or misuse of our services is strictly prohibited and may result in account suspension or legal action.
        </p>
      </section>

      <section style={{ marginBottom: "20px" }}>
        <h3 style={{ color: "#555" }}>Account Security</h3>
        <p>
          Keep your account credentials secure. You are responsible for all activity under your account. Notify us immediately if you suspect any unauthorized use.
        </p>
      </section>

      <section style={{ marginBottom: "20px" }}>
        <h3 style={{ color: "#555" }}>Intellectual Property</h3>
        <p>
          All content on this website, including text, images, logos, and software, is the property of the company and protected by copyright laws. You may not reproduce or distribute any content without permission.
        </p>
      </section>

      <section>
        <h3 style={{ color: "#555" }}>Contact</h3>
        <p>
          For questions regarding these Terms of Use, please reach out to our <a href="/support-center" style={{ color: "#0077cc" }}>Support Center</a>.
        </p>
      </section>
    </div>
  );
};

export default TermsOfUse;
