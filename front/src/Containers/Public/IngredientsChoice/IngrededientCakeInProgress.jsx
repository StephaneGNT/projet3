import React, { Component } from 'react';
import axios from 'axios';

class IngredientInProgress extends Component {
  constructor(props) {
    super(props);
    this.state = { photo: '' };
  }

  componentWillMount() {
    const { image } = this.props;
    axios.get(`/api/image/get/${image}`)
      .then((response) => {
        const photography = `data:image/jpg;base64,${response.data}`;
        this.setState({ photo: photography });
      });
  }


  render() {
    const { photo } = this.state;
    const { design } = this.props;
    return (
      <p>
        <img src={photo} alt="ingredient1" className={design} />
      </p>
    );
  }
}

export default IngredientInProgress;
