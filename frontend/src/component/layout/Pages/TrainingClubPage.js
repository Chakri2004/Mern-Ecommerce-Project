import React from "react";
import { useHistory } from "react-router-dom";

const TrainingClubPage = () => {
  const history = useHistory();
  return (
    <div className="signup-redirect-page">
      <h1>Training Club</h1>
      <p>To access Training Club, please sign up first.</p>
      <button onClick={() => history.push("/signup")}>Sign Up Now</button>
    </div>
  );
};

export default TrainingClubPage;
