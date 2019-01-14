import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Label, Input, Container, Row, Col, Button } from 'reactstrap';
import axios from 'axios';
import { toggleFormModify } from '../../../Actions/databaseActions/toggleFormNew';
// import AlertAddIngredient from './AlertAddIngredient';
import PropTypes from 'prop-types';
import '../../../Assets/Styles/Add_Ingredients.css';

class ModifyIngredient extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      type: '',
      size: '',
      price: 0,
      dispo: false,
      info: '',
      img: '',
      allerg: '',
      compatible: [],
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.urlParams = 'cake_bases';
  }

  updateState = (e) => {
    switch (e.target.placeholder) {
      case 'base':
        this.setState({ type: 'Base' });
        this.urlParams = 'cake_bases';
        break;
      case 'fourrage':
        this.setState({ type: 'fourrage' });
        this.urlParams = 'fillings';
        break;
      case 'glaçage':
        this.setState({ type: 'glaçage' });
        this.urlParams = 'icings';
        break;
      case 'decoration':
        this.setState({ type: 'decoration' });
        this.urlParams = 'topping';
        break;
      default:
        this.setState({ [e.target.name]: e.target.placeholder });
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

    // const url = `http://localhost:5000/ingredients/${this.urlParams}/new`;

    axios.post(`http://localhost:5000/ingredients/${this.urlParams}/new`, newIngredient)
      .then(res => console.log(res.data))
      .catch(err => console.log(err.response.data));
  };

  createModifyForm = () => {
    const { toggleForm, displayIndexForm, displaybeta, cake, cookie, topping, filling, icing, macaronFlavor, macaronShell, chessecakeFlavor } = this.props;
    let betaType = []
    switch (displaybeta) {
      case ('Base cookie'): betaType = cookie[displayIndexForm - 1]; break;
      case ('Toppings'): betaType = topping[displayIndexForm - 1]; break;
      case ('Garniture'): betaType = filling[displayIndexForm - 1]; break;
      case ('Glaçage'): betaType = icing[displayIndexForm - 1]; break;
      case ('Macaron'): betaType = macaronFlavor[displayIndexForm - 1]; break;
      case ('Coquille'): betaType = macaronShell[displayIndexForm - 1]; break;
      case ('Parfum'): betaType = chessecakeFlavor[displayIndexForm - 1]; break;
      default: betaType = cake[displayIndexForm - 1];
    }
    return <div className="bodyIng">
      <form onSubmit={this.onSubmit}>
        <Container>
          <div className="ligne-titre">
            <Row>
              <Col sm="5">
                <h3 className="mt-3">Modifier l'ingrédient {betaType.name}</h3>
              </Col>
            </Row>
          </div>
          <Row className="les-row">
            <Col sm="2">
              <Label className="label-type">
                Type d'ingrédient
                <Input type="select" name="type" className="input-admin-type" onChange={this.updateState}>
                  <option> </option>
                  <option onClick={() => this.updateState('base')}>Base</option>
                  <option onClick={() => this.updateState('fourrage')}>Fourrage</option>
                  <option onClick={() => this.updateState('glaçage')}>Glaçage</option>
                  <option onClick={() => this.updateState('decoration')}>Décoration</option>
                </Input>
              </Label>
            </Col>
            <Col sm="2">
              <Label className="label-type">
                Nom
                <Input type="text" name="name" className="input-admin-type" onChange={this.updateState} placeholder={betaType.name} />
              </Label>
            </Col>
            <Col sm="1">
              <Label className="label-type">
                Taille
                <Input type="text" name="size" className="input-admin-type" onChange={this.updateState} placeholder={betaType.size}/>
              </Label>
            </Col>
            <Col sm="1">
              <Label for="choix_occasion" className="label-type">
                Prix €
                <Input type="text" name="price" className="input-admin-type" onChange={this.updateState} placeholder={betaType.price}/>
              </Label>
            </Col>
            <Col sm="3">
              <Label check className="label-type">
                Description
                <Input type="text" name="info" className="input-admin-type" onChange={this.updateState} placeholder={betaType.info}/>
              </Label>
            </Col>
            <Col sm="2">
              <Label check className="label-type">
                Allergènes
                <Input type="text" name="allerg" className="input-admin-type" onChange={this.updateState} placeholder={betaType.allerg}/>
              </Label>
            </Col>
            <Col sm="1">
              <Label check className="label-type" onChange={this.updateState}>
                Disponibilité
                <Input type="checkbox" name="dispo" value={betaType.dispo}/>
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
  }

  render() {

    // const { displaybeta } = this.props;

    return (

      <div>
        {this.createModifyForm()}
      </div>
      // <div className="bodyIng">
      //   <form onSubmit={this.onSubmit}>
      //     <Container>
      //       <div className="ligne-titre">
      //         <Row>
      //           <Col sm="5">
      //             <h3 className="mt-3">Modifier l'ingrédient {this.props.ingredient[0].name}</h3>
      //           </Col>
      //         </Row>
      //       </div>
      //       <Row className="les-row">
      //         <Col sm="2">
      //           <Label className="label-type">
      //             Type d'ingrédient
      //             <Input type="select" name="type" className="input-admin-type" onChange={this.updateState}>
      //               <option> </option>
      //               <option onClick={() => this.updateState('base')}>Base</option>
      //               <option onClick={() => this.updateState('fourrage')}>Fourrage</option>
      //               <option onClick={() => this.updateState('glaçage')}>Glaçage</option>
      //               <option onClick={() => this.updateState('decoration')}>Décoration</option>
      //             </Input>
      //           </Label>
      //         </Col>
      //         <Col sm="2">
      //           <Label className="label-type">
      //             Nom
      //             <Input type="text" name="name" className="input-admin-type" onChange={this.updateState} placeholder={this.props.ingredient[0].name} />
      //           </Label>
      //         </Col>
      //         <Col sm="1">
      //           <Label className="label-type">
      //             Taille
      //             <Input type="text" name="size" className="input-admin-type" onChange={this.updateState} />
      //           </Label>
      //         </Col>
      //         <Col sm="1">
      //           <Label for="choix_occasion" className="label-type">
      //             Prix €
      //             <Input type="text" name="price" className="input-admin-type" onChange={this.updateState} />
      //           </Label>
      //         </Col>
      //         <Col sm="3">
      //           <Label check className="label-type">
      //             Description
      //             <Input type="text" name="info" className="input-admin-type" onChange={this.updateState} />
      //           </Label>
      //         </Col>
      //         <Col sm="2">
      //           <Label check className="label-type">
      //             Allergènes
      //             <Input type="text" name="allerg" className="input-admin-type" onChange={this.updateState} />
      //           </Label>
      //         </Col>
      //         <Col sm="1">
      //           <Label check className="label-type" onChange={this.updateState}>
      //             Disponibilité
      //             <Input type="checkbox" name="dispo" />
      //             {' '}
      //           </Label>
      //         </Col>
      //         <Col sm="4">
      //           <Input type="file" name="file" id="exampleFile" onChange={this.updateState} />
      //         </Col>
      //       </Row>
      //       <Row>
      //         <Button className="btn-ajout" onClick={() => toggleForm(false)}>Annuler</Button>
      //         <Button type="submit" className="btn-ajout">Modifier mon ingrédient</Button>
      //       </Row>
      //     </Container>
      //   </form>
      // </div>
    );
  };
};

ModifyIngredient.propTypes = {
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
