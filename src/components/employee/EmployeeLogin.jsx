import React, { useState } from 'react'
import { FaLock, FaUserAlt } from 'react-icons/fa';
import { FaFacebook, FaGithub, FaGoogle, FaTwitter } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { Container } from "react-bootstrap";

import './Login.css'






export const EmployeeLogin = () => {

  const [loginDetails, setLoginDetails] = useState({
    username: '',
    password: ''
  })

  const handleInputChange = (event, field) => {
    let actualValue = event.target.value
    setLoginDetails({
      ...loginDetails,
      [field]: actualValue
    })
  }



  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(loginDetails);

    //validation

    if (loginDetails.username.trim() === '' && loginDetails.password.trim() === '') {
      alert("Username and Password  is required..!");
      return
    }

  };


  const handleReset = () => {
    setLoginDetails({
      username: ' ',
      password: ' ',
    });
  };





  return (
    <div>
      <div class="login-form mt-4">
        <form onSubmit={handleFormSubmit}>
          <div className="" >
            <h4 class="text-uppercase text-center mb-3">Login to Account</h4>

            <div class="form-group input-group mt-2">
              <span class="input-group-text"> <i class="fa fa-user"><FaUserAlt /></i> </span>
              <input name="email" class="form-control"
                placeholder="Username" type="email" value={loginDetails.username}
                onChange={(e) => handleInputChange(e, 'username')} />
            </div>
            <div class="form-group input-group mt-3">
              <span class="input-group-text"> <i class="fa fa-user">
                <FaLock /></i> </span>
              <input name="password" class="form-control "
                placeholder="Password" type="password"
                value={loginDetails.password} onChange={(e) => handleInputChange(e, 'password')} />
            </div>



            <p class="text-end mt-2"> <Link to='/forgot'>Forgot Password?</Link></p>




            <Container className='text-center'>
              <button className='btn btn-outline-primary' outline>
                Login
              </button>
              <button onClick={handleReset} className="btn btn-outline-primary ms-3">
                Reset
              </button>
            </Container>

            <p className='mt-3'>Don't have an account? <Link to="/register">Register</Link></p>
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