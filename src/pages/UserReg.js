import React, { useState } from "react"


const UserReg = (props) => {

    //set state
    const [regData, setRegData] = useState({
        firstName: "",
        lastName: "",
        userName: "",
        password: ""
    })
    
    //Capture data in handle change
    const handleChange = (event) => {
        const{id, value} = event.target
        setRegData(prevState => ({
            ...prevState,
            [id] : value
        }))
    }


    return(
        <div className="userReg-div">
           <h3>Create New User Account</h3>
           <form>
               <label>First Name</label>
                <input 
                    type="text"
                    id="firstName"
                    value={regData.firstName}
                    onChange={handleChange}
                />
                <label>Last Name</label>
                <input 
                    type="text"
                    id="lastName"
                    value={regData.lastName}
                    onChange={handleChange}
                />
                <label>User Name</label>
                <input 
                    type="text"
                    id="userName"
                    value={regData.userName}
                    onChange={handleChange}
                />
                <label>Password</label>
                <input 
                    type="password"
                    id="password"
                    value={regData.password}
                    onChange={handleChange}

                />
                <label>Confrim Password</label>
                <input 
                    type="password"
                    id="confirmPassword"
                />
                <button
                    type="submit"
                    >
                    Register as New User
                </button>
            </form>    
        </div>
    )
}

export default UserReg