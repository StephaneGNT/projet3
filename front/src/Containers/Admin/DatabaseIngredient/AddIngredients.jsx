import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import {
  Label, Input, Row, Col, Button, Form, FormGroup, Table,
} from 'reactstrap';
// import AlertAddIngredient from './AlertAddIngredient';
import PropTypes from 'prop-types';
import { toggleFormNew } from '../../../Actions/databaseActions/toggleFormNew';
import UploadPicsAddIngred from '../../UploadPicsAddIngred';
import '../../../Assets/Styles/Add_Ingredients.css';

class AddIngredients extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      size_diameter: 0,
      nb_persons: 0,
      price: 0,
      availability: true,
      info: '',
      image_id: 0,
    };
    this.onSubmit = this.onSubmit.bind(this);
    // this.updateState = this.onChange.bind(this);
    this.urlParams = this.state;
  }

  updateState = (e) => {
    switch (e.target.value) {
      case 'Base':
        this.setState({ type: 'cake_bases' });
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

  onSubmit = async (e) => {
    e.preventDefault();
    const {
      name, size_diameter, nb_persons, price, availability, info, image_id,
    } = this.state;

    const newIngredient = {
      name,
      size_diameter,
      nb_persons,
      price,
      availability,
      info,
      image_id,
    };

    // Enregistrement du nouvel ingrédient
    const newIngredientID = await axios.post('/api/ingredients/new', newIngredient)
      .then(res => { return res.data.insertId })
      .catch(err => console.log(err.response.data));

    // Enregistrement des ingrédients compatibles
    this.compatibleIngList.map((ingID) => {
      const formData = {
        id_ingred1: newIngredientID,
        id_ingred2: ingID,
      };
      axios.post('/api/jtingredients', formData, (req, res) => {
        if (res.status === 200) return ('Ingrédients compatibles enregistrés !');
        else return ('Error');
      });
    });
  }

  toggleIngredient = (ingredientID) => {
    const index = this.compatibleIngList.indexOf(ingredientID);
    if (index >= 0) this.compatibleIngList.splice(index, 1);
    else this.compatibleIngList.push(ingredientID);
  }

  toggleAllergene = (allergeneID) => {
    const index = this.allergeneIngList.indexOf(allergeneID);
    if (index >= 0) this.allergeneIngList.splice(index, 1);
    else this.allergeneIngList.push(allergeneID);
  }

  render() {
    const { toggleForm } = this.props;
    return (
      <div className="bodyIng">
        <title-admin>Décrivez votre nouvel ingrédient</title-admin>
        <Form>
          <Row form>
            <Col md={2}>
              <FormGroup>
                <Label>Name</Label>
                <Input type="text" name="name" onChange={this.handleChange} />
              </FormGroup>
            </Col>
            <Col md={2}>
              <FormGroup>
                <Label>Type</Label>
                <Input type="select" name="type" onChange={this.handleChange}>
                  <option />
                  <option>Base</option>
                  <option>Filling</option>
                  <option>Icing</option>
                  <option>Topping</option>
                  <option>Macaron</option>
                  <option>Cookie</option>
                  <option>Brownie</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md={2}>
              <FormGroup>
                <Label>Size</Label>
                <Input type="text" name="size" onChange={this.handleChange} />
              </FormGroup>
            </Col>
            <Col md={2}>
              <FormGroup>
                <Label>Price</Label>
                <Input type="text" name="price" onChange={this.handleChange} />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label>Description</Label>
                <Input type="text" name="description" />
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col md={2}>
              <FormGroup>
                <Label>Flavor</Label>
                <Input type="text" name="flavor" />
              </FormGroup>
            </Col>
            <Col md={2}>
              <FormGroup>
                <Label>Color</Label>
                <Input type="text" name="color" />
              </FormGroup>
            </Col>

            <Col md={4}>
              <UploadPicsAddIngred />
            </Col>
            <Col md={2}>
              <FormGroup check>
                <Input name="dispo" defaultChecked type="checkbox" onClick={() => this.setState({ dispo: !this.state.dispo })} id="dispoCheck" />
                <Label for="dispoCheck">Disponnible ?</Label>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={5} className="col-size-checkbox">
              <Table className="table-add-ingred">
                <thead>
                  <tr>
                    <th className="title-label-list">Compatibilités</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    {this.state.ingredList.map(ingredient => (
                      <td>
                        <Input
                          name="isCompatible"
                          type="checkbox"
                          onClick={() => this.toggleIngredient(ingredient.id)}
                        />
                        <Label check>{ingredient.name}</Label>
                      </td>))}
                  </tr>
                </tbody>
              </Table>
            </Col>
            <Col md={5} className="col-size-checkbox">
              <Table className="table-add-ingred">
                <thead>
                  <tr>
                    <th className="title-label-list">Allergènes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    {this.state.allergList.map(allergene => (
                      <td>
                        <Input
                          name="allergene"
                          type="checkbox"
                          onClick={() => this.toggleAllergene(allergene.id)}
                        />
                        <Label check>{allergene.name}</Label>
                      </td>))}
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
          <br />
          <Row>
            <Button color="secondary" size="lg" onClick={() => toggleForm(false)}>Annuler</Button>
            <Button color="primary" size="lg" onClick={() => this.handleSubmit()}>Ajouter</Button>
          </Row>
        </Form>
      </div>
    );
  };
};

AddIngredients.propTypes = {
  updateState: PropTypes.shape({}).isRequired,
  toggleForm: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  dispatch: state.dispatch,
  selectedIngredient: state.ingredientCharacteristics,
});

const mapDispatchToProps = dispatch => ({
  updateState: ingredientType => dispatch(this.props.updateState(ingredientType)),
  toggleForm: display => dispatch(toggleFormNew(display)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddIngredients);
