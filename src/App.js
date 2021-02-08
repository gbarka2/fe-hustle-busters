import './App.css';
import { Route, Switch } from 'react-router-dom'

//Components & Pages
import Navigation from './components/Nav'
import Login from './components/Login'
import Division from './pages/Division'
import Company from './pages/Company'
import About from './pages/About'

//Initialize FontAwesome Libraries
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons'
library.add(faEllipsisH)

function App() {
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
          path='division-leads'
          render={(rp) => <Division />}>
        </Route>
        <Route
          path='all-leads'
          render={(rp) => <Company />}>
        </Route>
        <Route
          path='about'
          render={(rp) => <About />}>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
