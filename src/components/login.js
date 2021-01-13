import React from "react";
import "./login.css";
import { Form, FormLabel, Button } from "react-bootstrap";

const Login = () => {
  return (
    <div className="loginMainDiv">
      <h1 className="signUpTitle"> SIGN UP </h1>
        <form className="signupForm">
            <label> First Name </label>
             <input />

            <label> Last Name </label>
             <input />

            <label> Email </label>
             <input />

            <label> Password </label>
             <input />

            <br/>
            <button type="submit" className="submitBtn"> SUBMIT </button>
        </form>        
    </div>
  );
};

export default Login;
