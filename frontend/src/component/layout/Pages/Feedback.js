import React from "react";

const Feedback = () => {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Send Feedback</h1>
      <p>Your opinions matter! Let us know how we can improve your Aura experience.</p>
      <textarea placeholder="Type your feedback here..." style={{ width: "100%", height: "100px", margin: "1rem 0", padding: "0.5rem" }} />
      <button style={{ padding: "0.5rem 1rem", background: "#0077cc", color: "#fff", border: "none", borderRadius: "5px" }}>Submit</button>
    </div>
  );
};

export default Feedback;
