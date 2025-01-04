import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import {  FaUserAlt } from 'react-icons/fa';
import { MdOutlineLogout } from "react-icons/md";




const Navbar = () => {
  return (

    <nav class="navbar  navbar-dark bg-secondary">
      <div class="container-fluid">
       

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>

        </button>
        <div>
          <div className=''>
            
            <Dropdown>
              <Dropdown.Toggle variant="info" id="dropdown-basic">
                
                <FaUserAlt>
                </FaUserAlt>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="/">Home</Dropdown.Item>
                <Dropdown.Item href="/view-employee">Users</Dropdown.Item>

              </Dropdown.Menu>
            </Dropdown>

          </div>

        </div>
      </div>
    </nav>


  )

}

export default Navbar