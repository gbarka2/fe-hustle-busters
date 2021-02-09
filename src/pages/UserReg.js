import React from "react"


const UserReg = (props) => {

    console.log('props-', props)
    
    //set state
    const [regData, setRegData] = React.useState(props.user)


    //click even handler for sending data to backend
    const handleSubmit = (event) => {
        event.preventDefault()
        props.handleSubmit(regData)
        props.history.push("/")
        /////save below for post MVP///////
        // if (regData.password === regData.confirmPassword){
        //     createUser()
        //     props.history.push('/')
        // } else {
        //     props.history.push('/user-registration')
        // }
    }
    
    //Capture data in handle change
    const handleChange = (event) => {
        setRegData({...regData, [event.target.name]: event.target.value })
    }

    //If data exists ...
    // const createUser = (newUser) => {
    //     if (regData.firstName.length &&
    //         regData.lastName.length &&
    //         regData.email.length &&
    //         regData.userName.length &&
    //         regData.password.length){
        




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
                <label>Email</label>
                <input 
                    type="email"
                    id="email"
                    value={regData.email}
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