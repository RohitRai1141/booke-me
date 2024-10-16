import React, { useState, useEffect } from 'react';
import axios from "axios";
import Room from '../components/Room'; // Correct the path as per your file structure


function Homescreen() {

  const [rooms, setRooms] = useState([]); // Corrected variable name to camelCase
  const [loading, setLoading] = useState(false); // Default to false
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = (await axios.get('/api/rooms/getallrooms')).data; // Fetch data from the API
        setRooms(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        console.log(error);
        setLoading(false);
      }
    };

    fetchData(); // Call the fetch function
  }, []);

  return (
    <div className='container'>
      <div className='row jestify-content-center mt-5'>
        {loading ? (
          <h1>Loading...</h1>
        ) : error ? (
          <h1>Error</h1>
        ) : (
          rooms.map((room, index) =>{
            return <div className='com-md-9 mt-2'>
              <Room room= {room}/>
            </div>;
          })
        )}
      </div>
    </div>
  );
}

export default Homescreen;
