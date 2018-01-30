import React, { Component } from 'react';
import './App.css';
import Main from './main/Main';


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
        <Main title={"안녕하세요"} />
      </div> 
    );
  }
}

export default App;
