import React, { useState } from "react";

function Booking() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [roomType, setRoomType] = useState("deluxe");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [message, setMessage] = useState("");

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    // Add booking logic or API call here bizobuzaho@mailinator.com Pa$$w0rd!
    setMessage("Booking submitted successfully!");
  };

  return (
    <div className="container">
      <h2 className="text-center mt-4">Book Your Stay</h2>
      <form onSubmit={handleBookingSubmit} className="mt-4">
        <div className="form-group mb-3">
          <label>Name:</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        
        <div className="form-group mb-3">
          <label>Email:</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group mb-3">
          <label>Room Type:</label>
          <select
            className="form-select"
            value={roomType}
            onChange={(e) => setRoomType(e.target.value)}
          >
            <option value="deluxe">Lab</option>
            <option value="non-deluxe">Class</option>
          </select>
        </div>

        <div className="form-group mb-3">
          <label>Start Date:</label>
          <input
            type="date"
            className="form-control"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            required
          />
        </div>

        <div className="form-group mb-3">
          <label>End Date:</label>
          <input
            type="date"
            className="form-control"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary mt-3">Submit Booking</button>
      </form>

      {message && <p className="alert alert-success mt-4">{message}</p>}
    </div>
  );
}

export default Booking;
