import React, { useState, useRef } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './static/css/App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./static/js/login_form";
import Register from "./static/js/register_form";
import Logout from "./static/js/logout";
import NavBar from "./components/navbar/navbar";
import Home from "./static/js/homePage";

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
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;