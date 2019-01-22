import React, { Component } from 'react';
import { Alert } from 'reactstrap';

class AlertAddIngredient extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: true,
    };

    this.onDismiss = this.onDismiss.bind(this);
  }

  onDismiss() {
    this.setState({ visible: false });
  }

  render() {
    return (
      <Alert color="info" isOpen={this.state.visible} toggle={this.onDismiss}>
        Votre ingrédient a bien été ajouté !
        {/* {this.props.message} */}
      </Alert>
    );
  }
}

export default AlertAddIngredient;
