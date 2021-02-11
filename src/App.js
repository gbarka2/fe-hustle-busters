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
  const [searchDivision, setSearchDivision] = React.useState("")
  const [searchUserLead, setSearchUserLead] = React.useState("")
  const [userLeads, setUserLeads] = React.useState([])
  const [searchAllLeads, setSearchAllLeads] = React.useState([])
  const [selectedLead, setSelectedLead] = React.useState(emptyLead)
  const [regData, setRegData] = React.useState()

  console.log('app selectedlead', selectedLead)
  
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

  //GET LEADS BY COMPANY
  const getLeadByCompanyNameUser = (searchUserLead) => {
    console.log('app', searchUserLead)
    fetch(url + '/leads/name/' + searchUserLead)
    .then(response => response.json())
    .then((data) => {
      setUserLeads(data)
      console.log('data', data.data)
    })
  }

  //PASSING LEAD SATE TO FUNCTION
  // const selectLead = (lead) => {
  //   setSelectedLead(lead)
  // }

  //UPDATE AN EXISTING LEAD

  const handleUpdate = () => {
    console.log('handleupdate', selectedLead._id)
    fetch(url + '/leads/' + selectedLead._id, {
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
          leads={leads.data} 
          getDivisionByName={getDivisionByName} 
          searchDivision={searchDivision} 
          setSearchDivision={setSearchDivision} 
          setDivisions={setDivisions} 
          // selectLead={selectLead} 
          emptyLead={emptyLead} 
          deleteLead={deleteLead}
          setSelectedLead={setSelectedLead} 
          selectedLead={selectedLead} 
          getLeads={getLeads}
          deleteLead={deleteLead}
          handleUpdate={handleUpdate}
          />}/>
        
        <Route
          path='/all-leads'
          render={(rp) => <Company 
          leads={leads} 
          searchAllLeads={searchAllLeads} 
          setSearchAllLeads={setSearchAllLeads} 
          setSelectedLead={setSelectedLead} 
          selectedLead={selectedLead} 
          getLeads={getLeads}
          deleteLead={deleteLead}
          />}>
        </Route>
        <Route
          path='/my-profile'
          render={(rp) => <Profile {...rp}
          userLeads={userLeads.data} 
          setLeads={setLeads} 
          searchUserLead={searchUserLead} 
          setSearchUserLead={setSearchUserLead} getLeadByCompanyNameUser={getLeadByCompanyNameUser}
          handleUpdate={handleUpdate}
          setSelectedLead={setSelectedLead}
          selectedLead={selectedLead} 
          getLeads={getLeads}
          deleteLead={deleteLead}
          handleUpdate={handleUpdate}
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
