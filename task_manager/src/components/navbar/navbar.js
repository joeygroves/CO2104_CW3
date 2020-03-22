import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { slide as Menu } from 'react-burger-menu';
import "./navbar.css";

export default class NavBar extends Component {
    showSettings(event) {
        event.preventDefault();
    }


    render() {
        return (


            <nav className="navbar navbar-expand-lg navbar-light fixed-top">

                <div className="container">
                    <Link className="navbar-brand" to={"/home"}>Task Management System</Link>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to={"/logout"}>Logout</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}
