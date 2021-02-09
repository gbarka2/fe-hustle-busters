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

  const getLeads = () => {
    fetch(url + "/leads")
    .then(response => response.json())
    .then(data => {
      setLeads(data)
    })
  }



// ATTEMPTING TO GET LEAD onClick
const handleGet = (lead) => {
  fetch(url + "/leads/" + lead._id, {
    method:"get",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(lead)
  }).then(() => {
    getLeads()
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
    // console.log(divisions)
  })
}

const getDivisionByName = (searchDivision) => {
  console.log('searched division', searchDivision)
  fetch(url + '/divisions/name/' + searchDivision)

  .then(response => response.json())
  .then((data) => {
    setDivisions(data)
    console.log('getDivisionByName data', data)
    // console.log('getDivisionByName divisions', divisions)

    // getDivisions()
  })
}

React.useEffect(() => {
  getDivisions();
}, []);

// React.useEffect(() => {
//   getDivisionByName()
// }, [])

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
          render={(rp) => <Company leads={leads} />}>
        </Route>
        
        <Route //Trying to figure this out
          path='/leads'
          render={(rp) => <Company label="get"  leads={leads} handleSubmit={handleGet} />}>
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
