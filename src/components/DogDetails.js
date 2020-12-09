import React, {Component} from 'react';

class DogDetails extends Component {
    constructor(props){
        super(props);
    }

    render() {
      return <div>
        <img src={this.props.photo} />
      </div>
    }
}

export default DogDetails;