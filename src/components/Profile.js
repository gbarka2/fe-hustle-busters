import React from "react"

const Profile = (props) => {

    const url = "https://hustle-busters.herokuapp.com"

    const [user, setUser] = React.useState([])

    //fetch user by ID
    const getUser = (props) => {
        fetch(url + "/usernames/" + "6020a823e08ac89b1a42715d")
        .then((response) => response.json())
        .then((data) => {
            console.log('data-', data)
            setUser(data[0])
        })
    }
    //fetch it once
    React.useEffect(() => {
        getUser()
    }, [])

    // console.log("userName props-", props)

    return(
        <div className="profile-div">
            <h2>Hi {user.firstName} {user.lastName}</h2>    
        </div>
    )
}

export default Profile

