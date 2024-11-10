import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader"; // Custom loader component
import Error from "../components/Error"; // Custom error component
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";

dayjs.extend(duration);

function BookingScreen() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [room, setRoom] = useState(null);
  const [totalamount, setTotalAmount] = useState(0); // Added state for total amount

  const { roomid, fromdate, todate } = useParams();

  // Calculate total days and total amount based on room data
  const startDate = dayjs(fromdate, "DD-MM-YYYY");
  const endDate = dayjs(todate, "DD-MM-YYYY");
  const totaldays = endDate.diff(startDate, "day");
  const totalAmount = room ? totaldays * room.rentperday : 0;

  // Fetch room data based on roomid
  useEffect(() => {
    const fetchRoomData = async () => {
      try {
        setLoading(true);
        const { data } = await axios.post("/api/rooms/getroombyid", { roomid });
        setRoom(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRoomData();
  }, [roomid]);

  return (
    <div className="m-5">
      {loading ? (
        <Loader />
      ) : room ? (
        <div>
          <div className="row justify-content-center mt-5 bs">
            <div className="col-md-6">
              <h1>{room.name}</h1>
              <img src={room.imageurls[0]} className="bigimg" alt="Room" />
            </div>
            <div className="col-md-6">
              <div style={{ textAlign: "right" }}>
                <h1>Booking Details</h1>
                <hr />
                <p>Name: {room.name}</p>
                <p>From Date: {fromdate}</p>
                <p>To Date: {todate}</p>
                <p>Max Count: {room.maxcount}</p>
              </div>
              <div style={{ textAlign: "right" }}>
                <h1>Amount</h1>
                <hr />
                <p>Total days: {totaldays}</p>
                <p>Rent per day: {room.rentperday}</p>
                <p>Total Amount: {totalAmount}</p>
              </div>
              <div style={{ float: "right" }}>
                <button className="btn btn-primary">Pay Now</button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Error />
      )}
    </div>
  );
}

export default BookingScreen;
