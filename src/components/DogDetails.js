import React, {Component} from 'react';
import './Counter.css'

class DogDetails extends Component {
    render() {
      return <div className="sidebyside" >
          <p>{this.props.name}</p>
        <img className="image" src={this.props.photo} />
      </div>
    }
}

export default DogDetails;