import React from "react";
import "./index.css";
import apolo from "../../assests/apolo.jpg"

const LabCard = () => {
  return (
    <div>
        <div className="header">
            <h2>Lab Visited</h2>
            <a href="/view-all" className="view-all">View All</a>
        </div>
    <div className="lab-card-container">
      <div className="lab-image">
        <img
          src={apolo}
          alt="Apollo Diagnostics"
          className="lab-thumbnail"
        />
        <div className="lab-rating">
          ⭐ 4.5/5 (120 ratings)
        </div>
      </div>
      <div className="lab-details">
        <h3 className="lab-name">Apollo Diagnostics</h3>
        <p className="lab-location">Kormanangala, Bangalore</p>
        <p className="lab-slot">Next Slot - 07:30 AM, Tomorrow</p>
      </div>
    </div>
    </div>
  );
};

export default LabCard;
