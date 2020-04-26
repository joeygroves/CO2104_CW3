import React, { Component } from "react";
import "../css/homePage.css";
import NavBar from "../../components/navbar/navbar";

import Footer from '../../components/Todo/Footer';
import AddTodo from '../../containers/AddTodo';
import VisibleTodoList from '../../containers/VisibleTodoList';

import Moment from 'react-moment';

export default class Home extends Component {
    render() {
        return (
            <div>
                <div className="dailyLog">
                    <div>
                        <NavBar />
                    </div>

                    <h1> Daily Log </h1> 
                    <Moment format="dddd Do MMMM YYYY"></Moment>
                    <h5></h5>




                    <AddTodo />
                    <VisibleTodoList />
                    <Footer />

                </div>

            </div>



        );
    }
}