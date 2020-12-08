import React, {Component} from 'react';

class Counter extends Component {
  // create a state variable for counting
    state = {
      counter: 0
    }

    onClick = () => {
      this.setState({
        counter: this.state.counter + 1
      })
      // console.log("Clicked a button")
    }

    render() {
      return <div>
        <p>{this.state.counter}</p>
        <button onClick={this.onClick}>Increase</button>
      </div>
    }
}

export default Counter;