import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromWishlist } from "../../actions/wishlistAction";
import "./Wishlist.css";

const Wishlist = () => {
  const dispatch = useDispatch();
  const { wishlistItems } = useSelector((state) => state.wishlist);

  const removeItem = (id) => {
    dispatch(removeFromWishlist(id));
  };

  return (
    <div className="wishlistPage">
      <h1 className="wishlistTitle">Your Wishlist</h1>

      {wishlistItems.length === 0 ? (
        <div className="emptyWishlist">
          <img src="/images/empty_wishlist.png" alt="Empty Wishlist" />
          <p>Your wishlist is empty. Start adding your favorites!</p>
        </div>
      ) : (
        <div className="wishlistGrid">
          {wishlistItems.map((item) => (
            <div className="wishlistCard" key={item.id}>
              <div className="wishlistImageContainer">
                <img src={item.image} alt={item.name} className="wishlistImage" />
              </div>

              <div className="wishlistInfo">
                <h3 className="wishlistName">{item.name}</h3>
                <p className="wishlistPrice">₹{item.price}</p>
                <div className="wishlistButtons">
                  <button
                    className="removeBtn"
                    onClick={() => removeItem(item.id)}
                  >
                    Remove
                  </button>
                  <button className="addToCartBtn">Add to Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
