import React from 'react';
import { Col, Button } from 'reactstrap';
import { connect } from 'react-redux';
import addIngredient from '../../../Actions/cakeActions/addIngredient';
import '../../../Assets/Styles/Ingredient.css';

const Ingredient = (props) => {
  const { ingredient, addIngredient } = props;

  return (
    <Col className="ingredient" style={{ textAlign: 'center' }}>
      <Button onClick={() => addIngredient(ingredient)}><img src={ingredient.img} title={ingredient.fullDescripion} alt="" /></Button>
      <p>{ingredient.name}</p>
    </Col>
  );
};

const mapStateToProps = state => ({
  cake: state.cakeCharacteristics,
});

const mapDispatchToProps = dispatch => ({
  addIngredient: ingredient => dispatch(addIngredient(ingredient)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Ingredient);
