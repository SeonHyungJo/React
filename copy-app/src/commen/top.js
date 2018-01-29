import React, { Component } from 'react';
import '../App.css';

class Top extends Component {
  render() {
    return (
      <div className="App">
        {this.props.title}
      </div>
    );
  }
}

export default Top;