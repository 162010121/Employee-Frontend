import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>

      <nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
        <div class="container-fluid">
          <Link class="navbar-brand" to={"/"}>
            Home
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active"
                  aria-current="page"
                  to="/view-employee">
                  View All Users
                </Link>

              </li>
            </ul>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li class="nav-item ">
                  <Link class="nav-link  active" aria-current="page" to="register">Registration</Link>
                </li>
              </ul>
              <ul className="navbar-nav">
                <li class="nav-item ">
                  <Link class="nav-link  active" aria-current="page" to="/employee-login">Login</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>


    </div>
  )
}

export default Navbar