import React from "react";
import { Link } from "react-router-dom";

const products = [
  {
    _id: "avj1",
    name: "Aura Voyager Jersey Collection",
    image: "/images/featuredProducts/aura-voyager-jersey-collection.png",
    collectionRoute: "/collection/aura-voyager-jersey-collection"
  },
  {
    _id: "ast1",
    name: "Aura Stellar Collection",
    image: "/images/featuredProducts/aura-stellar.png",
    collectionRoute: "/collection/aura-stellar-collection"
  },
  {
    _id: "ae1",
    name: "Aura Eclipse Collection",
    image: "/images/featuredProducts/aura-eclipse.png",
    collectionRoute: "/collection/aura-eclipse-collection"
  },
  {
    _id: "an1",
    name: "Aura Nova Collection",
    image: "/images/featuredProducts/aura-nova-collection.png",
    collectionRoute: "/collection/aura-nova-collection"
  },
];

const FeaturedProducts = () => {
  return (
    <div className="featuredProducts">
      <h2>Featured Products</h2>
      <div className="productsGrid">
        {products.map(prod => (
          <div key={prod._id} className="productCard">
            <img src={prod.image} alt={prod.name} />
            <h3>{prod.name}</h3>
            <Link to={prod.collectionRoute}>
              <button>Shop</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
