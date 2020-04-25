import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./MenuSlide.css";

class MenuSlide extends Component {
    render() {
        var visibility = "hide";

        if (this.props.menuVisibility) {
            visibility = "show";
        }


        return (
            <div id="flyoutMenu"
                onMouseDown={this.props.handleMouseDown}
                className={visibility} >
                <div id="menuText">
                    <span></span>
                    <Link className="nav-link" to={"/home"}> <h2><a>Home</a></h2></Link>
                    <Link className="nav-link" to={"/monthlylog"}> <h2><a>Monthly Log</a></h2></Link>
                    <Link className="nav-link" to={"/futurelog"}> <h2><a>Future Log</a></h2></Link>
                    <Link className="nav-link" to={"/university"}> <h2><a>University</a></h2></Link>
                    <Link className="nav-link" to={"/birthdays"}> <h2><a>Birthdays</a></h2></Link>
                    <Link className="nav-link" to={"/lists"}> <h2><a>Lists</a></h2></Link>
                </div>
            </div>
        );
    }

}

export default MenuSlide;