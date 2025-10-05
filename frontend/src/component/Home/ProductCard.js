import React from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { useDispatch } from "react-redux";
import { addToWishlist } from "../../actions/wishlistAction"; 
import { FiHeart } from "react-icons/fi";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  // Add product to wishlist
  const addWishlistHandler = () => {
    dispatch(
      addToWishlist({
        id: product._id,
        name: product.name,
        price: product.price,
        image: product.images[0]?.url,
      })
    );
  };

  return (
    <div className="productCard">
      {/* Wishlist heart icon */}
      <FiHeart
        className="wishlistIcon"
        onClick={addWishlistHandler}
        style={{ cursor: "pointer", color: "red", position: "absolute", top: "10px", right: "10px", fontSize: "24px" }}
      />

      <img
        src={product.images[0]?.url}
        alt={product.name}
        className="productImage"
      />

      <p className="productName">{product.name}</p>

      <div className="productRating">
        <ReactStars
          count={5}
          size={24}
          value={product.ratings}
          isHalf={true}
          edit={false}
          activeColor="#ffd700"
        />
        <span>({product.numOfReviews} Reviews)</span>
      </div>

      <p className="productPrice">₹{product.price}</p>

      <Link to={`/product/${product._id}`} className="viewProductBtn">
        View Details
      </Link>
    </div>
  );
};

export default ProductCard;
