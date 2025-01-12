
import React from 'react';
import './index.css';

const HealthCheckup = () => {
  return (
    <div className="card">
      <div className="card-top-cart">
        <h4>Features Health Check-Ups</h4>
        <button className="card-button">View All</button>
      </div>
      <div className="card-button-cart">
        <button>Popular</button>
        <button>Center Visit</button>
        <button>Full Body Check Up</button>
        <button>Popular</button>
      </div>
      <p className="sponsored">Sponsored</p>
      <h2 className="title">Medibuddy Fit health check-up</h2>
      <div className="reports">Reports in 10-12 hrs</div>
      <div className="tests">
        <h3>90 Tests</h3>
        <ul>
          <li>Cholesterol - Total</li>
          <li>Vitamin D... + 87 more</li>
        </ul>
      </div>
      <div className="includes">
        <h3>Includes</h3>
        <div className="radiology">Radiology</div>
      </div>
      <div className="details">
        <div className="fasting">
          <span>Fasting</span>
          <span>07-08 Hrs</span>
        </div>
        <div className="available">
          <span>Available</span>
          <span>at Home</span>
        </div>
      </div>
      <div className="price-section">
        <span className="price">₹ 0</span>
        <div className="quantity-selector">
          <button>-</button>
          <span>1</span>
          <button>+</button>
        </div>
      </div>
    </div>
  );
};

export default HealthCheckup;
