import { Formik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import { motion } from "framer-motion";
import Swal from "sweetalert2";

const Addissue= () => {
  
  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')))

  // step-1 : create function for submission
  const userSubmit = async (formdata, { resetForm, setSubmitting }) => {
    setSubmitting(true)

    // setTimeout(() => {
      console.log(formdata)

      // for sending request to backend
      // 1. url
      // 2. request method
      // 3. data
      // 4. data format - json

      // returns promise
      const response = await fetch('http://localhost:5000/issue/add', {
        method: 'POST',
        body : JSON.stringify(formdata),
        headers: {
          'Content-Type' : 'application/json'
        }
      });

      // reading response status
      console.log(response.status);

      if(response.status === 200){

        Swal.fire({
          icon : 'success',
          title : 'Registered',
          text : 'User registered successfully'
        })

      }

      setSubmitting(false)
      resetForm()
    // }, 2000)
  }

  const myValidation = Yup.object().shape({
    username: Yup.string().min(3, "Too short").max(10, "Too Long").required("Username Required"),
  })

  return (
    <motion.div
      initial={{ scale: 0.6, x: "800%", opacity: 0 }}
      animate={{ scale: 1, x: 0, opacity: 1 }}
      transition={{ duration: 0.5, type: "spring" }}
      className="col-md-6 mx-auto pt-5">
      <div className="card">
        <div className="card-body">
          <h3 className="text-center">Signup Here</h3>
          <Formik initialValues={{ title: "", type: "", user: currentUser._id, assignedby: "", assignedTo:"" , createdAt:new Date() }} onSubmit={userSubmit} 
        //   validationSchema={myValidation}
          >
            {({ values, handleChange, handleSubmit, isSubmitting, errors }) => (
              <form onSubmit={handleSubmit}>
                <label>Issue Title</label>
                <input type="text" className="form-control" name="title" value={values.title} onChange={handleChange} />
                <p className="mb-3 message">{errors.username}</p>

                <label>Type</label>
                <input type="text" className="form-control" name="type" value={values.type} onChange={handleChange} />
                <p className="mb-3 message">{errors.username}</p>

                <label>Assigned By</label>
                <input type="text" className="form-control" name="assignedby" value={values.assignedby} onChange={handleChange} />

                <label>Assigned To</label>
                <input type="text" className="form-control" name="assignedTo" value={values.assignedTo} onChange={handleChange} />

               
                <button disabled={isSubmitting} type="submit" className="btn btn-primary mt-5">
                  {isSubmitting ? <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> : ""}
                  &nbsp;&nbsp;Submit
                </button>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </motion.div>
  )
}

export default Addissue;
