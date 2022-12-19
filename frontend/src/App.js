import logo from "./logo.svg"
import "./App.css"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Login from "./components/Login"
import Signup from "./components/Signup"
import Header from "./components/Header"
import Addissue from "./components/Addissue"
import ManageIssues from "./components/ManageIssues"
import Authorize from "./components/Auth"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route element={<Navigate to="/login" />} path="/" />
          <Route element={<Login />} path="login" />
          <Route element={<Header />} path="header" />
          <Route element={<Signup />} path="signup" />
          <Route
            element={
              <Authorize>
                <Addissue />
              </Authorize>
            }
            path="addissue"
          />
          <Route
            element={
              <Authorize>
                <ManageIssues />
              </Authorize>
            }
            path="manageissues"
          />

          {/* <Route element={<NotFound/>} path="*"/> */}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
