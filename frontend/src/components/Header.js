import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
  {/* Navbar */}
  <nav
    className="navbar navbar-expand-md navbar-dark "
    style={{ backgroundColor: "rgb(48 14 50)" }}
  >
    {/* Container wrapper */}
    <div className="container-fluid">
      {/* Navbar brand */}
      <a className="navbar-brand" href="#">
        Issue Tracker App
      </a>
      {/* Toggle button */}
      <button
        className="navbar-toggler"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="fas fa-bars" />
      </button>
      {/* Collapsible wrapper */}
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          {/* Link */}
          
          <li className="nav-item">
            <NavLink className="nav-link" to="/login">
              Login</NavLink>
          </li>
          <li className="nav-item">
          <NavLink className="nav-link" to="/signup">
              Sign-up</NavLink>
          </li>
          <li className="nav-item">
          <NavLink className="nav-link" to="/addissue">
              Add Issue</NavLink>
          </li>
          <li className="nav-item">
          <NavLink className="nav-link" to="/manageissues">
              Manage Issue</NavLink>
          </li>
        </ul>
        {/* Icons */}
        
        {/* Search */}
        
      </div>
    </div>
    {/* Container wrapper */}
  </nav>
  {/* Navbar */}
</>

  )
}

export default Navbar