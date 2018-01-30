import React, { Component } from 'react';
import './App.css';
import Main from './main/Main';
import Nav from './commen/Nav.js';
import Top from './commen/Top.js';

class App extends Component {

  constructor(state){
    super(state);

  }

  componentDidMount = () => {
    this._selectDataTest()
  }

  _selectDataTest = async () => {
    const datalist = await this._selectDate(10);
    
  }

  _selectDate = (userCode) => {
    return fetch(`http://localhost:7000/usercheck?usercode=${userCode}`)
    .then(respones => console.log(JSON.parse(respones)))
    .catch()
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
        {/* <Top {...this.state.topMenu}/> */}
        <Nav title={"안녕하세요"}/>
      </div> 
    );
  }
}

export default App;
