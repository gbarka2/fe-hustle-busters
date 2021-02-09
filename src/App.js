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

//Initialize FontAwesome Libraries
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons'
library.add(faEllipsisH)


function App() {
  const url = "https://hustle-busters.herokuapp.com"

  const [leads, setLeads] = React.useState([])
  const [divisions, setDivisions] = React.useState([])
  const [searchDivision, setSearchDivision] = React.useState("")

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
    console.log(divisions)
  })
}

const getDivisionByName = () => {
  fetch(url + '/divisions/' + searchDivision)
  .then(response => response.json())
  .then(() => {
    getDivisions()
  })
}

React.useEffect(() => {
  getDivisions();
}, []);



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
          path='/division-leads'
          render={(rp) => <Division 
          {...rp} divisions={divisions.data} leads={leads.data} getDivisionByName={getDivisionByName} searchDivision= {searchDivision} setSearchDivision={setSearchDivision}/>}/>
        
        <Route
          path='/all-leads'
          render={(rp) => <Company leads={leads}/>}>
        </Route>
        <Route
          path='/my-profile'
          render={(rp) => <Profile />}>
        </Route>
      </Switch>
      <About />
    </div>
  );
}

export default App;
