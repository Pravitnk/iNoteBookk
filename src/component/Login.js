import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


const Login = (props) => {
  const host = "http://localhost:5000";
  const [credentials, setCredentials] = useState({ email: '', password: '' })
  let history = useNavigate();


  //funcuin to submit the form 
  const handleSubmit = async (e) => {
    e.preventDefault();
    //api call
    const response = await fetch(`${host}/api/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: credentials.email, password: credentials.password })
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      //save the auth token and redirect
      localStorage.setItem('token', json.authtoken);
      props.showAlert('Logged in successfully ', 'success');
      history("/");
    }
    else {
      props.showAlert('Invalid Credentials ', 'danger');
    }
  }

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  }

  return (
    <div className='container item-center'>
      <form onSubmit={handleSubmit}>
        <div className="mb-3 row">
          <label htmlFor="email" className="col-sm-2 col-form-label"><h4>Email</h4></label>
          <div className="col-sm-5">
            <input type="email" className="form-control" name='email' value={credentials.email} id="email" onChange={onChange} placeholder='Enter your Email' />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="inputPassword" className="col-sm-2 col-form-label"><h4>Password</h4></label>
          <div className="col-sm-5">
            <input type="password" className="form-control" name='password' value={credentials.password} id="inputPassword" onChange={onChange} placeholder='Enter your Password' />
          </div>
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  )
}

export default Login
