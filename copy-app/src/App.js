import React, { Component } from 'react';
import './App.css';
import Main from './main/Main';
import Nav from './commen/nav.js';
import Top from './commen/top.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Main title={"안녕하세요"}/>
        <Top title={"안녕하세요"}/>
        <Nav title={"안녕하세요"}/>
      </div>
    );
  }
}

export default App;
