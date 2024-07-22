import React from 'react'
import { useState } from 'react';
import { Link } from "react-router-dom";
import './Login.css'
import {

  useNavigate,
} from "react-router-dom";
import axios from "axios";

import { FaFacebook, FaGithub, FaGoogle, FaTwitter } from "react-icons/fa";
const Registration = () => {
  let navigate = useNavigate();
  const [employee, setEmployee] = useState({
    fristName: "",
    lastName: "",
    email: "",
    department: "",
    password: "",

  });
  const {
    fristName,
    lastName,
    email,
    department,
    password,

  } = employee;

  const handleInputChange = (e) => {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value,
    });
  };
  const saveEmployee = async (e) => {
    e.preventDefault();
    await axios.post(
      "http://localhost:2000/employee/add",
      employee
    );
    alert(" Employee Account Created Successfully")
    navigate("/employee-login");
  };


  return (


    <div class="login-form">

      <form onSubmit={(e) => saveEmployee(e)}>
        <h4 class="text-uppercase text-center">Create an account</h4>
        <hr></hr>
        <div className="mt-1">
          <input
            type="fristName"
            class="form-control"
            id="fristName"
            required
            autoFocus
            name='fristName' placeholder="Enter FristName"
            value={fristName} onChange={(e) => handleInputChange(e)} />
        </div>

        <div className="mt-3">
          <input
            type="lastName"
            class="form-control"
            name='lastName' placeholder="Enter LastName"
            value={lastName} onChange={(e) => handleInputChange(e)} />
        </div>


        <div className="mt-3">
          <input
            type="email"
            class="form-control"
            name='email' placeholder="Enter Email"
            value={email} onChange={(e) => handleInputChange(e)} />
        </div>
        <div className="mt-3">
          <input
            type="password"
            class="form-control"
            name='password' placeholder="Enter Password"
            value={password} onChange={(e) => handleInputChange(e)} />
        </div>
        <div className="mt-3">
          <input
            type="department"
            class="form-control"
            name='department' placeholder="Department"
            value={department} onChange={(e) => handleInputChange(e)} />
        </div>



        <div class="form-check d-flex justify-content-center">

        </div>
        <div>


          <button className='btn btn-outline-primary w-100' type='submit' >
            CREATE ACCOUNT</button>

        </div>
        <p className='mt-2'>I Have an account <Link to="/employee-login">Login !</Link></p>
        <hr />
        <div class="text-center mt-3">
          <button type="button" class="btn  btn-link btn-floating mx-1">
            <i class="fab fa-facebook-f"><Link to='https://www.facebook.com/'><FaFacebook /></Link></i>
          </button>

          <button type="button" class="btn btn-link btn-floating mx-1">
            <i class="fab fa-google"><Link to='https://accounts.google.com/v3/signin/challenge/pwd?TL=ALoj5ArIDX3EcalXGsyHB2ZF_dmAHt3rUrfpjCnEVyWIXSseYs1fn2b-rsmtfyMO&checkConnection=youtube%3A545&checkedDomains=youtube&cid=1&continue=https%3A%2F%2Fmail.google.com%2Fmail&ddm=0&dsh=S405888530%3A1721466948393170&flowEntry=ServiceLogin&flowName=GlifWebSignIn&hl=en&ifkv=AdF4I75C_sYa1T8jKrlbydEfRPfwNGsyqNlQSZrVpmWeWb0o_HX44XvoWrTnzzE9wmBT41SMb0W2IQ&pstMsg=1'><FaGoogle /></Link></i>
          </button>

          <button type="button" class="btn btn-link btn-floating mx-1">
            <i class="fab fa-twitter"><Link to='https://www.twitter.com/'><FaTwitter /></Link></i>
          </button>

          <button type="button" class="btn btn-link btn-floating mx-1">
            <i class="fab fa-github"><Link to='https://www.github.com/'><FaGithub /></Link></i>
          </button>
        </div>
      </form>
    </div>


  )
}

export default Registration