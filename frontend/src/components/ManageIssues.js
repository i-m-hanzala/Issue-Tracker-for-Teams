import React, { useEffect, useState } from 'react'

const ManageIssues = () => {

  const [issueList, setIssueList] = useState([]);

  const url = 'http://localhost:5000';


  const getDataFromBackend = async () => {

    const response = await fetch('http://localhost:5000/issue/getall')
    const data = await response.json();
    console.log(data);
    setIssueList(data);
  }

  useEffect(() => {
    getDataFromBackend();
  }, []);

  const updateStatus = async (newStatus, id) => {
    await fetch(url+'/issue/update/'+id, {
      method: 'PUT',
      body : JSON.stringify({
        status : newStatus
      }),
      headers : {
        'Content-Type' : 'application/json'
      }
    })
    getDataFromBackend();
  }

  const delIssue = async (id) => {
    const res = await fetch(url+'/issue/delete/'+id, {
      method : 'DELETE'
    })

    console.log(res.status)
    getDataFromBackend();

  }

  const getBadge = (status) => {
    if(status.toLowerCase()==='pending')
    return 'badge-danger'
    else if(status.toLowerCase()==='solved')
    return 'badge-success'
    else if(status.toLowerCase()==='inprogress')
    return 'badge-warning'
  }

  const displayData = () => {
    return <table className='table table-light table-striped'>
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
        {
          issueList.map((user) => (
            <tr>
              <td>{user.title}</td>
              <td>{user.type}</td>
              <td>{user.assignedBy}</td>
              <td>{user.assignedTo}</td>
              <td>
              <span class={"badge rounded-pill d-inline "+getBadge(user.status)}>{user.status}</span>
              </td>
              <td>
                <button disabled={user.status.toLowerCase() !== 'solved'} className='btn btn-danger' onClick={e => delIssue(user._id)}>
                  <i class="fa fa-trash" aria-hidden="true"></i>
                </button>
              </td>
              <td>
                <button disabled={user.status.toLowerCase() === 'solved' } className='btn btn-primary' onClick={e => updateStatus('Solved', user._id)}>
                  Solve
                </button>

              </td>
            </tr>
          ))
        }
      </tbody>
    </table>
  }

  return (
    <div style={{minHeight : '80vh'}}>
      <h3 className='text-center' style={{margin : '50px 0'}} >Manage Issue</h3>
      {displayData()}
    </div>
  )
}

export default ManageIssues;