import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const ManageIssues = () => {
  const [issueList, setIssueList] = useState([])
  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')))

  const url = "http://localhost:5000"

  const getDataFromBackend = async () => {
    const response = await fetch("http://localhost:5000/issue/getall")
    const data = await response.json()
    console.log(data)
    setIssueList(data)
  }

  useEffect(() => {
    getDataFromBackend()
  }, [])

  const updateStatus = async (newStatus, issue ) => {
    const res = await fetch(url + "/issue/update/" + issue._id, {
      method: "PUT",
      body: JSON.stringify({
        status: newStatus,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
    console.log(res.status);
    if(res.status === 200){
      notifyUser(issue.user.email, issue.title);
    }
    getDataFromBackend()
  }

  const deleteIssue = async (id) => {
    const res = await fetch(url + "/issue/delete/" + id, {
      method: "DELETE",
    })
    console.log(res.status)
    getDataFromBackend()
  }

  const notifyUser = async (rec, title) => {
    const res = await fetch("http://localhost:5000/util/sendmail", {
      method: "POST",
      body: JSON.stringify({
        reciever: rec,
        subject: "Issue Resolved | Issue Tracker for Teams",
        html: `
        <h3>
          Congratulations!! Your Issue "${title}" has been marked as resolved by ${currentUser.username}
        </h3>
        `,
      }),
      headers: {
        'Content-Type' : 'application/json'
      }
    })
    console.log(res.status)
    const { status } = await res.json()
    console.log(status)
  }

  const getBadge = (status) => {
    if (status.toLowerCase() === "pending") return "badge-danger"
    else if (status.toLowerCase() === "solved") return "badge-success"
    else if (status.toLowerCase() === "inprogress") return "badge-warning"
  }

  const displayData = () => {
    if (issueList.length)
      return (
        <table className="table table-dark table-striped">
          <thead>
            <tr>
              <th>Title</th>
              <th>Category</th>
              <th>Assigned By</th>
              <th>Assigned To</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {issueList.map((user) => (
              <tr>
                <td className="fw-bold">{user.title}</td>
                <td>{user.type}</td>
                <td> <i class="fas fa-user "></i> {user.user.username}</td>
                <td>{user.assignedTo}</td>
                <td>
                  <span class={"badge rounded-pill d-inline " + getBadge(user.status)}>{user.status}</span>
                </td>
                <td>
                  <button className="btn btn-danger" onClick={(e) => deleteIssue(user._id)}>
                    <i class="fa fa-trash" aria-hidden="true"></i>
                  </button>
                </td>
                <td>
                  <button 
                  // disabled={user.status === "Solved"}
                   className="btn btn-primary" onClick={(e) => updateStatus("Solved", user)}>
                    {user.status === "Solved" ? "Solved" : "Solve"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )
    else
      return (
        <div className="text-center">
          <h1 className="display-2 fw-bold text-muted text-center my-5">No Issue Opened Yet!!</h1>
          <Link className="btn btn-dark" to="/addissue">
            Open New Issue Here
          </Link>
        </div>
      )
  }

  return (
    <div>
      <header className="bg-dark">
        <div className="container py-5">
          <p className="text-center display-1 text-white">Issue Tracker</p>
        </div>
      </header>
      <div className="container mt-5">{displayData()}</div>
    </div>
  )
}

export default ManageIssues
