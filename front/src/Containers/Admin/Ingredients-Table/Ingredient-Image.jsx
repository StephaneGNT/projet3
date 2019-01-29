import React, { Component } from 'react';
import axios from 'axios';

class IngredientImage extends Component {
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
    const { alternate } = this.props;
    return (
      <p>
        <img src={photo} alt={alternate} />
      </p>
    );
  }
}

export default IngredientImage;
