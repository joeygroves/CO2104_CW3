import React, { Component } from "react";
import "../css/homePage.css";
import NavBar from "../../components/navbar/navbar";
import MenuButton from "../../components/hamburger_menu/MenuButton";
import MenuSlide from "../../components/hamburger_menu/MenuSlide";

export default class Home extends Component {
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

    toggleMenu() {
        this.setState(
            {
                visible: !this.state.visible
            }
        );
    }

    render() {
        return (
            <div>
                <div>
                    <NavBar />
                </div>

                <h3> Hello World! </h3>

            </div>

        );
    }
}