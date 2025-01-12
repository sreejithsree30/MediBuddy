import React from "react";
import "./index.css";

import micro from "../../assests/micro.svg"
import location from "../../assests/location.svg"
import lab from "../../assests/jar.png"


const TrustedSection = () => {
  return (
    <div className="trusted-section-container">
      {/* Trusted Section */}
      <div className="trusted-section">
        <h2 className="trusted-title">
          Trusted by <span className="highlight">20,00,000+</span> Users Every month
        </h2>
        <div className="trusted-details">
          <div className="trusted-item">
            <img src={micro} alt="Diagnostic Centres" className="icon" />
            <p>200+ Approved Diagnostic Centres</p>
          </div>
          <div className="trusted-item">
            <img src={lab} alt="Lab Tests" className="icon" />
            <p>1200+ Lab Tests Offered</p>
          </div>
          <div className="trusted-item">
            <img src={location} alt="Pincodes Covered" className="icon" />
            <p>1200+ Pincodes Covered</p>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="user-testimonial">
        <h3 className="testimonial-title">What our Users say</h3>
        <div className="testimonial-card">
          <div className="testimonial-header">
            <span className="rating">⭐⭐⭐⭐⭐</span>
            <span className="date">2 Days Ago</span>
            <span className="location">📍 Bangalore</span>
          </div>
          <p className="testimonial-text">
            "Good app and very helpful to customer as customer can book online health checkup and
            book hospitalization as customer ca..."
          </p>
          <div className="testimonial-user">
            Vikrant Kishore Suryavanshi
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustedSection;
