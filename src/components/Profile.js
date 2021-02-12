import React from "react"
import Search from './Search'
import Lead from './Lead'

const Profile = (props) => {

    const url = "https://hustle-busters.herokuapp.com"

    const [user, setUser] = React.useState([])

    //fetch user by ID
    const getUser = (props) => {
        fetch(url + "/usernames/" + "6020a823e08ac89b1a42715d")
        .then((response) => response.json())
        .then((data) => {
            setUser(data[0])
        })
    }
    //fetch it once
    React.useEffect(() => {
        getUser()
    }, [])

    const handleUserLeadChange = (event) => {
      event.preventDefault()
      props.setSearchUserLead(event.target.value)
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
          <h2 className="profile-h2">Hi {user.firstName} {user.lastName}!</h2>   
          <Search 
            value="Your Hustles" 
            placeholder="Company Name" 
            handleChange={handleUserLeadChange} 
            handleSubmit={handleUserLeadSubmit}/> 
          {
          props.userLeads ? props.userLeads.map((lead, index) => (
            <Lead lead={lead} key={index} deleteLead={props.deleteLead} setSelectedLead={props.setSelectedLead} handleUpdate={props.handleUpdate} />
          ))        
          : user.leads.map((lead, index) => (
            <Lead lead={lead} key={index} deleteLead={props.deleteLead} setSelectedLead={props.setSelectedLead} handleUpdate={props.handleUpdate} />
          ))} 
        </div>
    )
  
  const loading = <h2 className="profile-h2">Hustling...</h2>

  return user.leads ? loaded() : loading
}

export default Profile

