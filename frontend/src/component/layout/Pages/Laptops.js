import React from "react";
import { Link } from "react-router-dom";
import auraItems from "../../../data/auraItems";


function Laptops() {
  const products = auraItems.laptops || [];

  return (
    <div className="page-container">
      <h1>Laptops</h1> 
      <div className="grid">
        {products.map((product) => (
          <Link 
            key={product._id} 
            to={`/product/${product._id}`}
            style={{ textDecoration: 'none', color: 'inherit' }} 
          >
            <div className="card">
              <div className="product-image">
                <img 
                  src={product.images[0].url} 
                  alt={product.name} 
                  style={{ width: '100%', maxWidth: '150px', height: 'auto', marginBottom: '10px' }}
                />
              </div>
              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-price">₹{product.price}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Laptops;