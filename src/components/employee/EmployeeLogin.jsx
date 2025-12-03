import React, { useState } from 'react'
import { FaLock, FaUserAlt } from 'react-icons/fa';
import { FaFacebook, FaGithub, FaGoogle, FaTwitter } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { Container } from "react-bootstrap";

import './Login.css';

export const EmployeeLogin = () => {
  let navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

 
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [generalError, setGeneralError] = useState("");


  const validateForm = () => {
    let valid = true;
    setEmailError("");
    setPasswordError("");
    setGeneralError("");

    if (!email.trim()) {
      setEmailError("Email is required");
      valid = false;
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        setEmailError("Enter a valid email");
        valid = false;
      }
    }

    if (!password.trim()) {
      setPasswordError("Password is required");
      valid = false;
    }

    return valid;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validateForm()) return;

    try {
      const loginData = { email, password };

      const response = await fetch('http://localhost:2000/employee/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginData),
      });

      if (response.ok) {
        alert("LOGIN SUCCESS..!");
        navigate("/");
      } else {
        const errorData = await response.json();
        setGeneralError(errorData.message || 'Enter Valid Credentials');
      }
    } catch (error) {
      setGeneralError("An error occurred during login");
    }
  };

  return (
    <div>
      <div className="login-form mt-4">
        <form onSubmit={handleSubmit}>
          <h4 className="text-uppercase text-center">Login to Account</h4>
          <hr />

          {/* Email Input */}
          <div className="form-group input-group">
            <span className="input-group-text">
              <FaUserAlt />
            </span>
            <input
              name="email"
              className={`form-control ${emailError ? 'is-invalid' : ''}`}
              placeholder="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Email Error */}
          {emailError && <small className="text-danger">{emailError}</small>}

          {/* Password Input */}
          <div className="form-group input-group mt-3">
            <span className="input-group-text">
              <FaLock />
            </span>
            <input
              name="password"
              className={`form-control ${passwordError ? 'is-invalid' : ''}`}
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Password Error */}
          {passwordError && <small className="text-danger">{passwordError}</small>}

          {/* General Backend Error */}
          <div className="mt-2">
            {generalError && <p style={{ color: "red", textAlign: "center" }}>{generalError}</p>}
          </div>

          <p className="text-end">
            <Link to="/forgot">Forgot Password?</Link>
          </p>

          <Container className="text-center">
            <button className="btn btn-primary w-100" type="submit">
              Log in
            </button>
          </Container>

          <p className="mt-2">
            Don't have an account? <Link to="/register">Register</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default EmployeeLogin;
