import './App.css';
import { Route, Switch } from 'react-router-dom'
import React from 'react'

//Components & Pages
import Form from './components/Form';
import Login from './components/Login'
import Navigation from './components/Nav'
import Profile from './components/Profile'
import About from './pages/About'
import Company from './pages/Company'
import Division from './pages/Division'
import UserReg from './pages/UserReg';

//Initialize FontAwesome Libraries
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons'
library.add(faEllipsisH)


function App() {

  const url = "https://hustle-busters.herokuapp.com"

  //EMPTY USER
  const emptyUser = {
      firstName: "",
      lastName: "",
      email: "",
      userName: "",
      password: ""
  }

  //EMPTY LEAD
  const emptyLead = {
    contactName: "",
    companyName: "",
    position: "",
    phone: "",
    email: "",
    status: "",
    active: true,
    estimatedRevenue: "",
    actualRevenue: ""
  }

  //STATES
  const [leads, setLeads] = React.useState([])
  const [divisions, setDivisions] = React.useState([])
  const [searchUserLead, setSearchUserLead] = React.useState("")
  const [userLeads, setUserLeads] = React.useState([])
  const [selectedLead, setSelectedLead] = React.useState(emptyLead)
  
  //CREATE USER
  const createUser = (newUser) => {
    fetch(url + "/usernames/", {
        method: "post",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(newUser)
    })
    }

  //GET LEADS
  const getLeads = () => {
    fetch(url + "/leads")
    .then(response => response.json())
    .then(data => {
      setLeads(data)
    })
  }

  React.useEffect(() => {
    getLeads()
  }, [])

  //GET DIVISIONS
  const getDivisions = () => {
    fetch(url + '/divisions')
    .then((response) => response.json())
    .then((data) => {
      setDivisions(data)
    })
  }

React.useEffect(() => {
  getDivisions();
}, []);

  //GET LEADS BY COMPANY
  const getLeadByCompanyNameUser = (searchUserLead) => {
    fetch(url + '/leads/name/' + searchUserLead)
    .then(response => response.json())
    .then((data) => {
      setUserLeads(data)
      console.log('data', data.data)
    })
  }

  //UPDATE AN EXISTING LEAD
  const handleUpdate = (lead) => {
    fetch(url + '/leads/' + lead._id, {
      method: "put",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(lead)
    })
    .then((data)=>{
      getLeads(data)
    })
  }

  //DELETE A LEAD
  const deleteLead = (lead) => {
    console.log(lead._id)
    fetch(url + '/leads/' + lead._id, {
      method: "delete"
    })
    .then((data) => {
      getLeads(data)
    })
  }

  return (
    <div>
      <Navigation />
      <Switch>
        <Route
          exact
          path='/'
          render={(rp) => <Login />}>
        </Route>
        <Route
          path='/user-registration'
          render={(rp) => <UserReg {...rp} 
          user={emptyUser} 
          handleSubmit={createUser} />}>
        </Route>
        <Route
          path='/division-leads'
          render={(rp) => <Division {...rp} 
          divisions={divisions.data} 
          setSelectedLead={setSelectedLead} 
          deleteLead={deleteLead}
          />}/>
        <Route
          path='/all-leads'
          render={(rp) => <Company 
          leads={leads} 
          selectedLead={selectedLead} 
          setSelectedLead={setSelectedLead} 
          deleteLead={deleteLead}
          />}>
        </Route>
        <Route
          path='/my-profile'
          render={(rp) => <Profile {...rp}
          userLeads={userLeads.data} 
          searchUserLead={searchUserLead} 
          setSearchUserLead={setSearchUserLead} getLeadByCompanyNameUser={getLeadByCompanyNameUser}
          handleUpdate={handleUpdate}
          setSelectedLead={setSelectedLead}
          deleteLead={deleteLead}
          />}>
        </Route>
        <Route path='/about'>
          <About />
        </Route> 
        <Route
          path='/lead-edit'
          render={(rp) => <Form {...rp} 
          selectedLead={selectedLead} 
          handleUpdate={handleUpdate}/> }>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
