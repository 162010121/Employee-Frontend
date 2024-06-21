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
  const [employee, setEmployee] = useState
    ({
      name: '',
      email: '',
      password: '',
      number: '',
      department: "",
		  salary:" "

    })
  const { name, email, password, number,department,salary} = employee;

  const changeHandler = e => {
    setEmployee({ ...employee, [e.target.name]: [e.target.value] })
  }

  const submitHandler = ((e) => {
    e.preventDefault();
  });
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
		navigate("/view-employee");
	};


  return (
    <section>

      <div class="login-form" onClick={submitHandler}>

        <form>
          
          <h4 class="text-uppercase text-center">Create an account</h4>
          
          <hr></hr>
          <div className="mt-1">
            <input
              type="name"
              class="form-control"
              name='name' placeholder="Enter FullName"
              value={name} onChange={changeHandler} />
          </div>

          <div className="mt-3">
            <input
              type="email"
              class="form-control"
              name='email' placeholder="Enter Email"
              value={email} onChange={changeHandler} />
          </div>
          <div className="mt-3">
            <input
              type="number"
              class="form-control"
              name='number' placeholder="Enter MobileNumber"
              value={number} onChange={changeHandler} />
          </div>
          <div className="mt-3">
            <input
              type="password"
              class="form-control"
              name='password' placeholder="Enter Password"
              value={password} onChange={changeHandler} />
          </div>
          <div className="mt-3">
            <input
              type="department"
              class="form-control"
              name='department' placeholder="Department"
              value={department} onChange={changeHandler} />
          </div>
          <div className="mt-3">
            <input
              type="salary"
              class="form-control"
              name='salary' placeholder="Salary"
              value={salary} onChange={changeHandler} />
          </div>
  

          <div class="form-check d-flex justify-content-center mb-4 mt-3">
            <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3cg" />
            <label class="form-check-label" for="form2Example3g">
              I agree all statements in <a href="#!" class="text-body"><u>Terms of service</u></a>
            </label>
          </div>
          <div>
            <button className='btn btn-primary w-100' >CREATE ACCOUNT</button>
          </div>
          <p className='mt-2'>I Have an account <Link to="/employee-login">Login !</Link></p>
          <hr/>
          <div class="text-center mt-3">
            <button type="button" class="btn  btn-link btn-floating mx-1">
              <i class="fab fa-facebook-f"><a  href=''><FaFacebook /></a></i>
            </button>

            <button type="button" class="btn btn-link btn-floating mx-1">
              <i class="fab fa-google"><Link to='https://www.google.com/'><FaGoogle/></Link></i>
            </button>

            <button type="button" class="btn btn-link btn-floating mx-1">
              <i class="fab fa-twitter"><FaTwitter /></i>
            </button>

            <button type="button" class="btn btn-link btn-floating mx-1">
              <i class="fab fa-github"><FaGithub /></i>
            </button>
          </div>
        </form>
      </div>
    </section>

  )
}

export default Registration