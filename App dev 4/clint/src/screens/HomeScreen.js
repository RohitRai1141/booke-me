import React, { useState, useEffect } from "react";
import axios from "axios";
import Room from "../components/Room";
import Loader from "../components/Loader";
import Error from "../components/Error";
import { DatePicker } from "antd";
//import moment from "moment";
import dayjs from "dayjs";
const { RangePicker } = DatePicker;

function Homescreen() {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [selectedDates, setSelectedDates] = useState([]); // State to track selected dates

  const [fromdate, setfromdate] = useState();
  const [todate, settodate] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = (await axios.get("/api/rooms/getallrooms")).data;
        setRooms(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        console.log(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  function filterByDate(dates) {
    if (dates && dates.length === 2) {
      // Log formatted dates with dayjs
      setfromdate(dayjs(dates[0]).format("DD-MM-YYYY"));
      settodate(dayjs(dates[1]).format("DD-MM-YYYY"));
    } else {
      console.log("Please select a date range");
    }
  }

  return (
    <div className="container">
      <div className="row mt-5 bs">
        <div className="col-md-3">
          <RangePicker format="DD-MM-YYYY" onChange={filterByDate} />
        </div>

        <div className="col-md-5">
          <input
            type="text"
            className="form-control"
            placeholder="Search rooms"
          />
        </div>

        <div className="col-md-3">
          <select className="form-control">
            <option value="all">All</option>
            <option value="delux">Lab</option>
            <option value="non-delux">Class</option>
          </select>
        </div>
      </div>

      <div className="row justify-content-center mt-5">
        {loading ? (
          <Loader />
        ) : rooms.length > 1 ? (
          rooms.map((room, index) => (
            <div className="col-md-9 mt-2" key={index}>
              <Room room={room} fromdate={fromdate} todate={todate} />
            </div>
          ))
        ) : (
          <Error />
        )}
      </div>
    </div>
  );
}

export default Homescreen;
