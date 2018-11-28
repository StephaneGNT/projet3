import React, { Component } from 'react';
import { Row, Button } from 'reactstrap';
import NavArrowsLayout from './NavArrowsLayout';

class IngredientsButtons extends Component {
  renderButton = (index) => {
    let render;
    if (index === 3) {
      render = (<button type="button"> Une garniture supplémentaire ? </button>);
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
