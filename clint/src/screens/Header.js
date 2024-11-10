import React from 'react';

function Header() {
  // Function to redirect to the Register page
  function signInRedirect() {
    window.location.href = "/register"; // Redirects to the Register page
  }

  return (
    <header className="App-header">
      <div className="container">
        <h1 className="main-heading">Streamline Your Classroom Booking Experience Today</h1>
        <p className="intro-text">
          Welcome to our faculty-only web app designed to simplify classroom management. Easily view available rooms, book them, and manage requests all in one intuitive platform.
        </p>
        
        <div className="cta-buttons">
          {/* Calling the signInRedirect function on button click */}
          <button onClick={signInRedirect} className="cta-btn sign-up">
            Sign Up
          </button>
          <button className="cta-btn learn-more">Learn More</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
