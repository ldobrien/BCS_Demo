import React, { Component } from "react";
import { Icon, Button } from "react-materialize";
import "./Counter.css";

class Counter extends Component {
  // create a state variable for counting
  state = {
    counter: 0,
    dog: [],
    dogNames: [],
  };

  onClick = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  render() {
    return (
      <div className="container">
        <div className="white center card">
          <div className="blue-text counter">{this.state.counter}</div>
          <Button
            className="blue"
            floating
            icon={<Icon>+</Icon>}
            large
            node="button"
            waves="light"
            onClick={this.onClick}
          />
        </div>
      </div>
    );
  }
}

export default Counter;
