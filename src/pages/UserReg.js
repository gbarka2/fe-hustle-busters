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
        

    return(
        <div className="userReg-div">
            <h2 className="userReg-h2">Create New User Account</h2>
            <form className="userReg-form">
                <div className="form-section">
                    <label className="userReg-label">First Name</label>
                    <input
                        className="userReg-input" 
                        type="text"
                        id="firstName"
                        value={regData.firstName}
                        onChange={handleChange}/>
                </div>
                <div className="form-section">
                    <label className="userReg-label">Last Name</label>
                    <input 
                        className="userReg-input" 
                        type="text"
                        id="lastName"
                        value={regData.lastName}
                        onChange={handleChange}/>
                </div>
                <div className="form-section">
                    <label className="userReg-label">Email</label>
                    <input
                        className="userReg-input"  
                        type="email"
                        id="email"
                        value={regData.email}
                        onChange={handleChange}/>
                </div>
                <div className="form-section">
                    <label className="userReg-label">User Name</label>
                    <input
                        className="userReg-input"  
                        type="text"
                        id="userName"
                        value={regData.userName}
                        onChange={handleChange}/>
                </div>
                <div className="form-section">
                    <label className="userReg-label">Password</label>
                    <input
                        className="userReg-input"  
                        type="password"
                        id="password"
                        value={regData.password}
                        onChange={handleChange}/>
                </div>
                <div className="form-section">
                    <label className="userReg-label">Confrim Password</label>
                    <input
                        className="userReg-input"  
                        type="password"
                        id="confirmPassword"
                        value={regData.confirmPassword}
                        onChange={handleChange}/>
                </div>
                <button
                    className="submit-button" 
                    type="submit"
                    onClick={handleSubmit}>
                    Register
                </button>
            </form>    
        </div>
    )
}

export default UserReg