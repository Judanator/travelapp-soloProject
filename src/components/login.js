import React from "react";
import "./login.css";

const Login = () => {
  // fetch post request 
  const submitBtn = event => {
    event.preventDefault()
    fetch('http://localhost:8080/api/signup')
    .then(res => console.log(res))
  }

  return (
    <div className="loginMainDiv">
      <h1 className="signUpTitle"> SIGN UP </h1>
        <form className="signupForm">
            <label> First Name </label>
             <input type="firstName"/>

            <label> Last Name </label>
             <input type="lastName"/>

            <label> Email </label>
             <input type="email"/>

            <label> Password </label>
             <input type="password" />

            <br/>
            <button type="submit" className="submitBtn" onClick={submitBtn}> SUBMIT </button>
        </form>        
    </div>
  );
};

export default Login;
