import React from 'react';
import { Switch, Route } from "react-router-dom";
import './App.scss';
import HomePage from './HomePage/HomePage';
import Dashboard from './Dashboard.js/Dashboard';


function App() {
    return (
        <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/dashboard' component={Dashboard} />
        </Switch>
    )
}

export default App;
