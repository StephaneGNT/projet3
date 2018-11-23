import React, { Component } from 'react';
import { Row } from 'reactstrap';
import NavArrowsLayout from './NavArrowsLayout';

class IngredientsButtons extends Component {

  renderButton = (state) => {
    let render;
    if (state === 2) {
      render = (<button type="button"> Une garniture supplémentaire ? </button>);
    }
    return render;
  };

  render() {
    return (
      <Row>
        <button type="button"> Commander </button>
        {this.renderButton()}
        <NavArrowsLayout />
      </Row>
    );
  }
}

export default IngredientsButtons;
