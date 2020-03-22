import React, { Component } from "react";
import "../css/login_register.css";

import ReactDOM from 'react-dom';
import HomePage from '../js/homePage';
import LoginNavBar from "../../components/login_navbar/login_navbar";
import { withRouter } from 'react-router-dom';

class Login extends Component {
    render() {
        return (
            <div>

                <div>
                    <LoginNavBar />
                </div>

                <form>
                    <h3> Login </h3>

                    <div className="form-group">
                        <label>Username</label>
                        <input name="username" type="text" className="form-control" placeholder="Enter username" />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input name="password" type="password" className="form-control" placeholder="Enter password" />
                    </div>

                    <div className="form-group">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                            <label className="custom-control-label" htmlFor="customCheck1">Remember Me</label>
                        </div>
                    </div>


                    <button type="submit" className="btn btn-primary btn-block">Submit</button>
                    <p className="forgot-password text-right">
                        Forgot <a href="#">password?</a>
                    </p>

                </form>

            </div>

        );
    }
}

export default withRouter(Login);