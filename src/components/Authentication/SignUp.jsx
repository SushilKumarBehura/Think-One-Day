import React from "react";
import '../css/authentication.css';


const SignUp = () => {
  return (
    <div className="abd">
      <div className="signupform">
        <p>Why Think One Day ?</p>
        <br />
        {/* <ul>
          <li>Explore your world of Experience</li>
          <li>Discover deep Philosophical questions</li>
          <li>Build a Project or Startup</li>
        </ul> */}

        {/* <input type="email" placeholder="Email" name='email' value={email} onChange={e => onChange(e)} required />
        <br />
        <input type="password" placeholder="Password" name='password' value={password} onChange={e => onChange(e)} minLength='8' required />
        <br /> */}
        <button type="submit">LOGIN</button>
        <br />
        <div className="createaccount">
          <a href="">Create Account</a>
        </div>
        <div className="createaccount">
          <a href="">Create Accout using G</a>
        </div>
        {/* <div className="createaccount1">
          <p>Create your account at </p>
          <a href="https://infosnack.at/accounts/login">www.infosnack.at</a>
        </div> */}
      </div>
    </div>
  );
};

export default SignUp;
