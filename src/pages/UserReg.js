import React from "react"


const UserReg = (props) => {
    //set state
    const [regData, setRegData] = React.useState(props.user)

    //click even handler for sending data to backend
    const handleSubmit = (event) => {
        event.preventDefault()
        if (regData.password === regData.confirmPassword){
            props.handleSubmit(regData)
            props.history.push('/')
            alert("You're In! Login with your username and password on the next page.")
        } else {
            props.history.push('/user-registration')
            alert('Passwords didnt match, try again.')
            setRegData("")
        }
    }
    
    //Capture data in handle change
    const handleChange = (event) => {
        setRegData({...regData, [event.target.id]: event.target.value })
    }

    //If data exists ... POST MVP
    //     if (regData.firstName.length &&
    //         regData.lastName.length &&
    //         regData.email.length &&
    //         regData.userName.length &&
    //         regData.password.length){
    // if statements on right after the other - line 15
        

    return(
        <div className="userReg-div">
            <h3 className="userReg-h3">Create New User Account</h3>
            <form className="userReg-form">
                <label className="userReg-label">First Name</label>
                <input
                    className="userReg-input" 
                    type="text"
                    id="firstName"
                    value={regData.firstName}
                    onChange={handleChange}/>
                <label className="userReg-label">Last Name</label>
                <input 
                    className="userReg-input" 
                    type="text"
                    id="lastName"
                    value={regData.lastName}
                    onChange={handleChange}/>
                <label className="userReg-label">Email</label>
                <input
                    className="userReg-input"  
                    type="email"
                    id="email"
                    value={regData.email}
                    onChange={handleChange}/>
                <label className="userReg-label">User Name</label>
                <input
                    className="userReg-input"  
                    type="text"
                    id="userName"
                    value={regData.userName}
                    onChange={handleChange}/>
                <label className="userReg-label">Password</label>
                <input
                    className="userReg-input"  
                    type="password"
                    id="password"
                    value={regData.password}
                    onChange={handleChange}/>
                <label className="userReg-label">Confrim Password</label>
                <input
                    className="userReg-input"  
                    type="password"
                    id="confirmPassword"
                    value={regData.confirmPassword}
                    onChange={handleChange}/>
                <button
                    className="userReg-button" 
                    type="submit"
                    onClick={handleSubmit}>
                    Register as New User
                </button>
            </form>    
        </div>
    )
}

export default UserReg