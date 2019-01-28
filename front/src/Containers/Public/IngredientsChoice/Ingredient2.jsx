import React from 'react';
import { Col, Button } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import addIngredient from '../../../Actions/cakeActions/addIngredient';
import '../../../Assets/Styles/Ingredient.css';

const Ingredient = (props) => {
  const { ingredient, addNewIngredient, disabled, cake } = props;

  const getFullDescripion = () => {
    let description = '';
    if (ingredient.allergenes.length === 0) {
      if (ingredient.portion) {
        description = `Giluna recommande une portion de ${ingredient.portion}`;
      }
    } else {
      if (ingredient.portion) {
        description = `Allergènes: ${ingredient.allerg}.
Giluna recommande une portion de ${ingredient.portion}`;
      }
      description = `Allergènes: ${ingredient.allerg}`;
    }
    return description;
  };

  const getBadgeMessage = () => {
    switch (cake.type) {
      case 'cake': return ' €/part';
      case 'cheesecake': return ' €';
      default: return ' €/unité';
    }
  };

  const filter = disabled && 'grayscale(80%)';
  const color = disabled ? 'darkgrey' : 'black';
  const backgroundColor = ingredient.colorCode ? ingredient.colorCode : 'transparent';

  return (
    <Col className="ingredient" style={{ display: 'flex', flexDirection: 'row', textAlign: 'center' }}>
      <Button
        disabled={disabled}
        style={{
          filter, backgroundColor, display: 'flex', flexDirection: 'column',
        }}
        onClick={() => addNewIngredient(ingredient)}
      >
        <span className="badge badge-light">
          {ingredient.price}
          {getBadgeMessage()}
        </span>
        <img src={ingredient.image} title={getFullDescripion()} alt="" />
      </Button>
      <Col>
        <p style={{
          color, fontWeight: 'bold', textAlign: 'center', marginTop: '10px',
        }}
        >
          {ingredient.name}
        </p>
        <p style={{ color, textAlign: 'left' }}>{ingredient.description}</p>
      </Col>
    </Col>
  );
};

Ingredient.propTypes = {
  ingredient: PropTypes.shape({}).isRequired,
  addNewIngredient: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
  cake: PropTypes.shape({}).isRequired,
};

const mapStateToProps = state => ({
  cake: state.cakeCharacteristics,
});

const mapDispatchToProps = dispatch => ({
  addNewIngredient: ingredient => dispatch(addIngredient(ingredient)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Ingredient);
