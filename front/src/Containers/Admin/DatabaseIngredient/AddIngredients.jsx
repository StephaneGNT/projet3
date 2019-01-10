import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import {
  Label, Input, Container, Row, Col, Button,
} from 'reactstrap';
// import AlertAddIngredient from './AlertAddIngredient';
import PropTypes from 'prop-types';
import '../../../Assets/Styles/Add_Ingredients.css';

class AddIngredients extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: '',
      name: '',
      size_diameter: 0,
      price: 0,
      availability: true,
      info: '',
      image_id: '',
      allerg: '',
      compatible: [],
      dispo: true,
    };
    this.onSubmit = this.onSubmit.bind(this);
    // this.updateState = this.onChange.bind(this);
    this.urlParams = this.state;
  }

  updateState = (e) => {
    switch (e.target.value) {
      case 'Base':
        this.setState({ type: 'bases' });
        this.urlParams = 'cake_bases';
        break;
      case 'Filling':
        this.setState({ type: 'fillings' });
        this.urlParams = 'fillings';
        break;
      case 'Icing':
        this.setState({ type: 'icings' });
        this.urlParams = 'icings';
        break;
      case 'Topping':
        this.setState({ type: 'toppings' });
        this.urlParams = 'toppings';
        break;
      default:
        this.setState({ [e.target.name]: e.target.value });
    }
  }

  onSubmit = (e) => {
    e.preventDefault();
    const {
      type, name, size_diameter, price, availability, info, image_id, allerg, compatible, dispo,
    } = this.state;

    const newIngredient = {
      type,
      name,
      size_diameter,
      price,
      availability,
      info,
      image_id,
      allerg,
      compatible,
      dispo,
    };

    axios.post(`http://localhost:5000/ingredients/${this.urlParams}/new`, newIngredient)
      .then(res => console.log(res.data))
      .catch(err => console.log(err.response.data));
  };

  render() {
    console.log(this.urlParams);
    return (
      <div className="bodyIng">
        <form onSubmit={this.onSubmit}>
          <Container>
            <div className="ligne-titre">
              <Row>
                <Col sm="5">
                  <h3 className="mt-3">Ajout d'un nouvel ingrédient</h3>
                </Col>
              </Row>
            </div>
            <Row className="les-row">
              <Col sm="2">
                <Label className="label-type">
                  Type d'ingrédient
                  <Input type="select" name="type" className="input-admin-type" onChange={this.updateState}>
                    <option> </option>
                    <option onClick={() => this.updateState('bases')}>Base</option>
                    <option onClick={() => this.updateState('fillings')}>Filling</option>
                    <option onClick={() => this.updateState('icings')}>Icing</option>
                    <option onClick={() => this.updateState('toppings')}>Topping</option>
                  </Input>
                </Label>
              </Col>
              <Col sm="2">
                <Label className="label-type">
                  Nom
                  <Input value={this.name} type="text" name="name" className="input-admin-type" onChange={this.updateState} />
                </Label>
              </Col>
              <Col sm="1">
                <Label className="label-type">
                  Taille
                  <Input value={this.size_diameter} type="text" name="size" className="input-admin-type" onChange={this.updateState} />
                </Label>
              </Col>
              <Col sm="1">
                <Label for="choix_occasion" className="label-type">
                  Prix €
                  <Input value={this.price} type="text" name="price" className="input-admin-type" onChange={this.updateState} />
                </Label>
              </Col>
              <Col sm="3">
                <Label check className="label-type">
                  Description
                  <Input value={this.info} type="text" name="info" className="input-admin-type" onChange={this.updateState} />
                </Label>
              </Col>
              <Col sm="2">
                <Label check className="label-type">
                  Allergènes
                  <Input value={this.allerg} type="text" name="allerg" className="input-admin-type" onChange={this.updateState} />
                </Label>
              </Col>
              <Col sm="1">
                <Label check className="label-type" onChange={this.updateState}>
                  Disponibilité
                  <Input value={this.availability} type="checkbox" name="dispo" />
                  {' '}
                </Label>
              </Col>
              <Col sm="4">
                <Input type="file" name="file" id="exampleFile" onChange={this.updateState} />
              </Col>
            </Row>
            <Row>
              <Button type="submit" className="btn-ajout">Ajouter mon ingrédient</Button>
            </Row>
          </Container>
        </form>
      </div>
    );
  };
};

AddIngredients.propTypes = {
  updateState: PropTypes.shape({}).isRequired,
};

const mapStateToProps = state => ({
  dispatch: state.dispatch,
  selectedIngredient: state.ingredientCharacteristics,
});

const mapDispatchToProps = dispatch => ({
  updateState: ingredientType => dispatch(this.props.updateState(ingredientType)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddIngredients);
