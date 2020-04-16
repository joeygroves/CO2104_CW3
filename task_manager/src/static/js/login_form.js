import React, { Component } from "react";
import "../css/login_register.css";

import ReactDOM from 'react-dom';
import HomePage from '../js/homePage';
import LoginNavBar from "../../components/login_navbar/login_navbar";
import { withRouter } from 'react-router-dom';

class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            message: '',
            isLoggedIn: false
        };

        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }


    handleUsernameChange(event) {
        this.setState({ username: event.target.value });
    }

    handlePasswordChange(event) {
        this.setState({ password: event.target.value });
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        if (this.state.username === "admin" && this.state.password === "password") {

            this.setState({ message: "Logged In" });
            this.setState({isLoggedIn: true});

            this.props.history.push('/home');

            //ReactDOM.render(<HomePage />, document.getElementById('root'));

        }

        else if ( (this.state.username === "admin" && this.state.password !== "password") || (this.state.username !== "admin" && this.state.password === "password") ) {

            this.setState({ message: "Incorrect Username And/Or Password" });

        }
    };



        render() {
            return (
                <div>

                    <div>
                        <LoginNavBar />
                    </div>

                    <form onSubmit={this.handleSubmit}>
                        <h3> Login </h3>

                        <div className="form-group">
                            <label>Username</label>
                            <input name="username" type="text" className="form-control" placeholder="Enter username" onChange={this.handleUsernameChange} value={this.state.username} />
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input name="password" type="password" className="form-control" placeholder="Enter password" onChange={this.handlePasswordChange} value={this.state.password} />
                        </div>

                        <div className="form-group">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                <label className="custom-control-label" htmlFor="customCheck1">Remember Me</label>
                            </div>
                        </div>


                        <button type="submit" className="btn btn-primary btn-block">Log In</button>
                        <p className="forgot-password text-right">
                            Forgot <a href="#">password?</a>
                        </p>

                    </form>

                    <p>{this.state.message}</p>

                </div>

            );
        }
    }

    export default withRouter(Login);