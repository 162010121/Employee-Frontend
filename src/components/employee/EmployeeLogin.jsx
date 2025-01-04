import React, { useState } from 'react'
import { FaLock, FaUserAlt } from 'react-icons/fa';
import { FaFacebook, FaGithub, FaGoogle, FaTwitter } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";

import { Container } from "react-bootstrap";

import './Login.css'
import './LoginValidation'

export const EmployeeLogin = () => {
  let navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const loginData = {
        email: email,
        password: password,
      };

      const response = await fetch('http://localhost:2000/employee/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });

      if (response.ok) {
        // Handle successful login
        // navigate("/view-employee")
        alert("LOGIN SUCCESS..!")
        navigate("/")
      }
      else {
        // Handle errors from the backend
        setError('Login failed');
      }
    }
    catch (error) {
      setError('An error occurred while logging in');
    }


  };

  return (
    <div>
      <div class="login-form mt-4">
        <form onSubmit={handleSubmit}>
          <div className="" >
            <h4 class="text-uppercase text-center">Login to Account</h4>
            <hr></hr>
            <div class="form-group input-group ">
              <span class="input-group-text"> <i class="fa fa-user"><FaUserAlt /></i> </span>
              <input name="email" class="form-control"
                placeholder="Username" type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div class="form-group input-group mt-3">
              <span class="input-group-text"> <i class="fa fa-user">
                <FaLock /></i> </span>
              <input name="password" class="form-control "
                placeholder="Password" type="password"

                value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div class="mt-2">
              {error && <p style={{ textAlign: "center", color: "red" }}>{error}</p>}
            </div>
            <p class="text-end"> <Link to='/forgot'>Forgot Password?</Link></p>
            <Container className='text-center'>
              <button className='btn btn-primary w-100' outline>
                Log  in
              </button>
            </Container>


            <p className='mt-2'>Don't have an account? <Link to="/register">Register</Link></p>
            <hr></hr>
            <div class="text-center mt-3">
              <p>Login With:</p>
              <button type="button" class="btn  btn-link btn-floating mx-1">
                <i class="fab fa-facebook-f"><Link to='https://www.facebook.com/'><FaFacebook /></Link></i>
              </button>

              <button type="button" class="btn btn-link btn-floating mx-1">
                <i class="fab fa-google"><Link to="https://accounts.google.com/v3/signin/challenge/pwd?TL=ALoj5ArIDX3EcalXGsyHB2ZF_dmAHt3rUrfpjCnEVyWIXSseYs1fn2b-rsmtfyMO&checkConnection=youtube%3A545&checkedDomains=youtube&cid=1&continue=https%3A%2F%2Fmail.google.com%2Fmail&ddm=0&dsh=S405888530%3A1721466948393170&flowEntry=ServiceLogin&flowName=GlifWebSignIn&hl=en&ifkv=AdF4I75C_sYa1T8jKrlbydEfRPfwNGsyqNlQSZrVpmWeWb0o_HX44XvoWrTnzzE9wmBT41SMb0W2IQ&pstMsg=1"><FaGoogle /></Link></i>
              </button>

              <button type="button" class="btn btn-link btn-floating mx-1">
                <i class="fab fa-twitter"><Link to='https://www.twitter.com/'><FaTwitter /></Link></i>
              </button>

              <button type="button" class="btn btn-link btn-floating mx-1">
                <i class="fab fa-github"><Link to='https://www.github.com/'><FaGithub /></Link></i>
              </button>
            </div>



          </div>
        </form>
      </div>
    </div>
  )
}

export default EmployeeLogin