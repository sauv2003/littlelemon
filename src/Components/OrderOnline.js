import React from "react";
// import "./OrderOnline.css";

const branches = [
  {
    city: "Chicago (Main Branch)",
    phone: "+1 312-555-1234",
    address: "123 Lemon St, Chicago, IL",
    hours: "10:00 AM - 11:00 PM",
  },
  {
    city: "New York",
    phone: "+1 212-555-5678",
    address: "456 Citrus Ave, New York, NY",
    hours: "9:00 AM - 10:00 PM",
  },
  {
    city: "Los Angeles",
    phone: "+1 310-555-9101",
    address: "789 Zest Blvd, Los Angeles, CA",
    hours: "8:30 AM - 10:30 PM",
  },
  {
    city: "Miami",
    phone: "+1 305-555-1212",
    address: "101 Sunshine Rd, Miami, FL",
    hours: "9:30 AM - 11:30 PM",
  },
  {
    city: "Houston",
    phone: "+1 713-555-3434",
    address: "202 Lime St, Houston, TX",
    hours: "10:00 AM - 11:00 PM",
  },
];

const OrderOnline = () => {
  return (
    <div className="order-online">
      <h2>Order Online - Contact Our Branches</h2>
      <div className="branches-list">
        {branches.map((branch, index) => (
          <div key={index} className="branch-card">
            <h3>{branch.city}</h3>
            <p><strong>Phone:</strong> {branch.phone}</p>
            <p><strong>Address:</strong> {branch.address}</p>
            <p><strong>Hours:</strong> {branch.hours}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderOnline;
