import React, { useState, useEffect, Fragment } from "react";
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
    setKeyword(paramKeyword || "");
  }, [paramKeyword]);

  useEffect(() => {
    const allProducts = [
      ...(auraItems.newfeatured || []),
      ...(auraItems.mens || []),
      ...(auraItems.womens || []),
      ...(auraItems.kids || []),
      ...(auraItems.shoes || []),
      ...(auraItems.featuredProducts || []),
      ...(auraItems.AuraVoyagerJerseyCollection || []),
      ...(auraItems.AuraStellarCollection || []),
      ...(auraItems.AuraEclipseCollection || []),
      ...(auraItems.AuraNovaCollection || []),
      ...(auraItems.Basketball || []),
      ...(auraItems.Football || []),
      ...(auraItems.Running || []),
      ...(auraItems.Badminton || []),
      ...(auraItems.Tennis || []),
      ...(auraItems.Cricket || []),
      ...(auraItems.Golf || []),
      ...(auraItems.Rugby || []),
      ...(auraItems.skateboarding || []),
    ];

    if (keyword.trim() !== "") {
      const normalizedKeyword = keyword.toLowerCase().replace(/\s+/g, "");
      const filtered = allProducts.filter((item) => {
        const normalizedName = item.name.toLowerCase().replace(/\s+/g, "");
        return normalizedName.includes(normalizedKeyword);
      });
      setResults(filtered);
    } else {
      setResults([]);
    }
  }, [keyword]);

  return (
    <Fragment>
      <MetaData title="Search A Product -- ECOMMERCE" />
      {keyword !== "" && (
        <div className="search-results-container">
          {results.length > 0 ? (
            <>
              <div className="search-count">
                {results.length} item{results.length > 1 ? "s" : ""} found
              </div>
              <div className="search-results-grid">
                {results.map((item, index) => (
                  <div
                    key={index}
                    className="search-item-card"
                    onClick={() => history.push(`/product/${item._id}`)}
                  >
                    {item.images?.[0]?.url && (
                      <img src={item.images[0].url} alt={item.name} />
                    )}
                    <h3>{item.name}</h3>
                    {item.price && <p>₹{item.price}</p>}
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="search-item">No results found</div>
          )}
        </div>
      )}
    </Fragment>
  );
};

export default Search;
