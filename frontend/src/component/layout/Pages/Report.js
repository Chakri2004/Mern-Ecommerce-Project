import React, { useState } from "react";

const Report = () => {
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Report Submitted:", { category, description });
    setSubmitted(true);
    setCategory("");
    setDescription("");
  };

  const categories = [
    "Safety Concerns",
    "Product or Service Issues",
    "Ethical & Workplace Concerns",
    "Confidentiality & Support",
  ];

  return (
    <div style={{ padding: "3rem", maxWidth: "700px", margin: "auto", fontFamily: "'Arial', sans-serif" }}>
      <h1 style={{ marginBottom: "1rem" }}>Report a Concern</h1>
      <p style={{ marginBottom: "2rem" }}>
        If you have a concern, please select a category and describe the issue in detail. Your report will be reviewed confidentially.
      </p>

      {submitted && (
        <div style={{ marginBottom: "1rem", padding: "1rem", background: "#d4edda", color: "#155724", borderRadius: "5px" }}>
          Thank you! Your report has been submitted.
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "bold" }}>Category</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
          style={{ width: "100%", padding: "0.5rem", marginBottom: "1.5rem", borderRadius: "5px", border: "1px solid #ccc" }}
        >
          <option value="">Select a category</option>
          {categories.map((cat, idx) => (
            <option key={idx} value={cat}>{cat}</option>
          ))}
        </select>
        <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "bold" }}>Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          placeholder="Describe the issue..."
          style={{ width: "100%", padding: "0.5rem", marginBottom: "1.5rem", borderRadius: "5px", border: "1px solid #ccc", minHeight: "120px" }}
        />
        <button
          type="submit"
          style={{ padding: "0.6rem 1.2rem", background: "#0077cc", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" }}
        >
          Submit Report
        </button>
      </form>
    </div>
  );
};

export default Report;
