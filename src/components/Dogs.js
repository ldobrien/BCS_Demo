import React, { Component } from "react";
import axios from "axios";
import DogDetails from "./DogDetails";
import { Icon, Button } from "react-materialize";
import "./Counter.css";

class Dogs extends Component {
  // create a state variable for counting
  state = {
    dog: [],
    dogNames: [],
  };

  onClickPuppy = () => {
    const requestOne = axios.get(`https://dog.ceo/api/breeds/image/random`);
    const requestTwo = axios.get(`https://randomuser.me/api/`);

    axios.all([requestOne, requestTwo]).then(
      axios.spread((...responses) => {
        const responseOne = responses[0];
        const responseTwo = responses[1];
        const dog = responseOne.data.message;
        const dogNames = responseTwo.data.results[0].name;
        const dogName =
          dogNames.title + " " + dogNames.first + " " + dogNames.last;
        this.setState({
          dog: [...this.state.dog, dog],
          dogNames: [...this.state.dogNames, dogName],
        });
      })
    );
  };

  render() {
    let dogPhotos = [];
    this.state.dog.forEach((dogPhoto, index) => {
      dogPhotos.push(
        <div className="col s3">
          <DogDetails name={this.state.dogNames[index]} photo={dogPhoto} />
        </div>
      );
    });
    return (
      <div className="container">
        <div className="center">
          <Button
            className="blue"
            large
            node="button"
            waves="light"
            onClick={this.onClickPuppy}
          >
            More dogs Please...
          </Button>
        </div>
        <div className="row">{dogPhotos}</div>
      </div>
    );
  }
}

export default Dogs;
