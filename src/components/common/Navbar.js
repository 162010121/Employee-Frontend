import React from 'react'
import { Link } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';

const Navbar = () => {
  return (

    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">Home</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div>
          <div>
            <Dropdown>
              <Dropdown.Toggle variant="info" id="dropdown-basic">
                Employee
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="/view-employee">Get All Employees</Dropdown.Item>
                <Dropdown.Item href="/register">Registration</Dropdown.Item>
                <Dropdown.Item href="/employee-login"> Login</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

          </div>

        </div>
      </div>
    </nav>


  )

}

export default Navbar