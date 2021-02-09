import React, { useState } from "react"


const UserReg = (props) => {
    return(
        <div className="userReg-div">
           <h3>Create New User Account</h3>
           <form>
               <label>First Name</label>
                <input 
                    type="text"
                    id="FirtNamr"
                />
                
            </form>    
        </div>
    )
}

export default UserReg