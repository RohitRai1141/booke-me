import React, { useState } from "react";
import axios from "axios";
import Loader from "../components/Loader";
import Error from "../components/Error";

//xesem@mailinator.com "Pa$$w0rd!"
function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const login = async () => {
    if (email && password) {
      const user = { email, password };
      try {
        setLoading(true);
        setError(null);
        const result = await axios.post("api/users/login", user);
        console.log(result.data);
        setLoading(false);
        localStorage.setItem('currentUser', JSON.stringify(result.data));
        window.location.href = '/home';
      } catch (error) {
        console.log(error.response?.data || error.message); // Log specific error details
        setLoading(false);
        setError(true);
      }
    } else {
      alert("Please fill in both email and password.");
    }
  };

  return (
    <div className="container">
      {loading && <Loader />}
      <div className="row justify-content-center mt-5">
        {error && <Error message="Invalid email or password." />}
        <div className="col-md-5">
          <div className="bs p-4 border shadow-lg">
            <h1 className="text-center mb-4">Login</h1>
            <input
              type="email"
              className="form-control mb-3"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              className="form-control mb-3"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="btn btn-primary w-100" onClick={login}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;
