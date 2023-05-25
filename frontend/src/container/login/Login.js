import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./Login.css";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/login", { email, password });
      if (response.data.valid) {
        // handle successful login
      } else {
        // display error message
      }
    } catch (error) {
      // handle login error
    }
  };

  const emailRegex =
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z]{2,})$/;

  const isEmailValid = emailRegex.test(email);

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="container w-50 ">
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
          <div className="form-group mb-3">
            <input
              type="email"
              id="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="password"
              id="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary w-100 mb-3 "
            disabled={!isEmailValid || !password}
          >
            <Link to={"/magasin"} className="loginbutton">
              Login
            </Link>
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
