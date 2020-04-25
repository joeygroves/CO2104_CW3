import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { slide as Menu } from 'react-burger-menu';
import "./navbar.css";
import MenuButton from "../../components/hamburger_menu/MenuButton";
import MenuSlide from "../../components/hamburger_menu/MenuSlide";

export default class NavBar extends Component {
    showSettings(event) {
        event.preventDefault();
    }

    constructor(props, context) {
        super(props, context);

        this.state = {
            visible: false
        };

        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    handleMouseDown(e) {
        this.toggleMenu();

        console.log("clicked");
        e.stopPropagation();
    }

    toggleMenu(){
        this.setState({
            visible: !this.state.visible
        });
    }




    render() {
        return (


            <nav className="navbar navbar-expand-lg navbar-light fixed-top">

                <div className="container">

                <MenuButton handleMouseDown={this.handleMouseDown} />
                <MenuSlide handleMouseDown={this.handleMouseDown} menuVisibility={this.state.visible} />


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
