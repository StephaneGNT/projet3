import React, { Component } from 'react';
import { Col, Button } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import addIngredient from '../../../Actions/cakeActions/addIngredient';

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
    if (ingredient.allergenes.length === 0) {
      if (ingredient.size.indexOf('g') !== -1) {
        description = `${ingredient.info} Giluna recommande une portion de ${ingredient.size}`;
      } else description = `${ingredient.info}`;
    } else {
      if (ingredient.size.indexOf('g') !== -1) {
        description = `${ingredient.info} Allergènes: ${ingredient.allergenes}.
                              Giluna recommande une portion de ${ingredient.size}`;
      }
      description = `${ingredient.info} Allergènes: ${ingredient.allerg}`;
    }
    return description;
  };

  render() {
    const { ingredient, addNewIngredient, disabled } = this.props;
    const { photo } = this.state;
    console.log("in ingredient", photo)

    const filter = disabled && 'grayscale(80%)';
    const color = disabled ? 'darkgrey' : 'black';
    // const display = disabled && 'none';
    const backgroundColor = ingredient.colorCode ? ingredient.colorCode : 'transparent';

    return (
      <Col className="ingredient" style={{ textAlign: 'center' }}>
        <Button disabled={disabled} style={{ filter, backgroundColor }} onClick={() => addNewIngredient(ingredient)}>
          <span className="badge badge-light">{ingredient.price}€</span>
          <img src={photo} title={this.getFullDescripion()} alt="banane" />
        </Button>
        <p style={{ color }}>{ingredient.name}</p>
      </Col>
    );
  }
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
