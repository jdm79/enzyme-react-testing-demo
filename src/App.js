import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: "The count is: ",
      count: 0
    }
  }

  render() {
    return (
      <div className="App">
        <h1>{this.props.title}</h1>
        <h2>{this.state.message} {this.state.count}</h2>
      </div>
    );
  }
}

export default App;
