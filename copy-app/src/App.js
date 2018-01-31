import React, { Component } from 'react';
import './App.css';
import { Provider } from "react-redux";
import { createStore } from "redux";
import Main from './main';
import Nav from './cmmn/nav/nav';
import Left from './cmmn/left/left';
import reducer from "./reducer";

let store = createStore(reducer);

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
    return (
      <div>
        <Nav />
        <Left />
        <Provider store={store}>
          <Main />
        </Provider>
      </div>
    );
  }
}

export default App;
