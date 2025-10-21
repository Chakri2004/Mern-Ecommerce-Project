import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiShoppingCart, FiHeart, FiSearch } from "react-icons/fi";
import "./Header.css";

const Header = ({ isLoggedIn, handleLogout }) => {
  const [keyword, setKeyword] = useState("");
  const history = useHistory();

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/search/${encodeURIComponent(keyword.trim())}`);
    } else {
      history.push("/products");
    }
  };

  return (
    <header className="header">
      <div className="topBar">
        <ul>
          <li><Link to="/find-store">Find a Store</Link></li>
          <li><Link to="/help">Help</Link></li>
          <li><Link to="/join-us">Join Us</Link></li>
          {!isLoggedIn ? (
            <li><Link to="/signin">Sign In</Link></li>
          ) : (
            <li>
              <span style={{ cursor: "pointer" }} onClick={handleLogout}>
                Sign Out
              </span>
            </li>
          )}
        </ul>
      </div>

      <div className="mainHeader">
        <div className="logo">
          <Link to="/">AURA</Link>
        </div>

        <nav className="mainMenu">
          <ul>
            <li><Link to="/new-featured">New & Featured</Link></li>
            <li><Link to="/mens">Mens</Link></li>
            <li><Link to="/womens">Womens</Link></li>
            <li><Link to="/kids">Kids</Link></li>
            <li><Link to="/shoes">Shoes</Link></li>
            <li><Link to="/laptops">Laptops</Link></li>
          </ul>
        </nav>

        <div className="searchCart">
          <form onSubmit={submitHandler} className="headerSearchForm">
            <div className="searchInputWrapper">
              <FiSearch className="searchIcon" />
              <input
                type="text"
                placeholder="Search"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
              />
            </div>
          </form>

          <div className="icons">
            <Link to="/wishlist" className="iconButton">
              <FiHeart />
            </Link>
            <Link to="/cart" className="iconButton">
              <FiShoppingCart />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
