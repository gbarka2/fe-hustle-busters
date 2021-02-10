import './App.css';
import { Route, Switch } from 'react-router-dom'
import React from 'react'


//Components & Pages
import Navigation from './components/Nav'
import Login from './components/Login'
import Division from './pages/Division'
import Company from './pages/Company'
import About from './pages/About'
import Profile from './components/Profile'
import User from './pages/UserReg'

//Initialize FontAwesome Libraries
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons'
import UserReg from './pages/UserReg';
import Form from './components/Form';
library.add(faEllipsisH)


function App() {

  const url = "https://hustle-busters.herokuapp.com"
  // const url = "http://localhost:4000"

  //EMPTY USER
  const emptyUser = {
      firstName: "",
      lastName: "",
      email: "",
      userName: "",
      password: ""
  }

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
  const [searchDivision, setSearchDivision] = React.useState("")
  const [searchUserLead, setSearchUserLead] = React.useState("")
  const [userLeads, setUserLeads] = React.useState([])
  const [searchAllLeads, setSearchAllLeads] = React.useState([])
  const [selectedLead, setSelectedLead] = React.useState(emptyLead)
  //new user registration form
  const [regData, setRegData] = React.useState()


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

//GET DIVISIONS BY NAME
const getDivisionByName = (searchDivision) => {
  fetch(url + '/divisions/name/' + searchDivision)
  .then(response => response.json())
  .then((data) => {
    setDivisions(data)
  })
}

React.useEffect(() => {
  getDivisions();
}, []);

const getLeadByCompanyNameUser = (searchUserLead) => {
  console.log('app', searchUserLead)
  fetch(url + '/leads/name/' + searchUserLead)
  .then(response => response.json())
  .then((data) => {
    setUserLeads(data)
    console.log('data', data.data)
  })
}


const selectLead = (lead) => {
  setSelectedLead(lead)
}

const deleteLead = (lead) => {
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
          render={(rp) => <UserReg {...rp} user={emptyUser} handleSubmit={createUser} />}>
        </Route>
        <Route
          path='/division-leads'
          render={(rp) => <Division 
          {...rp} divisions={divisions.data} leads={leads.data} getDivisionByName={getDivisionByName} searchDivision= {searchDivision} setSearchDivision={setSearchDivision} setDivisions={setDivisions} selectLead={selectLead} emptyLead={emptyLead} />}/>
        
        <Route
          path='/all-leads'
          render={(rp) => <Company leads={leads} searchAllLeads={searchAllLeads} setSearchAllLeads={setSearchAllLeads} setSelectedLead={setSelectedLead} selectedLead={selectedLead} selectLead={selectLead} deleteLead={deleteLead} />}>
        </Route>
        <Route
          path='/my-profile'
          render={(rp) => <Profile 
          userLeads={userLeads.data} setLeads={setLeads} searchUserLead={searchUserLead} setSearchUserLead={setSearchUserLead} getLeadByCompanyNameUser={getLeadByCompanyNameUser}  />}>
        </Route>
        <Route
          path='/lead-edit'
          render={(rp) => <Form selectedLead={selectedLead} /> }>
        </Route>
      </Switch>
      <About />
    </div>
  );
}

export default App;
