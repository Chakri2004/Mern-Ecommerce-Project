import React from "react";
import { Link } from "react-router-dom";
import auraItems from "../../../data/auraItems";

function Kids() {
  const products = auraItems.kids || [];

  return (
    // 1. Changed to 'page-container' for page-level padding
    <div className="page-container">
      
      {/* Optional: Add a main heading like "Kids" or "New Arrivals for Kids" */}
      <h1>Kids</h1> 

      {/* 2. Added 'grid' class to apply the new card layout */}
      <div className="grid">
        {products.map((product) => (
          <Link 
            key={product._id} 
            to={`/product/${product._id}`}
            // Ensure the Link doesn't have default text decoration
            style={{ textDecoration: 'none', color: 'inherit' }} 
          >
            {/* 3. Changed to 'card' class for the card styling */}
            <div className="card">
              
              {/* Image Placeholder/Container */}
              <div className="product-image">
                <img 
                  src={product.images[0].url} 
                  alt={product.name} 
                  // Basic inline style for image to fit the card
                  style={{ width: '100%', maxWidth: '150px', height: 'auto', marginBottom: '10px' }}
                />
              </div>

              {/* Product Details (Name and Price) */}
              <div className="product-info">
                {/* Applied a class for the name (you may need to add specific styling for the purple/blue link color in your CSS) */}
                <h3 className="product-name">{product.name}</h3>     
                {/* Applied a class for the price (you may need to add specific styling for the red price color in your CSS) */}
                <p className="product-price">₹{product.price}</p>      
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Kids;