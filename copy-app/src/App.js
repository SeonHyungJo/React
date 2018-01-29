import React, { Component } from 'react';
import './App.css';
import Main from './main/Main';
import Nav from './commen/Nav.js';
import Top from './commen/Top.js';

class App extends Component {

  constructor(state){
    super(state);

  }

  state = {
    topMenu:[
      "주문재고관리",
      "주문내역확인",
      "주문내역조회",
      "로그아웃"
    ]
  }

  render() {
    return (
      <div className="App">
        <Main title={"안녕하세요"}/>
        <Top {...this.state.topMenu}/>
        <Nav title={"안녕하세요"}/>
      </div> 
    );
  }
}

export default App;
