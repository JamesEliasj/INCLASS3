import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  increase = () => {
    this.setState((prevState) => ({
      counter: prevState.counter + 1
    }));
  };

  decrease = () => {
    this.setState((prevState) => ({
      counter: prevState.counter - 1
    }));
  };

  render() {
    const { counter } = this.state;
    return (
      <div className="counter">
        <span className="counter__output">{counter}</span>
        <div className="btn__container">
          <button className="control__btn" onClick={this.decrease}>
            -
          </button>
          <button className="control__btn" onClick={this.increase}>
            +
          </button>
        </div>
      </div>
    );
  }
}

export default App;
