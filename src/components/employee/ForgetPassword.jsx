

import React from 'react'
import { useState } from 'react';
import { Container } from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";


const ForgotPassword = () => {

    let navigate = useNavigate();

    const [formData, setFormData] = useState({

        email: '',
        newPassword: '',
        confirmPassword: '',
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



        if (!formData.email.trim()) {
            formErrors.email = "Email is required";
        } else {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(formData.email))
                formErrors.email = "Enter a valid email";
        }



        if (!formData.newPassword)
            formErrors.newPassword = "New Password is required";

        if (formData.newPassword && formData.newPassword.length < 6)
            formErrors.newPassword = "Password must be at least 6 characters";

        if (!formData.confirmPassword)
            formErrors.confirmPassword = "Confirm password is required";

        if (
            formData.newPassword &&
            formData.confirmPassword &&
            formData.newPassword !== formData.confirmPassword
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
            await axios.put(`http://localhost:2000/employee/changePassword/${formData.email}`, formData);





            // toast.success("Password Updated Successfully...!", {
            //     position: "top-center",
            //     autoClose: 7000,   // 2 seconds
            // });

            // // Delay navigation so user can see the toast
            // setTimeout(() => {
            //     navigate("/employee-login");
            // }, 7000);


            toast.success("Password Updated Successfully...!", {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                theme: "colored",
            });
            setTimeout(() => {
                navigate("/employee-login");
            }, 5000);

        } catch (error) {
            if (error.response && error.response.status === 500) {
                setErrors({
                    email: "Email not found",
                });
                return;
            }
            else {
                setErrors({
                    general: error.response?.data?.message || "Error during updating password",
                });
            }
        }
    };


    return (
        <div className="login-form mt-3">
            <ToastContainer />
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
                    />
                    {errors.email && (
                        <small className="text-danger">{errors.email}</small>
                    )}
                </div>



                {/* Password */}
                <div className="mt-3">
                    <input
                        type="newPassword"
                        className={`form-control ${errors.newPassword ? "is-invalid" : ""}`}
                        name="newPassword"
                        placeholder="Enter New Password"
                        value={formData.newPassword}
                        onChange={handleChange}
                    />
                    {errors.newPassword && (
                        <small className="text-danger">{errors.newPassword}</small>
                    )}
                </div>

                {/* Confirm Password */}
                <div className="mt-3">
                    <input
                        type="confirmPassword"
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

                <div >
                    <Container className='mt-4'>
                        <Link to='/employee-login'>
                            <button className='btn btn-secondary' outline>
                                CANCEL
                            </button>
                        </Link>
                        <button className="btn btn-primary ms-2">
                            UPDATE
                        </button>
                    </Container>
                </div>


                <hr />
            </form>
        </div>
    );
}

export default ForgotPassword