import { Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const navigate = useNavigate();
  

  const loginSubmit = async (formdata, { resetForm }) => {
    console.log(formdata)
    resetForm();

    const response = await fetch('http://localhost:5000/user/authenticate', {
      method: 'POST',
      body : JSON.stringify(formdata),
            headers : {
                'Content-Type' : 'application/json'
            }
    })

    if(response.status === 200){
      Swal.fire({
        icon : 'success',
        title : 'Logedin'
      })

      const data = await response.json();
      sessionStorage.setItem('user', JSON.stringify(data));
      navigate('/addissue');


    }else if((response.status === 401)){
      Swal.fire({
        icon : 'error',
        title : 'Login Failed'
      })
    }else{
      console.log('unknown error ocuured');
    }

    // data to store in database
  }

  const myValidation = Yup.object().shape({
    username: Yup.string().min(3, "Too short").max(10, "Too Long").required("Username Required"),
  })

  return (
    <motion.div
    style={{ backgroundImage: 'url("harshbg.jpg")' , minHeight : '100vh', backgroundSize: 'cover' }}
      initial={{ scale: 0.6, x: "800%", opacity: 0 }}
      animate={{ scale: 1, x: 0, opacity: 1 }}
      transition={{ duration: 0.5, type: "spring" }}
      >
        <div className="col-md-5 mx-auto" style={{paddingTop: '200px'}}>
          
        
      <div className="card">
        <div className="card-body">
          <h3 className="text-center">Login Here</h3>
          <Formik initialValues={{ email: "", password: "" }} onSubmit={loginSubmit} 
          // validationSchema={myValidation}
          >
            {({ values, handleChange, handleSubmit, isSubmitting, errors }) => (
              <form onSubmit={handleSubmit}>
                
                <label>Email</label>
                <input type="text" className="form-control" name="email" value={values.email} onChange={handleChange} />

                <label>Password</label>
                <input type="password" className="form-control" name="password" value={values.password} onChange={handleChange} />

                <button disabled={isSubmitting} type="submit" className="btn btn-primary mt-5">
                  {isSubmitting ? <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> : ""}
                  &nbsp;&nbsp;Submit
                </button>
              </form>
            )}
          </Formik>
        </div>
      </div>

      </div>
    </motion.div>
  )
}

export default Login
