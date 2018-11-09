import React, { Component } from 'react';
import './App.css';
import Counter from './Counter';
import Form from './Form';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter/>
        <Form />
      </div>
    );
  }
}

export default App;
