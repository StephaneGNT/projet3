import React from 'react';
import { Col, Button, Badge } from 'reactstrap';
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
  // const display = disabled && 'none';
  const backgroundColor = ingredient.colorCode ? ingredient.colorCode : 'transparent';

  return (
    <Col className="ingredient" style={{ textAlign: 'center' }}>
      <Button disabled={disabled} style={{ filter, backgroundColor }} onClick={() => addNewIngredient(ingredient)}><img src={ingredient.img} title={getFullDescripion()} alt="" /></Button>
      {/* <Button
        disabled={disabled}
        style={{ backgroundColor }}
        onClick={() => addNewIngredient(ingredient)}
      >
        <Badge color="success">
          {ingredient.price}
          €
        </Badge>
        <img src={ingredient.img} title={getFullDescripion()} alt="" />
      </Button> */}
      <p>{ingredient.name}</p>
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
