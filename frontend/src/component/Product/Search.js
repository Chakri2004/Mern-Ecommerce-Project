import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import auraItems from "../../data/auraItems";
import MetaData from "../layout/MetaData";
import "./Search.css";

const Search = () => {
  const { keyword: paramKeyword } = useParams();
  const history = useHistory();
  const [keyword, setKeyword] = useState(paramKeyword || "");
  const [results, setResults] = useState([]);

  useEffect(() => {
    const allProducts = Object.values(auraItems).flat();

    if (keyword.trim() !== "") {
      const normalizedKeyword = keyword.toLowerCase().replace(/\s+/g, "");
      const filtered = allProducts.filter((item) =>
        item.name.toLowerCase().replace(/\s+/g, "").includes(normalizedKeyword)
      );
      setResults(filtered);
    } else {
      setResults([]);
    }
  }, [keyword]);

  const handleSearch = (e) => {
    setKeyword(e.target.value);
  };

  return (
    <>
      <MetaData title="Search | Aura Store" />
      <div className="classic-search-container">
        <h1 className="classic-title">Find Your Style</h1>
        <p className="classic-subtitle">Discover timeless products you'll love</p>
        <div className="classic-search-input-wrapper">
          <span className="classic-search-icon" aria-hidden="true">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" focusable="false" aria-hidden="true">
              <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </span>

          <input
            type="text"
            value={keyword}
            onChange={handleSearch}
            placeholder="Search for a product..."
            className="classic-input"
            aria-label="Search products"
          />
        </div>

        {keyword && (
          <div className="classic-results">
            {results.length > 0 ? (
              <ul>
                {results.map((item, i) => (
                  <li
                    key={i}
                    onClick={() => history.push(`/product/${item._id}`)}
                    className="classic-result-item"
                  >
                    <div className="classic-image-wrapper">
                      {item.images?.[0]?.url ? (
                        <img src={item.images[0].url} alt={item.name} />
                      ) : (
                        <div className="no-img">No Image</div>
                      )}
                    </div>
                    <div className="classic-details">
                      <span className="item-name">{item.name}</span>
                      {item.price && (
                        <span className="item-price">₹{item.price}</span>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="no-match">No results found for “{keyword}”</p>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Search;
