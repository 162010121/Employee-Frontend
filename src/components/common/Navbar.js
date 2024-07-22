import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (

    <div>

      <nav class="navbar  navbar-expand-lg navbar-dark  mb-5">
        <Link class="navbar-brand" to={"/"} className="btn btn-primary">
          Home
        </Link>

        <div className="collapse navbar-collapse" id="navbarNav">

          <li >
            <Link className="nav-link active"

              to="/view-employee" class="btn btn-secondary">
              View All Users
            </Link>
          </li>


            <li class="nav-item ">
              <Link class="nav-link  
                  active" aria-current="page" to="/register" className="btn btn-success">Registration+</Link>
            </li>



            <li class="nav-item ">
              <Link class="nav-link  active" aria-current="page" to="/employee-login" className="btn btn-warning">Login</Link>
            </li>




       
          <div>
            
          </div>
        </div>

      </nav>




    </div>

  )

}

export default Navbar