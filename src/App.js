import logo from './logo.svg';
import './App.css';
import {Route, Switch} from 'react-router-dom'
import Nav from './components/Nav'
import Login from './components/Login'


function App() {
  return (
    <div>
      <Nav />
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
