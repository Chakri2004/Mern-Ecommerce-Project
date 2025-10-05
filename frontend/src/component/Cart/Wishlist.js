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
      <h1>Your Wishlist</h1>
      {wishlistItems.length === 0 ? (
        <p>No items in your wishlist.</p>
      ) : (
        <div className="wishlistItems">
          {wishlistItems.map((item) => (
            <div className="wishlistItem" key={item.id}>
              <img src={item.image} alt={item.name} />
              <div>
                <h3>{item.name}</h3>
                <p>₹{item.price}</p>
              </div>
              <button onClick={() => removeItem(item.id)}>Remove</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
