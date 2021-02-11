import React from "react"
import { Link } from "react-router-dom"

const Login = (props) => {

    return(
        <div className="login-div">
          <h1 className="login-h1">Hustle Busters</h1>
          <h2 className="login-h2">Hustle your way into BUSTING competition</h2>
            <form className="login-form">
              <label className="login-label">Username</label>
              <input
                className="login-input" 
                type="text"
                name="username"
                onChange=" "  
              />
              <label className="login-label">Password</label>
              <input
                className="login-input"  
                type="text"
                name="password"
                onChange=" "  
              />
              <input
                className="submit-button" 
                type="submit" 
                value="Login"/>
            </form>
            <Link to="/user-registration">
            <p className="login-create">Create New Account</p>
            </Link>
        </div>
    )
}

export default Login