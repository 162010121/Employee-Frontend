import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import './Login.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

export const Registration = () => {
  let navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });

    setErrors((prev) => ({ ...prev, [name]: "" }));
  };


  const validateForm = () => {
    let formErrors = {};

    if (!formData.firstName.trim())
      formErrors.firstName = "First name is required";

    if (!formData.lastName.trim())
      formErrors.lastName = "Last name is required";

    if (!formData.email.trim()) {
      formErrors.email = "Email is required";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email))
        formErrors.email = "Enter a valid email";
    }

    if (!formData.password)
      formErrors.password = "Password is required";

    if (formData.password && formData.password.length < 6)
      formErrors.password = "Password must be at least 6 characters";

    if (!formData.confirmPassword)
      formErrors.confirmPassword = "Confirm password is required";

    if (
      formData.password &&
      formData.confirmPassword &&
      formData.password !== formData.confirmPassword
    )
      formErrors.confirmPassword = "Passwords do not match";

    return formErrors;
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  const formErrors = validateForm();
  setErrors(formErrors);

  if (Object.keys(formErrors).length !== 0) return;

  try {
    const response = await axios.post(
      "http://localhost:2000/employee/register",
      formData
    );

    toast.success("You are successfully registered!", {
      position: "top-center",
      autoClose: 7000,   // 2 seconds
    });

    // Delay navigation so user can see the toast
    setTimeout(() => {
      navigate("/rr-employee");
    }, 7000);

  } catch (error) {
    setErrors({
      general: error.response?.data?.message || "Error during registration",
    });
  }
};


  return (
    <div className="login-form mt-3">
      <ToastContainer />
      <form onSubmit={handleSubmit}>
        <h4 className="text-uppercase text-center">Create an account</h4>
        <hr />

        {/* First Name */}
        <div className="mt-1">
          <input
            type="text"
            className={`form-control ${errors.firstName ? "is-invalid" : ""}`}
            name="firstName"
            placeholder="Enter First Name"
            value={formData.firstName}
            onChange={handleChange}
          />
          {errors.firstName && (
            <small className="text-danger">{errors.firstName}</small>
          )}
        </div>

        {/* Last Name */}
        <div className="mt-3">
          <input
            type="text"
            className={`form-control ${errors.lastName ? "is-invalid" : ""}`}
            name="lastName"
            placeholder="Enter Last Name"
            value={formData.lastName}
            onChange={handleChange}
          />
          {errors.lastName && (
            <small className="text-danger">{errors.lastName}</small>
          )}
        </div>

        {/* Email */}
        <div className="mt-3">
          <input
            type="email"
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && (
            <small className="text-danger">{errors.email}</small>
          )}
        </div>

        {/* Password */}
        <div className="mt-3">
          <input
            type="password"
            className={`form-control ${errors.password ? "is-invalid" : ""}`}
            name="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && (
            <small className="text-danger">{errors.password}</small>
          )}
        </div>

        {/* Confirm Password */}
        <div className="mt-3">
          <input
            type="password"
            className={`form-control ${errors.confirmPassword ? "is-invalid" : ""
              }`}
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          {errors.confirmPassword && (
            <small className="text-danger">{errors.confirmPassword}</small>
          )}
        </div>

        {/* General Error */}
        {errors.general && (
          <p className="text-danger text-center mt-2">{errors.general}</p>
        )}

        <div className="text-center">
          <button type="submit" className="btn btn-primary mt-2">
            CREATE ACCOUNT
          </button>
        </div>

        <p className="mt-2">
          I have an account <Link to="/employee-login">Login!</Link>
        </p>
        <hr />
      </form>
    </div>
  );
};

export default Registration;
