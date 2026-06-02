import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import './Login.css';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';


export const Registration = () => {
  let navigate = useNavigate();

  const [formData, setFormData] = useState({
    id:'', // generate unique ID based on timestamp
    firstName: '',
    lastName: '',
    email: '',
    gender: '',
    password: '',
    confirmPassword: '',
    termsAccepted: false
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });

    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    let formErrors = {};

  
    if (!formData.firstName.trim())
      formErrors.firstName = "First name is required";

    if (!formData.lastName.trim())
      formErrors.lastName = "Last name is required";

    if (!formData.gender.trim())
      formErrors.gender = "Gender is required";

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

    if (!formData.termsAccepted) {
      formErrors.termsAccepted = "You must accept the Terms & Conditions";
    }

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


      setLoading(true);

      setTimeout(() => {
        setShowSuccess(true);

        setTimeout(() => {
          setShowSuccess(false);
          navigate("/rr-employee");
        }, 1000);

      }, 3000);

    } catch (error) {
      setLoading(false);

      if (error.response && error.response.status === 500) {
        setErrors({ email: "Email already exists" });
        return;
      }

      setErrors({
        general: error.response?.data?.message || "Error during registration",
      });
    }
  };

  return (
    <div>

      {/* SUCCESS POPUP */}
      {showSuccess && (
        <div className="success-popup">
          <div className="tick"></div>
          <h3>Registration Successful!</h3>
        </div>
      )}

      <div className="login-form mt-3">

        <form onSubmit={handleSubmit}>
          <h4 className="text-uppercase text-center">Create an account</h4>
          <hr />

          {/* First Name */}
          <div className="mt-3">
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
              className={`form-control ${errors.confirmPassword ? "is-invalid" : ""}`}
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            {errors.confirmPassword && (
              <small className="text-danger">{errors.confirmPassword}</small>
            )}
          </div>
          {/* Gender */}
          <div className="mt-3">
            <div>
              <input
                type="radio"
                name="gender"
                value="Male"
                checked={formData.gender === "Male"}
                onChange={handleChange}
              />
              <label className="ms-1 me-3">Male</label>

              <input
                type="radio"
                name="gender"
                value="Female"
                checked={formData.gender === "Female"}
                onChange={handleChange}
              />
              <label className="ms-1 me-3">Female</label>

              <input
                type="radio"
                name="gender"
                value="Other"
                checked={formData.gender === "Other"}
                onChange={handleChange}
              />
              <label className="ms-1">Other</label>
            </div>

            {errors.gender && (
              <small className="text-danger d-block">
                {errors.gender}
              </small>
            )}
          </div>

          {/* Terms */}
          <div className="mt-3">
            <input
              type="checkbox"
              name="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleChange}
            />{" "}

            <label>I accept the <Link to="/terms">Terms & Conditions</Link></label>

            {errors.termsAccepted && (
              <small className="text-danger d-block">{errors.termsAccepted}</small>
            )}
          </div>

          {/* Backend Error */}
          {errors.general && (
            <p className="text-danger text-center mt-2">{errors.general}</p>
          )}

          <div className="text-center">
            <button type="submit" className="btn btn-primary mt-2" disabled={loading}>
              {loading ? (
                <span className="spinner-border spinner-border-sm"></span>
              ) : (
                "CREATE ACCOUNT"
              )}
            </button>
          </div>

          <p className="mt-2">
            I have an account <Link to="/employee-login">Login!</Link>
          </p>
          <hr />
        </form>
      </div>
    </div>
  );
};

export default Registration;
