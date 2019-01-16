import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Label, Input, Container, Row, Col, Button,
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
      compatible: '',
    };
    this.onSubmit = this.onSubmit.bind(this);
    const {
      displayIndexForm, ingredient, compatibleIngredient, allerg
    } = this.props;
    this.betaType = ingredient[displayIndexForm - 1];
  }

  componentDidMount() {
    console.log('didmount:', this.betaType);
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

  // prevoir  fetch la DB au submit pour avoir betaType correctement MAJ
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
    return (
      <div className="bodyIng">
        <form onSubmit={this.onSubmit}>
          <Container>
            <div className="ligne-titre">
              <Row>
                <Col sm="5">
                  <h3 className="mt-3">
                    Modifier l’ingrédient
                    {' '}
                    {betaType.name}
                  </h3>
                </Col>
              </Row>
            </div>
            <Row className="les-row">
              <Col sm="2">
                <Label className="label-type">
                  Type d’ingrédient
                  <Input type="select" name="type" className="input-admin-type" onChange={this.updateState}>
                    <option />
                    <option onClick={() => this.updateState('Base')}>Base</option>
                    <option onClick={() => this.updateState('Garniture')}>Garniture</option>
                    <option onClick={() => this.updateState('Glaçage')}>Glaçage</option>
                    <option onClick={() => this.updateState('Toppings')}>Toppings</option>
                  </Input>
                </Label>
              </Col>
              <Col sm="2">
                <Label className="label-type">
                  Nom
                  <Input type="text" name="name" className="input-admin-type" onChange={this.updateState} placeholder={betaType.name} value={this.state.name} />
                </Label>
              </Col>
              <Col sm="1">
                <Label className="label-type">
                  Taille
                  <Input type="text" name="size" className="input-admin-type" onChange={this.updateState} placeholder={betaType.size} value={this.state.size} />
                </Label>
              </Col>
              <Col sm="1">
                <Label for="choix_occasion" className="label-type">
                  Prix €
                  <Input type="text" name="price" className="input-admin-type" onChange={this.updateState} placeholder={betaType.price} value={this.state.price} />
                </Label>
              </Col>
              <Col sm="3">
                <Label check className="label-type">
                  Description
                  <Input type="text" name="info" className="input-admin-type" onChange={this.updateState} placeholder={betaType.info} value={this.state.info} />
                </Label>
              </Col>
              <Col sm="2">
                <Label check className="label-type">
                  Allergènes
                  <Input type="text" name="allerg" className="input-admin-type" onChange={this.updateState} placeholder={betaType.allerg} value={this.state.allerg} />
                </Label>
              </Col>
              <Col sm="1">
                <Label check className="label-type" onChange={this.updateState}>
                  Disponibilité
                  <Input type="checkbox" name="dispo" value={betaType.dispo} value={this.state.dispo} />
                  {' '}
                </Label>
              </Col>
              <Col sm="4">
                <Input type="file" name="file" id="exampleFile" onChange={this.updateState} />
              </Col>
            </Row>
            <Row>
              <Button className="btn-ajout" onClick={() => toggleForm(false)}>Annuler</Button>
              <Button type="submit" className="btn-ajout">Modifier mon ingrédient</Button>
            </Row>
          </Container>
        </form>
      </div>
    );
  }

  render() {
    return (

      <div>
        {this.createModifyForm()}
      </div>
    );
  }
}

ModifyIngredient.propTypes = {
  compatibleIngredient: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  allerg: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
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
