import React, {useReact, useState} from "react";
import '../css/authentication.css';
import {Link, Navigate} from 'react-router-dom'
import {connect} from 'react-redux'
import { login } from '../actions/auth'

const LogIn = ({login, isAuthenticated}) => {

  const [formData, serFormData] = useState({
    email: '',
    password: ''
  })

  const {email, password} = formData;
  const onChange = e => serFormData({...formData, [e.target.name]: e.target.value});
  const onSubmit = e => {
    e.preventDefault();
    login(email, password)
  }

  // Is the user authenticated? If yes then return them to the home page. 
  if (isAuthenticated){
    return <Navigate to='/' />
  }






  return (
    <div>
      <div className="signinform">
        <form>
          <h1>Think One Day</h1>
          <input type="email" placeholder="Email" name='email' value={email} onChange={e => onChange(e)} required />
          <br />
          <input type="password" placeholder="Password" name='password' value={password} onChange={e => onChange(e)} minLength='8' required />
          <br />
          <button type="submit">LOGIN</button>
          <br />
          <p>
            New around here?
            <a href=""> Sign up</a>
          </p>
          <p>
            <a href="">Forgot Password?</a>
          </p>
          <text>
            With ThinkOne we collectively reflect on one question a Day
          </text>
        </form>
        <button type="submit">GOOGLE LOGIN</button>

      </div>
    </div>
  );
};


const mapStateToProps = state => ({
  // is authenticated? 
  isAuthenticated: state.auth.isAuthenticated
})


export default connect(mapStateToProps, { login })(LogIn);
