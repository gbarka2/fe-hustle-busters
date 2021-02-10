import React from "react"
import { Link } from "react-router-dom"

const Login = (props) => {
  //THIS IS UNFINISHED!
  const [loginData, setLoginData] = React.useState(props.user)
  console.log("login state-", )

    return(
        <div className="login-div">
          <h4>Logo Goes Here</h4>   
          <h1>Hustle Busters</h1>
          <h2>Hustle your way into BUSTING competition</h2>
            <form>
              <label>Username</label>
              <input 
                type="text"
                name="username"
                onChange=" "  
              />
              <label>Password</label>
              <input 
                type="text"
                name="password"
                onChange=" "  
              />
              <input type="submit" value="Login" />
            </form>
            <Link to="/user-registration">
            <p>Create New Account</p>
            </Link>
        </div>
    )
}

export default Login