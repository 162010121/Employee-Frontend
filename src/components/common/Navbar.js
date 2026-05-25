import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import {  FaUserAlt } from 'react-icons/fa';
import { MdOutlineLogout } from "react-icons/md";
import { Link } from 'react-router-dom';




const Navbar = () => {
  return (

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark bg-opacity-50">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">My App</Link>

    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>

    <Dropdown>
      <Dropdown.Toggle variant="secondary" id="dropdown-basic">
        <FaUserAlt />
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item as={Link} to="/">Home</Dropdown.Item>
        <Dropdown.Item as={Link} to="/view-employee">Users</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  </div>
</nav>


  )

}

export default Navbar