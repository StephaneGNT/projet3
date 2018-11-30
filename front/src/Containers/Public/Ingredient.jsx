import React from 'react';
import { Col } from 'reactstrap';
import { connect } from 'react-redux';
import { addIngredient } from '../../Actions/Action';
import '../../Assets/Styles/Ingredient.css';

const Ingredient = (props) => {

  const getDescription = () => {
    let description;
    if (props.ingredient.portion) {
      description = `${props.ingredient.info} 
Allergènes: ${props.ingredient.allerg}
Giluna recommande une portion de ${props.ingredient.portion}`;
    } else {
      description = `${props.ingredient.info} 
Allergènes: ${props.ingredient.allerg}`;
    }
    return description;
  };


  return (
    <Col className="ingredient">
      <img src={props.ingredient.img} title={getDescription()} onClick={() => props.addIngredient(props.ingredient)} alt="" />
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
