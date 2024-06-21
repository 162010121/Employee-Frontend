import React, { useState } from 'react'
import { FaLock, FaUserAlt } from 'react-icons/fa';
import { FaFacebook, FaGithub, FaGoogle, FaTwitter } from "react-icons/fa";

import { Link } from 'react-router-dom';
import './Login.css'




export const EmployeeLogin = () => {


  const [data, setData] = useState
    ({
      email: '',
      password: '',


    })
  const { email, password } = data;

  const changeHandler = e => {
    setData({ ...data, [e.target.name]: [e.target.value] })
  }



  const submitHandler = ((e) => {
    e.preventDefault();
  });


  return (
    <div>
      <div class="login-form">
        <form className="">
          <div className="" onClick={submitHandler}>

            <h4 class="text-uppercase text-center mb-3">Login to Account</h4>


            <div class="form-group input-group mt-2">
                <span class="input-group-text"> <i class="fa fa-user"><FaUserAlt /></i> </span>
              <input name="email" class="form-control" placeholder="UserName" type="email" value={email} onChange={changeHandler} />
            </div>
            <div class="form-group input-group mt-4">
              <span class="input-group-text"> <i class="fa fa-user">
                <FaLock /></i> </span>
              <input name="password" class="form-control " placeholder="Password" type="password" value={password} onChange={changeHandler} />
            </div>

            <Link><p class="text-end mt-2">Forgot Password?</p></Link>




            <button className='btn btn-primary w-100 mt-1' >LOGIN</button>
            <p className='mt-3'>Don't have an account? <Link to="/register">Sign Up</Link></p>
            <hr></hr>
            <div class="text-center mt-3">
              <p>or Login With:</p>
              <button type="button" class="btn  btn-link btn-floating mx-1">
                <i class="fab fa-facebook-f"><FaFacebook /></i>
              </button>

              <button type="button" class="btn btn-link btn-floating mx-1">
                <i class="fab fa-google"><FaGoogle /></i>
              </button>

              <button type="button" class="btn btn-link btn-floating mx-1">
                <i class="fab fa-twitter"><FaTwitter /></i>
              </button>

              <button type="button" class="btn btn-link btn-floating mx-1">
                <i class="fab fa-github"><FaGithub /></i>
              </button>
            </div>



          </div>
        </form>
      </div>
    </div>
  )
}

export default EmployeeLogin