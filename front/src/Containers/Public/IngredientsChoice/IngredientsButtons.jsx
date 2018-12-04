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
    const { index } = this.props;
    return (
      <Row>
        <Button> Commander </Button>
        {this.renderButton(index)}
        <NavArrowsLayout />
      </Row>
    );
  }
}

export default IngredientsButtons;
