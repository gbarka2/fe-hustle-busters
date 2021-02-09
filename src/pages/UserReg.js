import React, { useState } from "react"


const UserReg = (props) => {
    return(
        <div className="userReg-div">
           <h3>Create New User Account</h3>
           <form>
               <label>First Name</label>
                <input 
                    type="text"
                    id="FirstName"
                />
                <label>Last Name</label>
                <input 
                    type="text"
                    id="LastName"
                />
                <label>User Name</label>
                <input 
                    type="text"
                    id="UserName"
                />
                <label>Password</label>
                <input 
                    type="password"
                    id="Password"
                />
                <label>Confrim Password</label>
                <input 
                    type="password"
                    id="ConfirmPassword"
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