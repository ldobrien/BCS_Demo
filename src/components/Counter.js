import React, { Component } from "react";
import { Icon, Button } from "react-materialize";
import "./Counter.css";
import { connect } from 'react-redux';
import {addToCounter} from '../store/actions/actions'

class Counter extends Component {

  onClick = () => {
    this.props.addToCounter(1);
  };

  render() {
    var counter = this.props.counter
    return (
      <div className="container">
        <div className="white center card">
          <div className="blue-text counter">{counter}</div>
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

const mapStateToProps = state => {
  return {
      counter: state.counter // this is the field from initialState
  };
};

const mapDispatchToProps = {
  addToCounter // this is the function we defined in actions.js
};

export default connect(
  mapStateToProps,
  mapDispatchToProps)(Counter);
