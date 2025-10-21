import React from "react";
import { useHistory } from "react-router-dom";
import "./BecomeMember.css"; 

const BecomeMemberCTA = () => {
  const history = useHistory();

  const goToJoinUs = () => {
    history.push("/join-us");
  };

  return (
    <div className="become-member-cta">
      <h2>Join Aura Membership</h2>
      <p>Sign up to enjoy exclusive offers, early product launches, and member-only rewards.</p>
      <button className="join-now-btn" onClick={goToJoinUs}>
        Join Now
      </button>
    </div>
  );
};

export default BecomeMemberCTA;
