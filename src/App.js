import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css"; 
import Header from "./Header";
import Footer from "./Footer";
import HomePage from "./Components/HomePage"; 
import BookingPage from "./Components/BookingPage"; 
import Menu from "./Components/Menu"
import OrderOnline from "./Components/OrderOnline";
import Login from "./Components/Login";
import ConfirmedBooking from "./Components/ConfirmedBooking";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/orderonline" element={<OrderOnline />} />
        <Route path="/login" element ={<Login/>}/>
        <Route path="/confirmation" element={<ConfirmedBooking />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
