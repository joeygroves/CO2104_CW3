import React, { Component } from "react";
import "../css/homePage.css";
import NavBar from "../../components/navbar/navbar";

import Footer from '../../components/Todo/Footer';
import AddTodo from '../../containers/AddTodo';
import VisibleTodoList from '../../containers/VisibleTodoList';


export default class Home extends Component {
    render() {
        return (
            <div>
                <div>
                    <NavBar />
                </div>

                <h3> Hello World! </h3>

                <AddTodo />
                <VisibleTodoList />
                <Footer />

            </div>

        );
    }
}