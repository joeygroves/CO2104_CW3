import React, { Component } from "react";
import "../css/homePage.css";
import NavBar from "../../components/navbar/navbar";

import { BrowserRouter as Link } from "react-router-dom";

export default class Lists extends Component {
    render() {
        return (
            <div>
                <div>
                    <NavBar />
                </div>

                <h2> Lists </h2>
                <div className="Lists">
                    <h4> Poetry Ideas </h4>
                    <h4> Music Ideas </h4>
                    <h4> Video Ideas </h4>
                    <h4> Recipes </h4>
                    <h4> Mental Health </h4>
                </div>

            </div>

        );
    }
}