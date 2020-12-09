import React, {Component} from 'react';
import axios from 'axios';
import DogDetails from './DogDetails'

class Counter extends Component {
  // create a state variable for counting
    state = {
      counter: 0,
      dog: [],
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
        this.setState({ dog: [...this.state.dog, dog] });
      })
    }

    render() {
      console.log(this.state.dog)
      let dogPhotos = []
      this.state.dog.forEach(dogPhoto => {
        dogPhotos.push(<DogDetails photo={dogPhoto}/>)
      })
      return <div>
        <p>{this.state.counter}</p>
        <button onClick={this.onClick}>Increase</button>
        <div>
          <button onClick={this.onClickPuppy}>More Dogs Please...</button>
        </div>
        {dogPhotos}
      </div>
    }
}

export default Counter;