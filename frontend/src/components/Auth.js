import React, { useState } from "react"
import { Navigate } from "react-router-dom"
import Swal from "sweetalert2"

const Authorize = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem("user")))

  if (currentUser !== null) return children;
  else {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "You must be loggedin to Continue",
    })
    return <Navigate to="/login" />
  }
}

export default Authorize
