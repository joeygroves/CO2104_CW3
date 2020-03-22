import React, { Component } from "react";
import "../css/login_register.css";

import LoginNavBar from "../../components/login_navbar/login_navbar";

export default class Logout extends Component {
    render() {
        return (
            <div>
                <div>
                    <LoginNavBar />
                </div>
                
                <h3> Successfully Logged Out! </h3>
            </div>

        );
    }
}