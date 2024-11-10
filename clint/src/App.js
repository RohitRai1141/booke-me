import './App.css';
import Navbar from './components/Navbar'; // Ensure you have this component
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'; 
import HomeScreen from './screens/HomeScreen'; // Ensure you have this screen
import BookingScreen from './screens/BookingScreen'; // BookingScreen route
import LoginScreen from './screens/LoginScreen'; // Login route
import RegisterScreen from './screens/RegisterScreen'; // Register route
import Booking from './screens/Booking'; // Booking page route
import Header from './screens/Header'; // The header component

function App() {
  return (
    <div className="App">
      <Navbar /> {/* You can customize this component */}
      <BrowserRouter>
        <Routes>
          {/* Redirect from "/" to "/header" */}
          <Route path="/" element={<Navigate to="/header" />} />
          
          {/* Routes for different screens */}
          <Route path="/home" element={<HomeScreen />} />
          <Route path="/book/:roomid/:fromdate/:todate" element={<BookingScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/register" element={<RegisterScreen />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/header" element={<Header />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
