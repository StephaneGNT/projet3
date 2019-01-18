import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Table, Label, Input, Form, FormGroup, Row, Col, Button,
} from 'reactstrap';
import axios from 'axios';
import PropTypes from 'prop-types';
import { toggleFormModify } from '../../../Actions/databaseActions/toggleFormNew';
// import AlertAddIngredient from './AlertAddIngredient';
import '../../../Assets/Styles/Add_Ingredients.css';

class ModifyIngredient extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
      fullList: [],
      fullAllerg: [],

    };
    this.onSubmit = this.onSubmit.bind(this);
    const {
      displayIndexForm, ingredient, // arrays ingredients.compatible et ingredients.allergenes inherited from phil
    } = this.props;
    this.betaType = ingredient[displayIndexForm - 1];
  }

  componentWillMount() {
    axios.get('http://localhost:5000/ingredients/name')
      .then((res) => { const fullListArray = res.data[0]; this.setState({ fullList: fullListArray }); })
      .catch(err => console.log(err.response.data));

    axios.get('http://localhost:5000/allergenes/name')
      .then((res) => { const fullAllergArray = res.data[0]; this.setState({ fullAllerg: fullAllergArray }); });
    // axios.get table de jt_compatible => return fullIngredientCompat = [res]
  }

  componentDidUpdate() {
    console.log('didupdate:', this.state);
  }

  updateState = (e) => {
    switch (e.target.placeholder) {
      case 'Base':
        this.setState({ type: 'Base' });
        break;
      case 'Garniture':
        this.setState({ type: 'Garniture' });
        break;
      case 'Glaçage':
        this.setState({ type: 'Glaçage' });
        break;
      case 'Toppings':
        this.setState({ type: 'Toppings' });
        break;
      default:
        this.setState({
          ...this.betaType,
          [e.target.name]: e.target.value,
        });
    }
  };

  // prevoir fetch la DB au submit pour avoir betaType correctement MAJ
  onSubmit = (e) => {
    e.preventDefault();
    const modifiedIngredient = this.state;
    axios.put(`http://localhost:5000/ingredients/${modifiedIngredient.id}/`, modifiedIngredient)
      .then(res => console.log(res.data))
      .catch(err => console.log(err.response.data));
  };


  createModifyForm = () => {
    const {
      toggleForm, displayIndexForm, displaybeta, cake, cookie, topping, filling,
      icing, macaronFlavor, macaronShell, chessecakeFlavor,
    } = this.props;
    let betaType;
    // let checkCompatible = ingredient.compatible.indexOf(ingredient.name >)
    switch (displaybeta) {
      case ('Base cookie'): betaType = cookie[displayIndexForm - 1]; break;
      case ('Toppings'): betaType = topping[displayIndexForm - 1]; break;
      case ('Garniture'): betaType = filling[displayIndexForm - 1]; break;
      case ('Glaçage'): betaType = icing[displayIndexForm - 1]; break;
      case ('Macaron'): betaType = macaronFlavor[displayIndexForm - 1]; break;
      case ('Coquille'): betaType = macaronShell[displayIndexForm - 1]; break;
      case ('Parfum'): betaType = chessecakeFlavor[displayIndexForm - 1]; break;
      default: betaType = cake[displayIndexForm - 1];
    } // this.state.defaultIngredient = betaType / for submitting default state, (and updated state)
    console.log('render:', this.state.fullList);
    return (
      <div className="bodyIng">
        <h3>
          Modifier l’ingrédient
          {' '}
          {betaType.name}
        </h3>
        <Form>
          <Row form>
            <Col md={2}>
              <FormGroup>
                <Label>Name</Label>
                <Input type="text" name="name" onChange={this.updateState} placeholder={betaType.name} value={this.state.name} />
              </FormGroup>
            </Col>
            <Col md={2}>
              <FormGroup>
                <Label>Type</Label>
                <Input type="select" name="type" onChange={this.updateState}>
                  <option />
                  <option onClick={() => this.updateState('Base')}>Base</option>
                  <option onClick={() => this.updateState('Garniture')}>Filling</option>
                  <option onClick={() => this.updateState('Glaçage')}>Icing</option>
                  <option onClick={() => this.updateState('Toppings')}>Topping</option>
                  <option onClick={() => this.updateState('Macaron')}>Macaron</option>
                  <option onClick={() => this.updateState('Cookie')}>Cookie</option>
                  <option onClick={() => this.updateState('Brownie')}>Brownie</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md={2}>
              <FormGroup>
                <Label>Size</Label>
                <Input type="text" name="size" onChange={this.updateState} placeholder={betaType.size} value={this.state.size} />
              </FormGroup>
            </Col>
            <Col md={2}>
              <FormGroup>
                <Label>Price</Label>
                <Input type="text" name="price" onChange={this.updateState} placeholder={betaType.price} value={this.state.price} />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label>Description</Label>
                <Input type="text" name="description" onChange={this.updateState} placeholder={betaType.info} value={this.state.info} />
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
              <FormGroup>
                <Label for="listCompat">Compatibilité</Label>
                <Col md={5} className="col-size-checkbox">
                  <Table className="table-add-ingred">
                    <thead>
                      <tr>
                        <th className="title-label-list">Compatibilités</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        {this.state.fullList.map(compatible => (
                          <td>
                            <Input
                              name="isCompatible"
                              type="checkbox"
                              defaultChecked={betaType.compatible}
                            />
                            <Label check>{compatible.name}</Label>
                          </td>))}
                      </tr>
                    </tbody>
                  </Table>
                </Col>
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="listCompat">Allergenes</Label>
                <Col md={5} className="col-size-checkbox">
                  <Table className="table-add-ingred">
                    <thead>
                      <tr>
                        <th className="title-label-list">Allergenes</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        {this.state.fullAllerg.map(allergene => (
                          <td>
                            <Input
                              name="isCompatible"
                              type="checkbox"
                              
                            />
                            <Label check>{allergene.name}</Label>
                          </td>))}
                      </tr>
                    </tbody>
                  </Table>
                </Col>
              </FormGroup>
            </Col>
            <Col md={2}>
              <FormGroup>
                <Label for="image">File</Label>
                <Input type="file" name="file" id="image" />
              </FormGroup>
            </Col>
            <Col md={2}>
              <FormGroup check>
                <Input name="dispo" type="checkbox" value={betaType.dispo} onClick={() => this.setState({ dispo: !this.state.dispo })} id="dispoCheck" />
                <Label for="dispoCheck" check>Disponnibilité</Label>
              </FormGroup>
            </Col>

          </Row>
          <Button className="btn-ajout" onClick={() => toggleForm(false)}>Annuler</Button>
          <Button color="primary" onClick={this.onSubmit}>Modifier</Button>
        </Form>
      </div>
    );
  }

  render() {
    return !this.state.fullList.length ? <div /> : (
      <div>
        {this.createModifyForm()}
      </div>
    );
  }
}


ModifyIngredient.propTypes = {
  ingredientCompatible: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  ingredientAllerg: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  fullListIngredient: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  ingredient: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  toggleForm: PropTypes.func.isRequired,
  displaybeta: PropTypes.string.isRequired,
  displayIndexForm: PropTypes.number.isRequired,
  cake: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  cookie: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  topping: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  filling: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  icing: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  macaronFlavor: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  macaronShell: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  chessecakeFlavor: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
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
  toggleForm: show => dispatch(toggleFormModify(show))
});
// const mapDispatchToProps = dispatch => ({
//   addNewIngredient: ingredientType => dispatch(this.updateState(ingredientType)),
// });

export default connect(mapStateToProps, mapDispatchToProps)(ModifyIngredient);
