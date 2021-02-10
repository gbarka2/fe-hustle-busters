import React from "react"
import Search from './Search'
import Lead from './Lead'

const Profile = (props) => {

    // const url = "http://localhost:4000"
    const url = "https://hustle-busters.herokuapp.com"

    const [user, setUser] = React.useState([])

    //fetch user by ID (will need to pass props for login)
    const getUser = (props) => {
        fetch(url + "/usernames/" + "6020a823e08ac89b1a42715d")
        .then((response) => response.json())
        .then((data) => {
            // console.log('user data-', data)
            setUser(data[0])
        })
    }
    //fetch it once
    React.useEffect(() => {
        getUser()
    }, [])

    // console.log("userName props-", props)

    const handleUserLeadChange = (event) => {
      event.preventDefault()
      props.setSearchUserLead(event.target.value)
      // console.log(event.target.value)
    }

    const handleUserLeadSubmit = (event) => {
      event.preventDefault()
      if (props.searchDivision !== "") {
          props.getLeadByCompanyNameUser(props.searchUserLead)
          console.log('submit working', user.leads)
      }
    }
  
  const loaded = () => (
        <div className="profile-div">
          <h2>Hi {user.firstName} {user.lastName}!</h2>   
          <Search value="Your Hustles" placeholder="Enter Company Name" handleChange={handleUserLeadChange} handleSubmit={handleUserLeadSubmit} /> 
          <hr />
          {
          props.userLeads ? props.userLeads.map((lead, index) => (
            <Lead lead={lead} key={index} />
          ))        
          : user.leads.map((lead, index) => (
            <Lead lead={lead} key={index} />
          ))} 
        </div>
    )
  
  const loading = <h1>Hustling...</h1>

  return user.leads ? loaded() : loading
}

export default Profile

