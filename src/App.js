import React from 'react'
import './App.css';
import { Route, Switch } from 'react-router-dom'


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


const [divisions, setDivisions] = React.useState([])
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

const getDivisionLeads = () => {
  fetch(url + '/divisions/')
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
          path='/division-leads'
          render={(rp) => <Division 
          {...rp} divisions={divisions.data} leads={leads.data} />}/>
        
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
