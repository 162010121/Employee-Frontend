import React from 'react'
import { useState } from 'react';
import { Link} from "react-router-dom";
import './Login.css'
import {useNavigate,
} from "react-router-dom";

export const Registration = () => {
  let navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState("");
  const [fristName, setFristName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const registerData = {
        email: email,
        password: password,
        fristName: fristName,
        lastName: lastName,

      };

      const response = await fetch('http://localhost:2000/employee/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(registerData),
      });
      if (response.ok) {
        // Handle successful login
        //    // navigate("/view-employee")
        alert("ACCOUNT CREATED SUCCESS..!")
        navigate("/")

      }  
      else {
        // Handle errors from the backend
        setError('Feilds Can not be blank..!');
      }
    } catch (error) {
      setError('An error occurred while logging in');
    }
  };


  return (


    <div class="login-form mt-3">

      <form onSubmit={(e) => handleSubmit(e)}>
        <h4 class="text-uppercase text-center">Create an account</h4>
        <hr></hr>
        <div className="mt-1">
          <input
            type="fristName"
            class="form-control"
            id="fristName"  
            name='fristName' placeholder="Enter FristName"
            value={fristName} onChange={(e) => setFristName(e.target.value)} />
        </div>

        <div className="mt-3">
          <input
            type="lastName"
            
            class="form-control"
            name='lastName' placeholder="Enter LastName"
            value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </div>


        <div className="mt-3">
          <input
            type="email"
            
            class="form-control"
            name='email' placeholder="Enter Email"
            value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="mt-3">
          <input
            type="password"
            class="form-control"
            
            name='password' placeholder="Enter Password"
            value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className='mt-2'>
        {error && <p style={{ textAlign: "center", color: "red" }}>{error}</p>}
        </div>
        <div className='text-center'>
          <button className='btn btn-primary mt-2' type='submit' >
            CREATE ACCOUNT</button>
        </div>
        <div class="mt-2">
        </div>
        <p className='mt-2'>I Have an account <Link to="/employee-login">Login !</Link></p>
        <hr />
      </form>
    </div>


  )
}

export default Registration