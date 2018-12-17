import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Button } from 'reactstrap';
import PropTypes from 'prop-types';
import NavArrowsLayout from '../Navigation/NavArrowsLayout';

class IngredientsButtons extends Component {
  renderButton = (index, cake) => {
    let render;
    const ingredientsType = cake.ingredients.map(ingredient => ingredient.type);
    if (index === 3 && ingredientsType.indexOf('Filling') >= 0) {
      render = (<Button className="order-btn"> Une garniture supplémentaire ? </Button>);
    }
    return render;
  };

  render() {
    const { index, cake } = this.props;
    return (
      <Row>
        <Button className="order-btn"> Commander </Button>
        {this.renderButton(index, cake)}
        <NavArrowsLayout />
      </Row>
    );
  }
}

IngredientsButtons.propTypes = {
  index: PropTypes.number.isRequired,
  cake: PropTypes.shape({}).isRequired,
};

const mapStateToProps = state => ({
  cake: state.cakeCharacteristics,
});

export default connect(mapStateToProps, null)(IngredientsButtons);
