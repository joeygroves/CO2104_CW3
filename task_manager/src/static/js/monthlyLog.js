import React, { Component } from "react";
import "../css/homePage.css";
import NavBar from "../../components/navbar/navbar";


export default class MonthlyLog extends Component {
    render() {
        return (
            <div>
                <div>
                    <NavBar />
                </div>

                <h2> Monthly Log </h2>

                <h3> Hello World! </h3>

            </div>

        );
    }
}