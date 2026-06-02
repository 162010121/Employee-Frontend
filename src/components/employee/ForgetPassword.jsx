import React, { useState } from 'react';
import { Container } from "react-bootstrap";
import { ToastContainer } from 'react-toastify';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import "./Login.css"; // uses the CSS below added to Login.css

const ForgotPassword = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: '',
        newPassword: '',
        confirmPassword: '',
    });

    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        setErrors(prev => ({ ...prev, [name]: "" }));
    };

    const validateForm = () => {
        const formErrors = {};

        if (!formData.email.trim()) {
            formErrors.email = "Email is required";
        } else {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(formData.email)) formErrors.email = "Enter a valid email";
        }

        if (!formData.newPassword) formErrors.newPassword = "New Password is required";
        if (formData.newPassword && formData.newPassword.length < 6)
            formErrors.newPassword = "Password must be at least 6 characters";

        if (!formData.confirmPassword) formErrors.confirmPassword = "Confirm password is required";
        if (formData.newPassword && formData.confirmPassword && formData.newPassword !== formData.confirmPassword)
            formErrors.confirmPassword = "Passwords do not match";

        return formErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formErrors = validateForm();
        setErrors(formErrors);
        if (Object.keys(formErrors).length !== 0) return;

        try {
            setLoading(true);

            await axios.put(
                `http://localhost:2000/employee/changePassword/${formData.email}`,
                formData

            );


            // show the same success popup style as Login page
            setShowSuccess(true);

            // keep popup visible for 2s, then navigate
            setTimeout(() => {
                setShowSuccess(false);
                setLoading(false);
                navigate("/employee-login");
            }, 2000);

        } catch (error) {
            setLoading(false);
            if (error.response && error.response.status === 500) {
                setErrors({ email: "Email not found" });
                return;
            }
            setErrors({
                general: error.response?.data?.message || "Error during updating password",
            });
        }
    };

    return (
        <div className="login-form mt-3">
            <ToastContainer />

            {/* Success popup (same style as Login page) */}
            {showSuccess && (
                <div className="success-popup">
                    <div className="tick"></div>
                    <h3>Password Updated!</h3>
                </div>
            )}

            <form onSubmit={handleSubmit}>
                <h4 className="text-uppercase text-center">CHANGE PASSWORD..!</h4>
                <hr />

                {/* Email */}
                <div className="mt-3">
                    <input
                        type="email"
                        className={`form-control ${errors.email ? "is-invalid" : ""}`}
                        name="email"
                        placeholder="Enter Email"
                        value={formData.email}
                        onChange={handleChange}
                        disabled={loading}
                    />
                    {errors.email && <small className="text-danger">{errors.email}</small>}
                </div>

                {/* New Password */}
                <div className="mt-3">
                    <input
                        type="password"
                        className={`form-control ${errors.newPassword ? "is-invalid" : ""}`}
                        name="newPassword"
                        placeholder="Enter New Password"
                        value={formData.newPassword}
                        onChange={handleChange}
                        disabled={loading}
                    />
                    {errors.newPassword && <small className="text-danger">{errors.newPassword}</small>}
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
                        disabled={loading}
                    />
                    {errors.confirmPassword && (
                        <small className="text-danger">{errors.confirmPassword}</small>
                    )}
                </div>

                {/* General Error */}
                {errors.general && (
                    <p className="text-danger text-center mt-2">{errors.general}</p>
                )}

                <Container className="mt-4">
                    <Link to='/employee-login'>
                        <button className='btn btn-secondary' disabled={loading}>
                            CANCEL
                        </button>
                    </Link>

                    <button
                        className="btn btn-primary ms-2"
                        disabled={loading}
                        type="submit"
                    >
                        {loading ? (
                            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                        ) : (
                            "UPDATE"
                        )}
                    </button>
                </Container>

                <hr />
            </form>
        </div>
    );
};

export default ForgotPassword;
