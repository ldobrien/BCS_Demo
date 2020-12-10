import React, {Component} from 'react';
import axios from 'axios';
import DogDetails from './DogDetails'
import './Counter.css'

class Counter extends Component {
  // create a state variable for counting
    state = {
      counter: 0,
      dog: [],
      dogNames: []
    }

    onClick = () => {
      this.setState({
        counter: this.state.counter + 1
      })
    }

    onClickPuppy = () => {
      const requestOne = axios.get(`https://dog.ceo/api/breeds/image/random`)
      const requestTwo = axios.get(`https://randomuser.me/api/`)

      axios.all([requestOne, requestTwo])
      .then(axios.spread((...responses) => {
        const responseOne = responses[0]
        const responseTwo = responses[1]
        const dog = responseOne.data.message
        const dogNames = responseTwo.data.results[0].name
        const dogName = dogNames.title + " " + dogNames.first + " " + dogNames.last
        this.setState({
          dog: [...this.state.dog, dog],
          dogNames: [...this.state.dogNames, dogName]
        })
      }
      ))
      // axios.get(`https://dog.ceo/api/breeds/image/random`)
      // .then(res => {
      //   const dog = res.data.message;
      //   this.setState({ dog: [...this.state.dog, dog] });
      // })
      // axios.get(`https://randomuser.me/api/`)
      // .then(res => {
      //   const dogName = res.data.results[0].name.title + res.data.results[0].name.first + res.data.results[0].name.last
      //   this.setState({ dogNames: [...this.state.dogNames, dogName]})
      // })
    }

    render() {
      console.log(this.state.dog)
      let dogPhotos = []
      this.state.dog.forEach((dogPhoto, index) => {
        dogPhotos.push(<DogDetails name={this.state.dogNames[index]} photo={dogPhoto}/>)
      })
      return <div className="container">
        <div className="limegreen">
          <p>{this.state.counter}</p>
          <button onClick={this.onClick}>Increase</button>
        </div>

        <div>
          <button onClick={this.onClickPuppy}>More Dogs Please...</button>
        </div>
        {dogPhotos}
      </div>
    }
}

export default Counter;