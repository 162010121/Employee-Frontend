import { text } from '@fortawesome/fontawesome-svg-core';
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Link} from "react-router-dom";



const Home = () => {
  return (




    <div className='app mt-2 d-grid gap-2 d-md-flex justify-content-md-end'>
      <title>Full Stack App</title>
      <div className="mt-3">
      <Link to="/">
          <button className='btn btn-primary btn-sm'>        
           HOME</button></Link>
        </div>
      <div className="mt-3">
      <Link to="/register">
          <button className='btn btn-primary btn-sm'>        
           REGISTRATION</button></Link>
        </div>
        <div className="mt-3">
        <Link to="/employee-login">
           <button className='btn btn-primary btn-sm'>
            LOGIN</button>
            </Link>
        </div>
    </div>



  )
}

export default Home