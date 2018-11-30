import React, { Component } from 'react';
import { Row, Button } from 'reactstrap';
import NavArrowsLayout from '../Navigation/NavArrowsLayout';

class IngredientsButtons extends Component {
  renderButton = (index) => {
    let render;
    if (index === 3) {
      render = (<Button> Une garniture supplémentaire ? </Button>);
    }
    return render;
  };

  render() {
    return (
      <Row>
        <Button> Commander </Button>
        {this.renderButton(this.props.index)}
        <NavArrowsLayout />
      </Row>
    );
  }
}

export default IngredientsButtons;
