import React, {Component} from 'react';
import axios from 'axios';

class Counter extends Component {
  // create a state variable for counting
    state = {
      counter: 0,
      dog: null,
    }

    onClick = () => {
      this.setState({
        counter: this.state.counter + 1
      })
    }

    onClickPuppy = () => {
      axios.get(`https://dog.ceo/api/breeds/image/random`)
      .then(res => {
        console.log(res)
        const dog = res.data.message;
        this.setState({ dog });
      })
    }

    render() {
      return <div>
        <p>{this.state.counter}</p>
        <button onClick={this.onClick}>Increase</button>
        <div>
          <button onClick={this.onClickPuppy}>Get me a Puppy</button>
        </div>
          <img src={this.state.dog} />
        
        
      </div>
    }
}

export default Counter;