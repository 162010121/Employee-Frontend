

import React from 'react'
import { useState } from 'react';
import { Container } from "react-bootstrap";
import { Link } from 'react-router-dom';


const ForgotPassword = () => {


    const [employee, setEmployee] = useState({

        password: "",

    });
    const {

        password,

    } = employee;

    const handleInputChange = (e) => {
        setEmployee({
            ...employee,
            [e.target.name]: e.target.value,
        });
    }

    return (


        <div class="login-form  form-floating">

            <form className='form form-bg-red'>
                <h4 class="text-uppercase text-center">Change Password</h4>

                <div className="mt-4">
                    <input
                        type="password"
                        class="form-control"
                        name='password' placeholder="Enter Old Password"
                        value={password} onChange={(e) => handleInputChange(e)} />
                </div>
                <div className="mt-3">
                    <input
                        type="password"
                        class="form-control"
                        name='password' placeholder="Enter New Password"
                        value={password} onChange={(e) => handleInputChange(e)} />
                </div>
                <div className="mt-3">
                    <input
                        type="password"
                        class="form-control"
                        name='password' placeholder="Confirm Password"
                        value={password} onChange={(e) => handleInputChange(e)} />
                </div>


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


            </form>
        </div>


    )
}

export default ForgotPassword