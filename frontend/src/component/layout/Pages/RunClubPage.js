import React from "react";
import { useHistory } from "react-router-dom";

const RunClubPage = () => {
  const history = useHistory();
  return (
    <div className="signup-redirect-page">
      <h1>Run Club</h1>
      <p>To join Run Club, please sign up first.</p>
      <button onClick={() => history.push("/signup")}>Sign Up Now</button>
    </div>
  );
};

export default RunClubPage;
