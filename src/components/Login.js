import React from "react"

const Login = (props) => {
    return(
        <div className="login-div">
          <h4>Logo Goes Here</h4>   
          <h1>Hustle Busters</h1>
          <h2>Hustle your way into BUSTING competition</h2>
            <form>
              <h4>Username</h4>
              <input 
                type="text"
                name="username"
                value={}
                onChange={}  
              />
              <input 
                type="text"
                name="password"
                value={}
                onChange={}  
              />
              <input type="submit" value={}/>
            </form>
            <button>Create New Account</button>
        </div>
    )
}

export default Login