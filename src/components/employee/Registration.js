import React from 'react'
import { useState } from 'react';
import { Link } from "react-router-dom";
import './Login.css'
import {
  useNavigate
} from "react-router-dom";
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
  };

  const validateForm = () => {
    let formErrors = {};
    if (!formData.firstName) formErrors.firstName = 'First name is required';
    if (!formData.lastName) formErrors.lastName = 'Last name is required';
    if (!formData.email) formErrors.email = 'Email is required';
    if (!formData.password) formErrors.password = 'Password is required';
    if (formData.password !== formData.confirmPassword) formErrors.confirmPassword = 'Passwords do not match';
    if (formData.password.length < 6) formErrors.password = 'Password must be at least 6 characters';
    if (!formData.confirmPassword) formErrors.confirmPassword = 'Confirm Password is required';
    return formErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const notify = () => toast.success("You are successfully registered..!");
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      try {
        const response = await axios.post('http://localhost:2000/employee/register', formData);
        notify();
        alert("You are successfully registered..!");
        navigate('/employee-login');
      } catch (error) {
        setErrors('Error during registration');
      }
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div className="login-form mt-3">
      <form onSubmit={handleSubmit}>
        <ToastContainer />
        <h4 className="text-uppercase text-center">Create an account</h4>
        <hr />
        <div className="mt-1">
          <input
            type="text"
            className="form-control"
            name="firstName"
            placeholder="Enter First Name"
            value={formData.firstName}
            onChange={handleChange}
          />
          {errors.firstName && <span className="text-danger">{errors.firstName}</span>}
        </div>
        <div className="mt-3">
          <input
            type="text"
            className="form-control"
            name="lastName"
            placeholder="Enter Last Name"
            value={formData.lastName}
            onChange={handleChange}
          />
          {errors.lastName && <span className="text-danger">{errors.lastName}</span>}
        </div>
        <div className="mt-3">
          <input
            type="email"
            className="form-control"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className="text-danger">{errors.email}</span>}
        </div>
        <div className="mt-3">
          <input
            type="password"
            className="form-control"
            name="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <span className="text-danger">{errors.password}</span>}
        </div>
        <div className="mt-3">
          <input
            type="password"
            className="form-control"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          {errors.confirmPassword && <span className="text-danger">{errors.confirmPassword}</span>}
        </div>
        <div className="mt-2">
          {errors.general && <p className="text-danger text-center">{errors.general}</p>}
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-primary mt-2">CREATE ACCOUNT</button>
        </div>
        <p className="mt-2">I have an account <Link to="/employee-login">Login!</Link></p>
        <hr />
      </form>
    </div>
  );
};

export default Registration;