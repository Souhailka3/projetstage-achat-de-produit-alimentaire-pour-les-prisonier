import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./Login.css";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginFailed, setLoginFailed] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/utilisateur/login",
        {
          email,
          password,
        }
      );
      if (response.data.valid) {
        // handle successful login
        // redirect the user to /magasin
        navigate("/magasin");
      } else {
        setLoginFailed(true);
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
        {loginFailed && (
          <p className="text-danger">Invalid email or password</p>
        )}
        <form onSubmit={handleLogin}>
          <div className={`form-group mb-3 ${loginFailed ? "shake" : ""}`}>
            <input
              type="email"
              id="email"
              className={`form-control ${loginFailed ? "border-danger" : ""}`}
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setLoginFailed(false);
              }}
              placeholder="Email"
              required
            />
          </div>
          <div className={`form-group mb-3 ${loginFailed ? "shake" : ""}`}>
            <input
              type="password"
              id="password"
              className={`form-control ${loginFailed ? "border-danger" : ""}`}
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setLoginFailed(false);
              }}
              placeholder="Password"
              required
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary w-100 mb-3 "
            disabled={!isEmailValid || !password}
          >
            login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
