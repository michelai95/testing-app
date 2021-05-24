import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div>
      <div className="login">
        <p>Please login to use the testing app</p>
        <form name="loginForm" method="GET">
          <ul className="loginFormContainer">
            <li className="loginForm">
              <label for="name">Username:</label>
              <input type="text" className="name" name="userName"></input>
            </li>
            <li className="loginForm">
              <label for="password">Password:</label>
              <input type="text" className="password" name="password"></input>
            </li>
          </ul>
        </form>
        <div className="loginButtons">
          <button className="loginButton" type="submit">Submit</button>
        </div>
        <div className="formFooter">
          <Link className="signUpLink" className="formFooterLink" to="/SignUp">Sign Up</Link>
          <Link className="forgotPassword" className="formFooterLink" to="/ForgotPassword">Forgot Password?</Link>
        </div>
      </div>
    </div>

  )
}