import React from 'react'
import { Link} from "react-router-dom";



const Home = () => {
  return (
    <div>
      <div className='app mt-2 d-grid gap-3 d-md-flex justify-content-md-end'>
        <title>Full Stack App</title>
        <div className="mt-3">
          <Link to="/">
            <button className='btn btn-outline-primary' >        
              HOME
            </button>
          </Link>
        </div>
        <div className="mt-3">
          <Link to="/">
            <button className='btn btn-outline-primary' >        
              ABOUT
            </button>
          </Link>
        </div>
        <div className="mt-3">
          <Link to="/">
            <button className='btn btn-outline-primary' >        
              CAREERS
            </button>
          </Link>
        </div>
        <div className="mt-3">
          <Link to="/register">
            <button className='btn btn-outline-primary'>        
              REGISTRATION
            </button>
          </Link>
        </div>
        <div className="mt-3">
          <Link to="/employee-login">
            <button className='btn btn-outline-primary'>
              LOGIN
            </button>
          </Link>
        </div>
      </div>
      <div className="home">
        <h1> "User-Management-System"</h1>
      </div>
    </div>
  )
}

export default Home