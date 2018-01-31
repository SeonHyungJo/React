import React, { Component } from 'react';
import './App.css';
import { Provider } from "react-redux";
import { createStore } from "redux";
import Main from './main/Main';
import reducer from "./reducer";

let store = createStore(reducer);

console.log(store.getState());

class App extends Component {

  state = {
    leftType: "m"
  }

  componentDidMount = () => {
    this._selectDataTest()
  }

  _selectDataTest = async () => {
    const menuList = await this._selectDate();
    this.setState({
      menuList
    })
  }

  _selectDate = () => {
    return fetch(`http://localhost:7000/getTotalMenu?type=${this.state.leftType}`)
    .then(respones => respones.json())
    .then(json => json.menuList)
    .catch(err => console.log(err))
  }

  render() {
    console.log(this.state.menuList)
    return (
      <div className="App">
        {!this.state.menuList ? "loading" : <Main title={"안녕하세요"} menuList={this.state.menuList} /> }
      </div> 
    );
  }
}

export default App;
