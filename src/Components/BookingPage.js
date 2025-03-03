import React, { useState } from "react";

const Booking = () => {
  // State variables to track form inputs
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");

  // Available times for booking
  const [availableTimes] = useState([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ]);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Booking Confirmed! \nDate: ${date}\nTime: ${time}\nGuests: ${guests}\nOccasion: ${occasion}`
    );
  };

  return (
    <form onSubmit={handleSubmit} className="booking-form">
      <h2>Book a Table</h2>

      <label htmlFor="res-date">Choose date</label>
      <input type="date" id="res-date" value={date} onChange={(e) => setDate(e.target.value)} required />

      <label htmlFor="res-time">Choose time</label>
      <select id="res-time" value={time} onChange={(e) => setTime(e.target.value)} required>
        <option value="">Select Time</option>
        {availableTimes.map((t, index) => (
          <option key={index} value={t}>{t}</option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input type="number" id="guests" value={guests} min="1" max="10" onChange={(e) => setGuests(e.target.value)} required />

      <label htmlFor="occasion">Occasion</label>
      <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
        <option>Birthday</option>
        <option>Anniversary</option>
        <option>Engagement</option>
        <option>Other</option>
      </select>

      <button type="submit">Make Your Reservation</button>
    </form>
  );
};

export default Booking;
