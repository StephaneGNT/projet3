import React from 'react';
import { Col, Button } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import addIngredient from '../../../Actions/cakeActions/addIngredient';
import '../../../Assets/Styles/Ingredient.css';

const Ingredient = (props) => {
  const { ingredient, addNewIngredient } = props;

  return (
    <Col className="ingredient" style={{ textAlign: 'center' }}>
      <Button onClick={() => addNewIngredient(ingredient)}><img src={ingredient.img} title={ingredient.fullDescripion} alt="" /></Button>
      <p>{ingredient.name}</p>
    </Col>
  );
};

Ingredient.propTypes = {
  ingredient: PropTypes.string.isRequired,
  addNewIngredient: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  cake: state.cakeCharacteristics,
});

const mapDispatchToProps = dispatch => ({
  addNewIngredient: ingredient => dispatch(addIngredient(ingredient)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Ingredient);
