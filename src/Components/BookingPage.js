import React, { useState, useEffect, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { initializeTimes, updateTimes } from "./bookingReducer";
import { submitAPI } from "../mocks/api";

const Booking = () => {
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");
  const [errors, setErrors] = useState({}); // ✅ State to track validation errors

  // Reducer for available times
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

  const navigate = useNavigate();

  // Update available times when the date changes
  useEffect(() => {
    dispatch({ date });
  }, [date]);

  // 🔹 Validation function
  const validateForm = () => {
    let newErrors = {};

    if (!date) newErrors.date = "Please select a date.";
    if (!time) newErrors.time = "Please select a time.";
    if (guests < 1 || guests > 10) newErrors.guests = "Guests must be between 1 and 10.";
    if (!occasion) newErrors.occasion = "Please select an occasion.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // ✅ Returns true if no errors
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return; // ✅ Stop submission if validation fails

    const formData = { date, time, guests, occasion };
    const success = await submitAPI(formData);

    if (success) {
      navigate("/confirmation");
    } else {
      alert("Booking failed. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="booking-form">
      <h2>Book a Table</h2>

      {/* Date Input */}
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      {errors.date && <p className="error">{errors.date}</p>}

      {/* Time Dropdown */}
      <label htmlFor="res-time">Choose time</label>
      <select id="res-time" value={time} onChange={(e) => setTime(e.target.value)} required>
        <option value="">Select Time</option>
        {availableTimes.map((t, index) => (
          <option key={index} value={t}>{t}</option>
        ))}
      </select>
      {errors.time && <p className="error">{errors.time}</p>}

      {/* Guests Input */}
      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        id="guests"
        value={guests}
        min="1"
        max="10"
        onChange={(e) => setGuests(parseInt(e.target.value))}
        required
      />
      {errors.guests && <p className="error">{errors.guests}</p>}

      {/* Occasion Dropdown */}
      <label htmlFor="occasion">Occasion</label>
      <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
        <option value="">Select Occasion</option>
        <option>Birthday</option>
        <option>Anniversary</option>
        <option>Engagement</option>
        <option>Other</option>
      </select>
      {errors.occasion && <p className="error">{errors.occasion}</p>}

      {/* Submit Button */}
      <button type="submit">Make Your Reservation</button>
    </form>
  );
};

export default Booking;
