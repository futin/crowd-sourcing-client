import React from 'react';
import { Switch, Route } from "react-router-dom";
import Login from './Login/Login';
import Dashboard from './Dashboard.js/Dashboard';

function App() {
    return (
        <Switch>
            <Route exact path='/' component={Login} />
            <Route path='/dashboard' component={Dashboard} />
        </Switch>
    )
}

export default App;
