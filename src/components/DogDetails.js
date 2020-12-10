import React, { Component } from "react";

class DogDetails extends Component {
  render() {
    return (
      <div class="card">
        <div class="card-image">
          <img className="image" src={this.props.photo} />
          <span class="card-title">{this.props.name}</span>
        </div>
      </div>
    );
  }
}

export default DogDetails;
