import React, { Component } from "react";
import './main.css';

class Main extends Component {
  render() {
    const { title, menuList } = this.props;
    console.log("main")
    console.log(menuList)
    return (
        <div>
            {title}
            {menuList[0].f_code}
        </div>
    )};
}

export default Main;
