import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Table, Label, Input, Form, FormGroup, Row, Col, Button,
} from 'reactstrap';
import axios from 'axios';
import PropTypes from 'prop-types';
import { toggleFormModify } from '../../../Actions/databaseActions/toggleFormNew';
import UploadPicsAddIngred from '../../UploadPicsAddIngred';
// import AlertAddIngredient from './AlertAddIngredient';
import '../../../Assets/Styles/Add_Ingredients.css';

class ModifyIngredient extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: {
        id: '',
        name: '',
        type: '',
        size: '',
        price: '',
        dispo: true,
        info: '',
        img: '',
        allerg: '',
        compatible: true,
        flavor: '',
        color: '',
      },
      fullList: [],
      fullAllerg: [],

    };
    this.handleClickCompatible = this.handleClickCompatible.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    const {
      displayIndexForm, ingredient, // arrays ingredients.compatible et ingredients.allergenes inherited from phil
    } = this.props;
    this.betaType = ingredient[displayIndexForm - 1];
  }

  componentWillMount() {
    this.setState({
      ingredients: {
        ...this.betaType,
      },
    });
    axios.get('http://localhost:5000/ingredients/name')
      .then((res) => {
        const fullListArray = res.data[0]; this.setState({ fullList: fullListArray });
      });
    // .catch(err => console.log(err.response.data));

    axios.get('http://localhost:5000/allergenes/name')
      .then((res) => {
        const fullAllergArray = res.data[0]; this.setState({ fullAllerg: fullAllergArray });
      });
  }


  handleClickCompatible = (compatibleID) => {
    if (this.betaType.compatible.indexOf(compatibleID >= 0)) {
      this.betaType.compatible.splice(0, 1, compatibleID);
    } else {
      this.betaType.compatible.push(compatibleID);
    }
    return this.betaType.compatible;
  }


  updateState = (e, ingredients) => {
    this.setState({
      ingredients: {
        ...ingredients,
        id: this.betaType.id,
        [e.target.name]: e.target.value,
      },
    });
  };


  // prevoir fetch la DB au submit pour avoir betaType correctement MAJ
  onSubmit = (e, ingredients) => {
    e.preventDefault();
    const modifiedIngredient = ingredients;
    axios.put(`http://localhost:5000/ingredients/${modifiedIngredient.id}/`, modifiedIngredient)
      .then(res => (res.data))
      .catch(err => (err.response.data));
  };


  createModifyForm = (ingredients, fullList, fullAllerg) => {
    const { toggleForm } = this.props;
    return (
      <div className="bodyIng">
        <title-admin>
          Modifier l’ingrédient
          {' '}
          {this.betaType.name}
        </title-admin>
        <Form>
          <Row form>
            <Col md={2}>
              <FormGroup>
                <Label>Name</Label>
                <Input type="text" name="name" onChange={e => this.updateState(e, ingredients)} placeholder={this.betaType.name} value={ingredients.name} />
              </FormGroup>
            </Col>
            <Col md={2}>
              <FormGroup>
                <Label>Type</Label>
                <Input type="select" name="type" onChange={e => this.updateState(e, ingredients)}>
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
                <Input type="text" name="size" onChange={e => this.updateState(e, ingredients)} placeholder={this.betaType.size} value={ingredients.size} />
              </FormGroup>
            </Col>
            <Col md={2}>
              <FormGroup>
                <Label>Price</Label>
                <Input type="text" name="price" onChange={e => this.updateState(e, ingredients)} placeholder={this.betaType.price} value={ingredients.price} />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label>Description</Label>
                <Input type="text" name="info" onChange={e => this.updateState(e, ingredients)} placeholder={this.betaType.info} value={ingredients.info} />
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
                <Input name="dispo" type="checkbox" value={this.betaType.dispo} onClick={() => this.setState({ [ingredients]: { dispo: !ingredients.dispo } })} id="dispoCheck" />
                <Label for="dispoCheck" check>Disponnibilité</Label>
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
                    {fullList.map(compatible => (
                      <td>
                        <Input
                          name="isCompatible"
                          type="checkbox"
                          defaultChecked={this.betaType.compatible.indexOf(compatible.name >= 0)} // inherited from phil
                          onChange={(this.handleClickCompatible(compatible.id))}
                        />
                        <Label check>{compatible.name}</Label>
                      </td>))}
                  </tr>
                </tbody>
              </Table>
            </Col>
            <Col md={5} className="col-size-checkbox">
              <Table className="table-add-ingred">
                <thead>
                  <tr>
                    <th className="title-label-list">Allergenes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    {fullAllerg.map(allergene => (
                      <td>
                        <Input
                          name="isCompatible"
                          type="checkbox"
                          defaultChecked={this.betaType.allerg.indexOf(allergene.name >= 0)}
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
            <Button color="primary" size="lg" onClick={e => toggleForm(false) && this.onSubmit(e, ingredients)}>Modifier</Button>
          </Row>
        </Form>
      </div>
    );
  }

  render() {
    const { ingredients, fullList, fullAllerg } = this.state;
    // return !this.state.fullList.length ? <div /> : (
    return (
      <div>
        {this.createModifyForm(ingredients, fullList, fullAllerg)}
      </div>
    );
    // );
  }
}


ModifyIngredient.propTypes = {
  ingredientCompatible: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  ingredientAllerg: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  fullListIngredient: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  ingredient: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  toggleForm: PropTypes.func.isRequired,
  displayIndexForm: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  selectedIngredient: state.ingredientCharacteristics,
  displaybeta: state.databaseDisplay.beta,
  displayIndexForm: state.databaseModifyFormIndex,
  cake: state.cakeBases,
  filling: state.cakeFillings,
  icing: state.cakeIcings,
  chessecakeFlavor: state.cheesecakeFlavors,
  macaronFlavor: state.macaronsFlavors,
  topping: state.cakeToppings,
  macaronShell: state.macaronsShells,
  cookie: state.cookiesBases,
  brownie: state.browniesBases,
});

const mapDispatchToProps = dispatch => ({
  toggleForm: show => dispatch(toggleFormModify(show)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ModifyIngredient);
