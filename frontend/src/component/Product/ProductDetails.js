import React, { Fragment, useState } from "react";
import { useParams } from "react-router-dom";
import Carousel from "react-material-ui-carousel";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Rating,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { useAlert } from "react-alert";
import { addItemsToCart } from "../../actions/cartAction";
import { addToWishlist } from "../../actions/wishlistAction";
import { FiHeart } from "react-icons/fi";   // Heart icon
import auraItems from "../../data/auraItems";
import ReviewCard from "./ReviewCard";
import "./ProductDetails.css";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const alert = useAlert();

  const product =
    auraItems.newfeatured?.find((p) => p._id === id) ||
    auraItems.mens?.find((p) => p._id === id) ||
    auraItems.womens?.find((p) => p._id === id) ||
    auraItems.kids?.find((p) => p._id === id) ||
    auraItems.shoes?.find((p) => p._id === id) ||
    auraItems.laptops?.find((p) => p._id === id);

  if (!product) {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h2>Product not found!</h2>
      </div>
    );
  }

  const [quantity, setQuantity] = useState(1);
  const [open, setOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const addToCartHandler = () => {
    dispatch(addItemsToCart(product._id, quantity));
    alert.success(`${product.name} added to cart`);
  };

  const addWishlistHandler = () => {
    dispatch(
      addToWishlist({
        id: product._id,
        name: product.name,
        price: product.price,
        image: product.images?.[0]?.url,
      })
    );
    alert.success(`${product.name} added to wishlist`);
  };

  return (
    <Fragment>
      <div className="ProductDetails">
        <div className="carouselContainer">
          <Carousel
            autoPlay={true}
            interval={3000}   
            animation="slide"
            navButtonsAlwaysVisible={true}
            indicators={true}
          >
            {product.images?.map((item, i) => (
              <img
                key={i}
                className="CarouselImage"
                src={item.url}
                alt={`${i} Slide`}
              />
            ))}
          </Carousel>
        </div>

        <div className="detailsContainer">
          <h2>{product.name}</h2>
          <p>Product # {product._id}</p>
          <Rating value={product.ratings || 0} readOnly precision={0.5} />
          <span> ({product.numOfReviews || 0} Reviews)</span>
          <h1>₹{product.price}</h1>

          <div className="quantitySection">
            <button onClick={() => quantity > 1 && setQuantity(quantity - 1)}>-</button>
            <span className="quantityValue">{quantity}</span>   
            <button onClick={() => quantity < product.Stock && setQuantity(quantity + 1)}>+</button>


            {/* Cart + Wishlist side by side */}
            <div className="cart-wishlist">
              <button
                disabled={(product.Stock || 0) < 1}
                onClick={addToCartHandler}
              >
                Add to Cart
              </button>

              {/* Wishlist Button */}
              <button className="wishlistBtn" onClick={addWishlistHandler}>
                Add to Wishlist
              </button>
            </div>
          </div>

          <p>
            Status:{" "}
            <b
              className={(product.Stock || 0) < 1 ? "redColor" : "greenColor"}
            >
              {(product.Stock || 0) < 1 ? "OutOfStock" : "InStock"}
            </b>
          </p>

          <p>
            Description: <span>{product.description}</span>
          </p>

          <button className="reviewBtn" onClick={() => setOpen(!open)}>
            Submit Review
          </button>
        </div>
      </div>

      {/* Review Dialog */}
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Submit Review</DialogTitle>
        <DialogContent>
          <Rating
            onChange={(e, val) => setRating(val)}
            value={rating}
            size="large"
          />
          <textarea
            cols="30"
            rows="5"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} color="secondary">
            Cancel
          </Button>
          <Button onClick={() => setOpen(false)} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>

      {/* Reviews Section */}
      {product.reviews?.length > 0 ? (
        <div className="reviewsSection">
          {product.reviews.map((review) => (
            <ReviewCard key={review._id} review={review} />
          ))}
        </div>
      ) : (
        <p>No Reviews Yet</p>
      )}
    </Fragment>
  );
};

export default ProductDetails;
