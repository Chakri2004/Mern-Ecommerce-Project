import React, { useState } from "react";

const newsArticles = [
  {
    category: "Update",
    headline: "Aura Launches Eco-Friendly Training Gear",
    date: "21 October 2025",
    summary: "Introducing sustainable sportswear crafted from recycled materials, designed for athletes who care about performance and the planet."
  },
  {
    category: "Spotlight",
    headline: "Aura Athlete of the Month: Jordan Riley",
    date: "19 October 2025",
    summary: "Celebrating outstanding achievements, Jordan Riley sets new benchmarks in speed and endurance."
  },
  {
    category: "Release",
    headline: "Aura Expands Global Running Club Network",
    date: "16 October 2025",
    summary: "Joining runners worldwide, Aura launches new clubs to bring local communities together through running events and training programs."
  },
  {
    category: "Event",
    headline: "Aura Fitness Expo 2025 Kicks Off in New York",
    date: "12 October 2025",
    summary: "An immersive fitness experience featuring workshops, athlete meet-and-greets, and previews of the latest Aura gear."
  },
  {
    category: "Collection",
    headline: "Aura Unveils Limited Edition Court Sneakers",
    date: "08 October 2025",
    summary: "A nod to retro basketball culture with modern performance enhancements for athletes and collectors alike."
  },
];

const ITEMS_PER_PAGE = 2; 

const News = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(newsArticles.length / ITEMS_PER_PAGE);

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const currentNews = newsArticles.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <div style={{ maxWidth: "900px", margin: "auto", padding: "40px", fontFamily: "'Roboto', sans-serif" }}>
      <h1 style={{ marginBottom: "40px", color: "#222" }}>Aura Newsroom</h1>

      {currentNews.map((news, idx) => (
        <div
          key={idx}
          style={{
            padding: "25px",
            marginBottom: "25px",
            borderRadius: "12px",
            borderLeft: "6px solid #0077cc",
            background: "#f0f4f8",
            boxShadow: "0 2px 10px rgba(0,0,0,0.05)"
          }}
        >
          <span style={{ fontWeight: "bold", color: "#0077cc", fontSize: "14px" }}>{news.category}</span>
          <h2 style={{ margin: "10px 0", color: "#111" }}>{news.headline}</h2>
          <p style={{ fontSize: "13px", color: "#666", marginBottom: "10px" }}>{news.date}</p>
          <p style={{ fontSize: "15px", color: "#333" }}>{news.summary}</p>
        </div>
      ))}

      <div style={{ display: "flex", justifyContent: "space-between", marginTop: "30px" }}>
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          style={{
            padding: "10px 20px",
            borderRadius: "6px",
            border: "1px solid #0077cc",
            background: currentPage === 1 ? "#ccc" : "#fff",
            color: currentPage === 1 ? "#888" : "#0077cc",
            cursor: currentPage === 1 ? "not-allowed" : "pointer"
          }}
        >
          &larr; Previous
        </button>

        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          style={{
            padding: "10px 20px",
            borderRadius: "6px",
            border: "none",
            background: currentPage === totalPages ? "#ccc" : "#0077cc",
            color: "#fff",
            cursor: currentPage === totalPages ? "not-allowed" : "pointer"
          }}
        >
          Next &rarr;
        </button>
      </div>
    </div>
  );
};

export default News;
