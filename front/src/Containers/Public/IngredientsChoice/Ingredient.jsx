import React from 'react';
import { Col, Button } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import addIngredient from '../../../Actions/cakeActions/addIngredient';
import '../../../Assets/Styles/Ingredient.css';

const Ingredient = (props) => {
  const { ingredient, addNewIngredient, disabled } = props;

  const getFullDescripion = () => {
    let description = '';
    if (ingredient.allerg.length === 0) {
      if (ingredient.portion) {
        description = `${ingredient.info}
Giluna recommande une portion de ${ingredient.portion}`;
      } else description = `${ingredient.info}`;
    } else {
      if (ingredient.portion) {
        description = `${ingredient.info}
Allergènes: ${ingredient.allerg}.
Giluna recommande une portion de ${ingredient.portion}`;
      }
      description = `${ingredient.info}
Allergènes: ${ingredient.allerg}`;
    }
    return description;
  };

  const filter = disabled && 'grayscale(80%)';
  const color = disabled ? 'darkgrey' : 'black';
  // const display = disabled && 'none';
  const backgroundColor = ingredient.colorCode ? ingredient.colorCode : 'transparent';

  return (
    <Col className="ingredient" style={{ textAlign: 'center' }}>
      <Button disabled={disabled} style={{ filter, backgroundColor }} onClick={() => addNewIngredient(ingredient)}>
        <span className="badge badge-light">{ingredient.price}€</span>
        <img src={ingredient.img} title={getFullDescripion()} alt="" />
      </Button>
      <p style={{ color }}>{ingredient.name}</p>
    </Col>
  );
};

Ingredient.propTypes = {
  ingredient: PropTypes.shape({}).isRequired,
  addNewIngredient: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  cake: state.cakeCharacteristics,
});

const mapDispatchToProps = dispatch => ({
  addNewIngredient: ingredient => dispatch(addIngredient(ingredient)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Ingredient);
