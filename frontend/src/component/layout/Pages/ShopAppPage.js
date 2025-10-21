import React from "react";
import { useHistory } from "react-router-dom";

const ShopAppPage = () => {
  const history = useHistory();
  return (
    <div className="signup-redirect-page">
      <h1>Shop App</h1>
      <p>To access the Shop App, please sign up first.</p>
      <button onClick={() => history.push("/signup")}>Sign Up Now</button>
    </div>
  );
};

export default ShopAppPage;
