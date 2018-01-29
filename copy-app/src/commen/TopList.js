import React, { Component } from 'react';
import "./Top.css";

class TopList extends Component {

  render() {
    return (
        <li className={this.props.active}>
            <a href="#" onClick={this.props.click}>{this.props.topMenuName}</a>
        </li>
    );
  }
}

export default TopList;