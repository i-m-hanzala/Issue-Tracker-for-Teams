import React from "react"
import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-md navbar-dark " style={{ backgroundColor: "#2b0c36" }}>
        {/* Container wrapper */}
        <div className="container">
          {/* Navbar brand */}
          <NavLink className="navbar-brand fw-bold" to="/">
            Issue Tracker for Teams
          </NavLink>
          {/* Toggle button */}
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <i className="fas fa-bars" />
          </button>
          {/* Collapsible wrapper */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
             
              <li className="nav-item">
                <NavLink className="nav-link" to="/login">
                  Login
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/signup">
                  Sign-up
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/addissue">
                  Open New Issue
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/manageissues">
                  Track Issues
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        {/* Container wrapper */}
      </nav>
      {/* Navbar */}
    </>
  )
}

export default Navbar
