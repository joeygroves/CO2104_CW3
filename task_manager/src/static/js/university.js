import React, { Component } from "react";
import "../css/homePage.css";
import NavBar from "../../components/navbar/navbar";

import Footer from '../../components/Todo/Footer';
import AddTodo from '../../containers/AddTodo';
import VisibleTodoList from '../../containers/VisibleTodoList';

import Moment from 'react-moment';

export default class University extends Component {
    render() {
        return (
            <div>
                <div>
                    <NavBar />
                </div>

                <h2> University Tasks </h2>
                <Moment format="dddd Do MMMM YYYY"></Moment>
                

                <AddTodo />
                <VisibleTodoList />
                <Footer />

            </div>

        );
    }
}