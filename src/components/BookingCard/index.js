import React from 'react';
import './index.css';

import profile from "../../assests/profile.svg"

const BookingCard = () => {
  return (
    <div className="booking-card">
      <div className="header">
        <h2>Your Active Bookings</h2>
        <a href="/view-all" className="view-all">View All</a>
      </div>
      <div className="card">
        <div className="card-header">
          <div className="user-info">
            <img src={profile} alt="User Icon" className="user-icon" />
            <div>
              <h3>Mr. Suresh Gaikwad</h3>
              <p className="status">Appointment Confirmed</p>
            </div>
          </div>
          <div className="arrow-icon">&#9654;</div>
        </div>
        <div className="card-body">
          <div className="booking-info">
            <div className="date">
              <p>03 Nov'22</p>
              <p>Wednesday</p>
            </div>
            <div className="time">
              <p>09:30-10:30 AM</p>
              <p>Home Sample Collection</p>
            </div>
            <div className="tests">
              <p>03</p>
              <p>Lab Tests</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingCard;
