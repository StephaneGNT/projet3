import React, { Component } from 'react';
import { Row, Button } from 'reactstrap';
import NavArrowsLayout from '../Navigation/NavArrowsLayout';

class IngredientsButtons extends Component {
  renderButton = (index) => {
    let render;
    if (index === 3) {
      render = (<button className="order-btn"> Une garniture supplémentaire ? </button>);
    }
    return render;
  };

  render() {
    const { index } = this.props;
    return (
      <Row>
        <button className="order-btn"> Commander </button>
        {this.renderButton(index)}
        <NavArrowsLayout />
      </Row>
    );
  }
}

export default IngredientsButtons;
