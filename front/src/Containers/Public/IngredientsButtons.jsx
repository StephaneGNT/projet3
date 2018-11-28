import React, { Component } from 'react';
import { Row } from 'reactstrap';
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
        <button type="button"> Commander </button>
        {this.renderButton(this.props.index)}
        <NavArrowsLayout />
      </Row>
    );
  }
}

export default IngredientsButtons;
