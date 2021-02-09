import React, { useState } from "react"


const UserReg = (props) => {

    const url = "https://hustle-busters.herokuapp.com"

    //set state
    const [regData, setRegData] = useState({
        firstName: "",
        lastName: "",
        email: "",
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

    //If data exists, send to server
    const createUser = (newUser) => {
        if (regData.firstName.length &&
            regData.lastName.length &&
            regData.email.length &&
            regData.userName.length &&
            regData.password.length){
            const payload = {
                "firstName" : regData.firstName,
                "lastName" : regData.lastName,
                "email" : regData.email,
                "useName" : regData.useName,
                "password" : regData.useName
            }
        fetch(url + "/", {
            method: "post",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(newUser)
        })
        .then(()=>{
            props.history.push('/')
        })
        }
    }


    //click even handler for sending data to backend
    const handleSubmit = (event) => {
        event.preventDefault()
        if (regData.password === regData.confirmPassword){
            createUser()
        } else {
            props.history.push('/user-registration')
        }
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
                <label>Email</label>
                <input 
                    type="email"
                    id="email"
                    value={regData.email}
                    onChange={handleChange}

                />
                <label>Confrim Password</label>
                <input 
                    type="password"
                    id="confirmPassword"
                    value={regData.confirmPassword}
                    onChange={handleChange}
                />
                <button
                    type="submit"
                    onClick={handleSubmit}
                    >
                    Register as New User
                </button>
            </form>    
        </div>
    )
}

export default UserReg