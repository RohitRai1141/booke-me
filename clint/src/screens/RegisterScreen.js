import axios from "axios";
import React, { useState } from "react";
import Loader from "../components/Loader";
import Error from "../components/Error";
import Success from "../components/Success";


function RegisterScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [success, setSuccess] = useState();


  const register = async () => {
    if (password === cpassword) {
      const user = {
        name,
        email,
        password,
      };

      try {
        setLoading(true);
        const result = await axios.post("api/users/register", user);
        console.log(result.data); // handle the response here (e.g., show a success message)
        setLoading(false);
        setSuccess(true);

        setName('');
        setEmail('');
        setPassword('');
        setCPassword('');

      } catch (error) {
        console.log(error);
        setLoading(false);
        setError(true);
      }
    } else {
      alert("Passwords do not match");
    }
  };

  return (
    <div className="container">

    {loading && (<Loader/>)}
    {error && (<Error/>)}

      <div className="row justify-content-center mt-5">
        <div className="col-md-5">
        {success && (<Success message='Registration success'/>)}
          <div className="bs p-4 border shadow-lg">
            <h1 className="text-center mb-4">Register</h1>
            <input
              type="text"
              className="form-control mb-3"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
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
            <input
              type="password"
              className="form-control mb-3"
              placeholder="Confirm Password"
              value={cpassword}
              onChange={(e) => setCPassword(e.target.value)}
            />
            <button className="btn btn-primary w-100" onClick={register}>
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterScreen;
