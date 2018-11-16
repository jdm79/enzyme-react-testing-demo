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

  incrementCount = () => {
    this.setState({count: this.state.count +1 })
  }

  decrementCount = () => {
    this.setState({count: this.state.count -1 })
  }

  resetCount = () => {
    this.setState({count: 0})
  }


  render() {
    return (
      <div className="App">
        <h1>{this.props.title}</h1>
        <h2>{this.state.message} {this.state.count}</h2>
        <button onClick={this.incrementCount}>Increment Counter</button>
        <button onClick={this.resetCount}>Reset Counter</button>
        <button onClick={this.decrementCount}>Decrement Counter</button>
      </div>
    );
  }
}

export default App;
