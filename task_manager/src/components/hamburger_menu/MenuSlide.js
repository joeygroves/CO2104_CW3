import React, { Component } from "react";
import "./MenuSlide.css";

class MenuSlide extends Component {
    render() {
        var visibility = "hide";

        if (this.componentWillReceiveProps.menuVisibility) {
            visibility = "show";
        }


    return(
        <div id = "flyoutMenu"
            onMouseDown = { this.props.handleMouseDown }
            className = { visibility } >
            <h2><a href="#">Home</a></h2>
            <h2><a href="#">Monthly Log</a></h2>
            <h2><a href="#">Future Log</a></h2>
            <h2><a href="#">Lists</a></h2>
        </div>
    );
}

}

export default MenuSlide;