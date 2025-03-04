import React from "react";
import { Link } from "react-router-dom";

const ConfirmedBooking = () => {
  return (
    <div className="confirmation-container">
      <h2>   Booking Confirmed! 🎉</h2>
      <p>Thank you for reserving a table at Little Lemon. We look forward to serving you!</p>
      <Link to="/" className="home-button">Return to Home</Link>
    </div>
  );
};

export default ConfirmedBooking;
