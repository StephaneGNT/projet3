import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Table, Label, Input, Form, FormGroup, Row, Col, Button,
} from 'reactstrap';
import axios from 'axios';
import PropTypes from 'prop-types';
import { toggleFormModify } from '../../../Actions/databaseActions/toggleFormNew';
import UploadPicsAddIngred from '../../UploadPicsAddIngred';
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
    const { ingredient } = this.props;
    this.inheritedIngredient = ingredient;
  }

  componentWillMount() {
    this.setState({
      ingredients: {
        ...this.inheritedIngredient,
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

  // prevoir this.setState ingredients.compatible
  handleClickCompatible = (compatibleID) => {
    if (this.inheritedIngredient.compatible.includes(compatibleID)) {
      this.inheritedIngredient.compatible.splice(0, compatibleID);
    } else {
      this.inheritedIngredient.compatible.push(compatibleID);
    }
    return this.inheritedIngredient.compatible;
  }

  // prevoir this.setState ingredients.allerg
  handleClickAllergene = (allergeneID) => {
    if (this.inheritedIngredient.allergenes.includes(allergeneID)) {
      this.inheritedIngredient.allergenes.splice(0, allergeneID);
    } else {
      this.inheritedIngredient.allergenes.push(allergeneID);
    }
    return this.inheritedIngredient.allergenes;
  }


  updateState = (e, ingredients) => {
    this.setState({
      ingredients: {
        ...ingredients,
        id: this.inheritedIngredient.id,
        [e.target.name]: e.target.value,
      },
    });
  };


  // prevoir fetch la DB au submit pour avoir inheritedIngredient correctement MAJ
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
          {this.inheritedIngredient.name}
        </title-admin>
        <Form>
          <Row form>
            <Col md={2}>
              <FormGroup>
                <Label>Name</Label>
                <Input type="text" name="name" onChange={e => this.updateState(e, ingredients)} placeholder={this.inheritedIngredient.name} value={ingredients.name} />
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
                <Input type="text" name="size" onChange={e => this.updateState(e, ingredients)} placeholder={this.inheritedIngredient.size} value={ingredients.size} />
              </FormGroup>
            </Col>
            <Col md={2}>
              <FormGroup>
                <Label>Price</Label>
                <Input type="text" name="price" onChange={e => this.updateState(e, ingredients)} placeholder={this.inheritedIngredient.price} value={ingredients.price} />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label>Description</Label>
                <Input type="text" name="info" onChange={e => this.updateState(e, ingredients)} placeholder={this.inheritedIngredient.description} value={ingredients.info} />
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
                <Input name="dispo" type="checkbox" value={this.inheritedIngredient.dispo} onClick={() => this.setState({ [ingredients]: { dispo: !ingredients.dispo } })} id="dispoCheck" />
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
                          defaultChecked={this.inheritedIngredient.compatible.includes(compatible.name)}
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
                          defaultChecked={this.inheritedIngredient.allergenes.includes(allergene.name)}
                          onChange={() => this.handleClickAllergene(allergene.id)}
                        />
                        <Label>{allergene.name}</Label>
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
  ingredient: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  reducerIngredients: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  ingredientCompatible: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  ingredientAllerg: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  fullListIngredient: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  toggleForm: PropTypes.func.isRequired,
  displayIndexForm: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  reducerIngredients: state.ingredientsReducer,
  selectedIngredient: state.ingredientCharacteristics,
  displaybeta: state.databaseDisplay.beta,
  displayIndexForm: state.databaseModifyFormIndex,
  cake: state.ingredients.filter(ing => ing.type === 'Base'),
  filling: state.ingredients.filter(ing => ing.type === 'Garniture'),
  icing: state.ingredients.filter(ing => ing.type === 'Glaçage'),
  chessecakeFlavor: state.ingredients.filter(ing => ing.type === 'Parfum'),
  macaronFlavor: state.ingredients.filter(ing => ing.type === 'Macaron'),
  topping: state.ingredients.filter(ing => ing.type === 'Toppings'),
  macaronShell: state.ingredients.filter(ing => ing.type === 'Coquille'),
  cookie: state.ingredients.filter(ing => ing.type === 'Base cookie'),
  brownie: state.ingredients.filter(ing => ing.type === 'Base brownie'),
});

const mapDispatchToProps = dispatch => ({
  toggleForm: show => dispatch(toggleFormModify(show)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ModifyIngredient);
