import React from 'react';
import { connect } from 'react-redux';
import { Col } from 'reactstrap';

import { increasePrice, decreasePrice } from '../../Actions/Action';

import '../../Assets/Styles/Ingredient.css';

const Ingredient = (props) => {
  const description = `${props.ingredient.info} 
Allergènes: ${props.ingredient.allerg}`;

  return (
    <Col className="ingredient">
      <img src={props.ingredient.img} title={description} draggable="true" alt="" />
      <p>{props.ingredient.name}</p>
    </Col>
  );
};

const mapDispatchToProps = dispatch => ({
  addToPrice: amount => dispatch(increasePrice(amount)),
  substractFromPrice: amount => dispatch(decreasePrice(amount)),
});

export default connect(
  mapDispatchToProps,
)(Ingredient);
