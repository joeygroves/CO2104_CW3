import React, { Component } from "react";
import "../css/homePage.css";
import NavBar from "../../components/navbar/navbar";

import Footer from '../../components/Todo/Footer';
import AddTodo from '../../containers/AddTodo';
import VisibleTodoList from '../../containers/VisibleTodoList';

import Moment from 'react-moment';


export default class Birthdays extends Component {
    render() {
        return (
            <div>
                <div>
                    <NavBar />
                </div>

                <h2> Birthdays </h2>
                <h5> Today's Date: <Moment format="Do MMMM YYYY"></Moment> </h5>

                <span></span>
                <h4></h4>
                <h6>Joey Groves: 5th November 1999 </h6>
                <h6>Isaac Webber: 10th May 2000 </h6>
                <h6>Josh Sinclair: 1st April 2000 </h6>
                <h6>Ollie Glanville: 18th June 2000 </h6>


            </div>

        );
    }
}