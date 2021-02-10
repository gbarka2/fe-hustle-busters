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
library.add(faEllipsisH)


function App() {

  const url = "https://hustle-busters.herokuapp.com"
  // const url = "http://localhost:4000"


  const [leads, setLeads] = React.useState([])
  const [divisions, setDivisions] = React.useState([])
  const [searchDivision, setSearchDivision] = React.useState("")
  const [searchUserLead, setSearchUserLead] = React.useState("")
  const [userLeads, setUserLeads] = React.useState([])

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


const getDivisions = () => {
  fetch(url + '/divisions')
  .then((response) => response.json())
  .then((data) => {
    setDivisions(data)
  })
}

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
          render={(rp) => <UserReg />}>
        </Route>
        <Route
          path='/division-leads'
          render={(rp) => <Division 
          {...rp} divisions={divisions.data} leads={leads.data} getDivisionByName={getDivisionByName} searchDivision= {searchDivision} setSearchDivision={setSearchDivision} setDivisions={setDivisions} />}/>
        
        <Route
          path='/all-leads'
          render={(rp) => <Company leads={leads}/>}>
        </Route>
        <Route
          path='/my-profile'
          render={(rp) => <Profile 
          userLeads={userLeads.data} setLeads={setLeads} searchUserLead={searchUserLead} setSearchUserLead={setSearchUserLead} getLeadByCompanyNameUser={getLeadByCompanyNameUser}  />}>
        </Route>
      </Switch>
      <About />
    </div>
  );
}

export default App;
