import React, { useState, useRef } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './static/css/App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./static/js/login_form";
import Register from "./static/js/register_form";
import Logout from "./static/js/logout";
import NavBar from "./components/navbar/navbar";
import Home from "./static/js/homePage";
import MonthlyLog from './static/js/monthlyLog';
import FutureLog from './static/js/futureLog';
import University from './static/js/university';
import Birthdays from './static/js/birthdays';
import Lists from './static/js/lists'

function App() {
  return (
    <Router>
      <div className="App">

        <div className="auth-wrapper">
          <div className="auth-inner">
            <Switch>
              <Route exact path='/' component={Login} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <Route path="/logout" component={Logout} />

              <Route path="/home" component={Home} />
              <Route path="/monthlylog" component={MonthlyLog} />
              <Route path="/futurelog" component={FutureLog} />
              <Route path="/university" component={University} />
              <Route path="/birthdays" component={Birthdays} />
              <Route path="/lists" component={Lists} />

            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;