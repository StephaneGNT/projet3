import React, { Component } from 'react';
import { Col, Button } from 'reactstrap';
import { connect } from 'react-redux';
import axios from 'axios';
import PropTypes from 'prop-types';
import addIngredient from '../../../Actions/cakeActions/addIngredient';
import calculateIngredient from './IngredientPriceCalculation';

class Ingredient extends Component {
  constructor() {
    super();
    this.state = { photo: '' };
  }

  componentWillMount() {
    const { ingredient } = this.props;
    axios.get(`/api/image/get/${ingredient.image}`)
      .then((response) => {
        this.setState({ photo: `data:image/jpg;base64,${response.data}` });
      });
  }

  getFullDescripion = () => {
    const { ingredient } = this.props;
    let description = '';
    if (ingredient.allergenes) {
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

  getIngredientPrice = (type, price) => {
    switch (type) {
      case ('cake'): return `${price} €/part`;
      case ('cheesecake'): return `${price} €`;
      default: return `${price} €/unité`;
    }
  }


  render() {
    const { ingredient, addNewIngredient, disabled, cake } = this.props;
    const { photo } = this.state;
    const filter = disabled && 'grayscale(80%)';
    const color = disabled ? 'grey' : 'black';
    // const display = disabled && 'none';
    const ingredientWithUpdatedPrice = calculateIngredient(ingredient, cake);
    const backgroundColor = ingredient.colorCode ? ingredient.colorCode : 'transparent';
    return (
      <Col className="ingredient">
        <Button 
          disabled={disabled} 
          style={{ filter, backgroundColor }} 
          size="sm" 
          onClick={() => addNewIngredient(ingredientWithUpdatedPrice)}
        >
          <span className="badge badge-light">{ingredientWithUpdatedPrice.price}€</span>
          <img src={photo} title={this.getFullDescripion()} alt="banane" />
        </Button>
        <Col>
          <p style={{
            color, fontWeight: 'bold', textAlign: 'center', marginTop: '10px'
          }}
          >
            {ingredient.name}
          </p>
          <p style={{ color, textAlign: 'left' }}>{ingredient.description}</p>
        </Col>
      </Col>
    );
  }
}

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
