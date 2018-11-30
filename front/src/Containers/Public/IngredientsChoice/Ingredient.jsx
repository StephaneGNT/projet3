import React from 'react';
import { Col } from 'reactstrap';
import { connect } from 'react-redux';
import addIngredient from '../../../Actions/cakeActions/addIngredient';
import '../../../Assets/Styles/Ingredient.css';

const Ingredient = (props) => {

  return (
    <Col className="ingredient" style={{ textAlign: 'center' }}>
      <img src={props.ingredient.img} title={props.ingredient.fullDescripion} onClick={() => props.addIngredient(props.ingredient)} alt="" />
      <p>{props.ingredient.name}</p>
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
