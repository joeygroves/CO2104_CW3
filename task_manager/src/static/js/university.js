import React, { Component } from "react";
import "../css/homePage.css";
import NavBar from "../../components/navbar/navbar";


export default class University extends Component {
    render() {
        return (
            <div>
                <div>
                    <NavBar />
                </div>

                <h2> University </h2>

                <h3> Hello World! </h3>

            </div>

        );
    }
}