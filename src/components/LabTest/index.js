import React from 'react';
import './index.css';

import h from "../../assests/h.png"
import heart from "../../assests/heart.png"
import jar from "../../assests/jar.png"
import plus from "../../assests/plus.png"
import injuc from "../../assests/injuc.png"
import girl from "../../assests/girl.png"

const LabTest = () => {
  return (
    <div className="container">
      <header className="header">
        <div className="location">
          <h1>Billekahalli</h1>
          <p>Sarvabhoumanagar Billekahalli...</p>
        </div>
        <div className="icons">
          <span className="icon">🔔</span>
          <span className="icon">🛒</span>
        </div>
      </header>
      <div className="search-bar">
        <input type="text" placeholder="Find lab tests, diagnostics centres" />
      </div>
      <div className="options">
        <div className="option">
          <img src={heart} alt="Annual Health Check" />
          <p>Annual Health Check</p>
        </div>
        <div className="option">
          <img src={jar} alt="Book Lab Tests" />
          <p>Book Lab Tests</p>
        </div>
        <div className="option">
          <img src={heart} alt="Popular Health Checks" />
          <p>Popular Health Checks</p>
        </div>
        <div className="option">
          <img src={h} alt="Find Labs / Hospitals" />
          <p>Find Labs / Hospitals</p>
        </div>
        <div className="option">
          <img src={plus} alt="X-Rays, Scans & MRIs" />
          <p>X-Rays, Scans & MRIs</p>
        </div>
        <div className="option">
          <img src={injuc} alt="Previous Orders" />
          <p>Previous Orders</p>
        </div>
      </div>
      <div className="lab-set-cart">
        <div className="banner">
            <span>Baby On Board?</span> <br />
            <span>Get Pregnancy Care Tests!</span>
            <p>Diabetes, ANC, Ferritin, HIV/Elisa & Thyroid</p>
            <button>BOOK NOW ></button>
        </div>
        <img className="girl-image" src ={girl} alt="girl" />
      </div>
    </div>
  );
};

export default LabTest;
