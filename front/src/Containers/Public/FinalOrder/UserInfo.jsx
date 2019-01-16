import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import axios from 'axios';
import {
  Container, Row, Col, FormGroup, Label, Input, FormFeedback,
} from 'reactstrap';
import Progressbar from '../Progressbar';
import {
  saveCustomer, getIngredientsID, saveCake, populateCakeIngrJT, saveCustomWishes, saveOrder,
} from './final_order_functions';

class UserInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user:{
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        birthday: '',
      },
      comment: '',
      giftcard: '',
    };
  }

  updateState = (e) => {
    switch (e.target.id) {
      case 'firstName':
        this.setState({ firstName: e.target.value });
        break;
      case 'lastName':
        this.setState({ lastName: e.target.value });
        break;
      case 'email':
        this.setState({ email: e.target.value });
        break;
      case 'phone':
        this.setState({ phone: e.target.value });
        break;
      case 'birthday':
        this.setState({ birthday: e.target.value });
        break;
      default:
        return null;
    }
    return null;
  }

  validEmail = (mailState) => {
    const mailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (mailState === '') return false;
    return !mailRegex.test(mailState);
  }

  activateButton = () => {
    const {
      email, firstName, lastName, phone,
    } = this.state;
    if (firstName.length > 1
        && lastName.length > 1
        && phone.length >= 10
        && this.validEmail(email) === false) return false;
    return true;
  }

  sendOrder = async (order, customer, cake, customWishes) => {
    console.log("order, user, cake", order, customer, cake);
    // Création du nouveau user et récupération de son id
    const customerID = await saveCustomer(customer);

    // Récupération de l'ensemble des ID des ingrédients du cake, sous forme d'array
    const ingredientsIDList = await getIngredientsID(cake);

    // Création du nouveau custom wishes et récupération de son id
    const customWishesID = await saveCustomWishes(customWishes);

    // Création du gâteau et récupération de son id
    const cakeID = await saveCake(cake, customWishesID);

    // Remplissage de la table de jonction gâteau / ingrédient
    populateCakeIngrJT(cakeID, ingredientsIDList);

    // Sauvegarde de la commande
    saveOrder(customerID, cakeID, order);
  }

  render() {
    const {
      user,
    } = this.state;
    const { order, cake, customWishes } = this.props;
    return (
      <Container>
        <Row className="text-center">
          <Progressbar />
        </Row>
        <Row className="justify-content-around" style={{ paddingTop: '15vh' }}>
          <Col sm="10" md="4">
            <FormGroup>
              <Label for="firstName">
                <span className="text-danger">* </span>
                Prénom
              </Label>
              <Input type="text" name="firstName" id="firstName" placeholder="votre prénom" value={firstName} onChange={e => this.updateState(e)} />
            </FormGroup>
          </Col>
          <Col sm="10" md="4">
            <FormGroup>
              <Label for="lastName">
                <span className="text-danger">* </span>
                Nom
              </Label>
              <Input type="text" name="lastName" id="lastName" placeholder="votre nom de famille" value={lastName} onChange={e => this.updateState(e)} />
            </FormGroup>
          </Col>
          <Col sm="10" md="3">
            <FormGroup>
              <Label for="birthday">
                Date de naissance
              </Label>
              <Input type="text" name="birthday" id="birthday" placeholder="votre date de naissance" value={birthday} onChange={e => this.updateState(e)} />
            </FormGroup>
          </Col>
        </Row>
        <Row className="justify-content-around">
          <Col sm="10" md="6">
            <FormGroup>
              <Label for="email">
                <span className="text-danger">* </span>
                E-mail
              </Label>
              <Input invalid={this.validEmail(email)} type="email" name="email" id="email" placeholder="votre adresse mail" value={email} onChange={e => this.updateState(e)} />
              <FormFeedback>adresse mail non valide</FormFeedback>
            </FormGroup>
            <FormGroup>
              <Label>
                Commentaire à Giluna
              </Label>
              <Input type="textarea" id="comment" value={comment} onChange={e => this.updateState(e)} />
            </FormGroup>
          </Col>
          <Col sm="10" md="5">
            <FormGroup>
              <Label for="phone">
                <span className="text-danger">* </span>
                Téléphone
              </Label>
              <Input type="text" name="phone" id="phone" placeholder="votre numéro de téléphone" value={phone} onChange={e => this.updateState(e)} />
            </FormGroup>
            <FormGroup>
              <Label>
                Ajoutez une carte à votre Commande
              </Label>
              <Input type="textarea" id="giftcard" value={giftcard} onChange={e => this.updateState(e)} />
            </FormGroup>
          </Col>
        </Row>
        <Row className="back-btn-userinfo">
          <button
            type="button"
            className="btn-confirmation"
            disabled={this.activateButton()}
            onClick={() => this.sendOrder(order, user, cake, customWishes)}
          >
            Envoyer la commande
          </button>
        </Row>
      </Container>
    );
  }
}

UserInfo.propTypes = {
  cake: PropTypes.shape({}).isRequired,
  order: PropTypes.shape({}).isRequired,
};

const mapStateToProps = state => ({
  cake: state.cakeCharacteristics,
  order: state.orderCharacteristics,
  customWishes: state.customizationCustomer,
});

export default connect(mapStateToProps, null)(UserInfo);
