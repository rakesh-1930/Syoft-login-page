import * as React from 'react'
import './App.css';
import SignIn from './authentication/sign-in';
import { Route, Switch } from 'react-router-dom';
import SignUp from './authentication/sign-up';
import Dashboard from './dashboard/dashboard';
import DeadZone from './deadzone/deadzone';


function App() {
  return (
    <>
      <Switch>
        <Route exact path={'/'} component={SignIn} />
        <Route exact path={'/signUp'} component={SignUp} />
        <Route exact path={'/dashboard'} component={Dashboard} />
        <Route path={'*'} component={DeadZone} />
      </Switch>
    </>
  );
}

export default App;
