import React, { Component } from 'react';
import { Row, Button } from 'reactstrap';
import PropTypes from 'prop-types';
import NavArrowsLayout from '../Navigation/NavArrowsLayout';

class IngredientsButtons extends Component {
  renderButton = (index) => {
    let render;
    if (index === 3) {
      render = (<Button className="order-btn"> Une garniture supplémentaire ? </Button>);
    }
    return render;
  };

  render() {
    const { index } = this.props;
    return (
      <Row>
        <Button className="order-btn"> Commander </Button>
        {this.renderButton(index)}
        <NavArrowsLayout />
      </Row>
    );
  }
}

IngredientsButtons.propTypes = {
  index: PropTypes.number.isRequired,
};

export default IngredientsButtons;
