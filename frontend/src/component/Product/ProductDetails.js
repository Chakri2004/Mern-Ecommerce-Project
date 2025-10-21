import React, { Fragment, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Rating,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { useAlert } from "react-alert";
import { addItemsToCart } from "../../actions/cartAction";
import { addToWishlist } from "../../actions/wishlistAction";
import auraItems from "../../data/auraItems";
import ReviewCard from "./ReviewCard";
import "./ProductDetails.css";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const alert = useAlert();

  const product =
    auraItems.newfeatured?.find((p) => p._id === id) ||
    auraItems.featuredProducts?.find((p) => p._id === id) ||
    auraItems.AuraVoyagerJerseyCollection?.find((p) => p._id === id) ||
    auraItems.jerseyVariants?.find((p) => p._id === id) ||
    auraItems.stellarVariants?.find((p) => p._id === id) ||
    auraItems.eclipseVariants?.find((p) => p._id === id) ||
    auraItems.novaVariants?.find((p) => p._id === id) ||
    auraItems.mens?.find((p) => p._id === id) ||
    auraItems.womens?.find((p) => p._id === id) ||
    auraItems.kids?.find((p) => p._id === id) ||
    auraItems.shoes?.find((p) => p._id === id) ||
    auraItems.laptops?.find((p) => p._id === id) ||
    auraItems.basketball?.find(p => p._id === id) ||
    auraItems.football?.find(p => p._id === id) ||
    auraItems.running?.find(p => p._id === id) ||
    auraItems.badminton?.find(p => p._id === id) ||
    auraItems.tennis?.find(p => p._id === id) ||
    auraItems.cricket?.find(p => p._id === id) ||
    auraItems.golf?.find(p => p._id === id) ||
    auraItems.rugby?.find(p => p._id === id) ||
    auraItems.skateboarding?.find(p => p._id === id);

  const [selectedImage, setSelectedImage] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [open, setOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [reviews, setReviews] = useState(product?.reviews || []);

  useEffect(() => {
    if (product && product.images && product.images.length > 0) {
      setSelectedImage(product.images[0].url);
    }
    setReviews(product?.reviews || []);
  }, [product]);

  if (!product) {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h2>Product not found!</h2>
      </div>
    );
  }

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

  const handleReviewSubmit = () => {
    if (rating === 0 || comment.trim() === "") {
      alert.error("Please give a rating and comment");
      return;
    }

    const newReview = {
      _id: Date.now().toString(),
      name: "You", 
      rating,
      comment,
    };

    setReviews((prev) => [newReview, ...prev]);
    setRating(0);
    setComment("");
    setOpen(false);
    alert.success("Review submitted successfully!");
  };

  return (
    <Fragment>
      <div className="ProductDetails">
        <div className="image-gallery-container">
          <div className="thumbnail-list">
            {product.images?.map((item, i) => (
              <img
                key={i}
                src={item.url}
                alt={`${product.name} thumbnail ${i + 1}`}
                className={`thumbnail-image ${
                  selectedImage === item.url ? "active" : ""
                }`}
                onClick={() => setSelectedImage(item.url)}
                onMouseOver={() => setSelectedImage(item.url)}
              />
            ))}
          </div>
          <div className="main-image-display">
            <img
              src={selectedImage}
              alt="Selected product view"
              className="main-product-image"
            />
          </div>
        </div>

        <div className="detailsContainer">
          <h2>{product.name}</h2>
          <p>Product # {product._id}</p>

          <div className="reviews-summary">
            <Rating value={product.ratings || 0} readOnly precision={0.5} />
            <span> ({reviews.length} Reviews)</span>
          </div>

          <h1>₹{product.price}</h1>

          <div className="quantitySection">
            <div className="quantity-controls">
              <button
                onClick={() => quantity > 1 && setQuantity(quantity - 1)}
              >
                -
              </button>
              <span className="quantityValue">{quantity}</span>
              <button
                onClick={() =>
                  quantity < (product.Stock || 99) && setQuantity(quantity + 1)
                }
              >
                +
              </button>
            </div>
          </div>

          <div className="action-buttons">
            <button
              className="action-btn add-to-cart-btn"
              disabled={(product.Stock || 0) < 1}
              onClick={addToCartHandler}
            >
              Add to Cart
            </button>
            <button
              className="action-btn wishlist-btn"
              onClick={addWishlistHandler}
            >
              Add to Wishlist
            </button>
          </div>

          <p className="stock-status">
            Status:{" "}
            <b
              className={(product.Stock || 0) < 1 ? "redColor" : "greenColor"}
            >
              {(product.Stock || 0) < 1 ? "OutOfStock" : "InStock"}
            </b>
          </p>

          <div className="description-block">
            <h4>Description</h4>
            <p>{product.description}</p>
          </div>

          <button className="submitReview" onClick={() => setOpen(true)}>
            Submit Review
          </button>

          {product.specifications && (
            <div className="specificationsSection">
              <Typography variant="h6" gutterBottom>
                Product Specifications:
              </Typography>
              <TableContainer component={Paper} className="specificationsTable">
                <Table size="small">
                  <TableBody>
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <TableRow key={key}>
                        <TableCell className="specKey">
                          {key.charAt(0).toUpperCase() +
                            key.slice(1).replace(/([A-Z])/g, " $1")}
                        </TableCell>
                        <TableCell className="specValue">{value}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          )}
        </div>
      </div>

      <Dialog open={open} onClose={() => setOpen(false)} maxWidth="md" fullWidth>
        <DialogTitle>Submit Review - {product.name}</DialogTitle>
        <DialogContent>
          <div className="reviewDialogContent">
            <Typography variant="h6" gutterBottom>
              Rate this product:
            </Typography>
            <Rating
              onChange={(e, val) => setRating(val)}
              value={rating}
              size="large"
            />
            <textarea
              className="reviewTextarea"
              cols="30"
              rows="4"
              placeholder="Share your experience with this product..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} color="secondary">
            Cancel
          </Button>
          <Button
            onClick={handleReviewSubmit}
            color="primary"
            variant="contained"
          >
            Submit Review
          </Button>
        </DialogActions>
      </Dialog>

      {reviews.length > 0 ? (
        <div className="reviewsSection">
          {reviews.map((review) => (
            <ReviewCard key={review._id} review={review} />
          ))}
        </div>
      ) : (
        <p className="no-reviews-text">No Reviews Yet</p>
      )}
    </Fragment>
  );
};

export default ProductDetails;
