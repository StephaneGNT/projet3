import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Container, Row, Col, FormGroup, Label, Input, FormFeedback,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import axios from 'axios';
import Progressbar from '../Progressbar';
import {
  saveCustomer, getIngredientsID, saveCake, populateCakeIngrJT,
  saveCustomWishes, saveOrder, populateClientOrderJT,
} from './final_order_functions';
import updateUserInfo from '../../../Actions/orderActions/updateUserInfo';
import '../../../Assets/Styles/UserInfo.css';

import carte from '../../../Assets/Images/selectionGallerie/IMG_carte.jpg';

class UserInfo extends Component {
  constructor(props) {
    super(props);
    const { customer, giftcard, comment } = this.props;
    this.mailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    this.birthdateRegex = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
    this.state = {
      user: {
        firstName: customer.firstName,
        lastName: customer.lastName,
        birthday: customer.birthdate,
        email: customer.email,
        phone: customer.telephone,
      },
      comment,
      giftcard,
      inputAttempt: false,
      dobNotValid: false,
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  componentWillUnmount() {
    const { updateUser } = this.props;
    updateUser(this.state);
  }

  updateState = (evt) => {
    evt.persist();
    this.setState(prevState => ({
      prevState, [evt.target.id]: evt.target.value,
    }));
  }

  setUserState = (evt) => {
    evt.persist();
    const { user } = this.state;
    if (!user.birthdate) this.setState({ dobNotValid: false });
    this.setState(prevState => ({
      prevState,
      user: {
        ...prevState.user,
        [evt.target.id]: evt.target.value,
      },
    }));
  }

  validEmail = (mailState) => {
    if (mailState === '') return false;
    return !this.mailRegex.test(mailState);
  }

  sendConfirmationEmails = () => {
    const { user } = this.state;
    const mailClient = {
      from: 'sguinot86@gmail.com',
      to: user.email,
      title: 'Confirmation de commande Giluna',
      text: `Bonjour ${user.firstname} ${user.lastname}, votre commande a bien été prise en compte.
              Nous reviendrons vers vous rapidement pour vous confirmer sa validation.`,
      html: <p>
      Bonjour
      $
        {user.firstName}
      $
        {user.lastName}
      ,votre commande a bien été prise en compte.
      Nous reviendrons vers vous rapidement pour vous confirmer sa validation.
      </p>,
    };
    axios.post('/api/send/mail', mailClient);
    const gilunaMail = {
      from: 'sguinot86@gmail.com',
      to: 'sguinot86@gmail.com',
      title: 'Nouvelle commande',
      text: 'Bonjour. Une nouvelle commande vient d’être réalisée sur le site. Allez voir sur votre espace admin pour y trouver la commande.',
      html: <p>Bonjour. Une nouvelle commande vient d’être réalisée sur le site. Allez voir sur votre espace admin pour y trouver la commande.</p>,
    };
    axios.post('/api/send/mail', gilunaMail);
  };

  invalidBirthdate = (DOBstate) => {
    if (DOBstate === '') return false;
    if (!this.birthdateRegex.test(DOBstate) && DOBstate.length > 9) return true;
  }

  enterForm = (e) => {
    if (e.key === 'Enter') {
      this.handleClick(e);
    }
    return <Link disabled to={`${process.env.PUBLIC_URL}/mycake/orderConfirmation`} />;
  }

  sendOrder = async (order, customer, cake, customWishes) => {
    const { comment, giftcard } = this.state;
    const { history } = this.props;

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

    // Sauvegarde de la commande et récupération de son id
    const orderID = await saveOrder(customerID, cakeID, order, comment, giftcard);

    // Remplissage de la table de jonction client / order
    populateClientOrderJT(customerID, orderID);

    if (orderID > 0) {
      this.sendConfirmationEmails();
      history.push(`${process.env.PUBLIC_URL}/mycake/orderConfirmation`);
      history.push({
        pathname: `${process.env.PUBLIC_URL}/mycake/orderConfirmation`,
        state: { orderID },
      });
    }
  }

  handleClick = () => {
    const { order, cake, customWishes } = this.props;
    const { user } = this.state;
    if (!user.firstName || !user.lastName || !user.email || !user.phone || user.phone.length < 8) {
      this.setState({ inputAttempt: true });
    } else {
      if (user.birthday.length > 0 && !this.birthdateRegex.test(user.birthday)) {
        this.setState({ dobNotValid: true });
      }
      else this.sendOrder(order, user, cake, customWishes);
    }
  };

  setWarning = (event) => {
    const { inputAttempt } = this.state;
    const warning = { borderColor: '#dc3545' };
    if (!this.state[event.target.name] && inputAttempt) return warning;
    return null;
  }


  render() {
    const {
      user, comment, giftcard, inputAttempt, dobNotValid,
    } = this.state;
    const warning = { border: '3px solid', borderColor: '#dc3545' };
    return (
      <Container style={{ backgroundColor: 'white' }}>
        <Row className="text-center">
          <Progressbar />
        </Row>
        <Row className="justify-content-around" style={{ paddingTop: '5vh' }}>
          <Col xs="12" className="alert">
            {
              inputAttempt ? (
                <div>
                  Veuillez renseigner les champs obligatoires* avant d’envoyer la commande
                </div>
              ) : <div />
            }
          </Col>
          <Col sm="12" md="4">
            <FormGroup>
              <Label for="firstName">
                <span className="text-danger">* </span>
                Prénom
              </Label>
              <Input
                autoFocus
                type="text"
                name="firstName"
                id="firstName"

                value={user.firstName}
                style={inputAttempt && !user.firstName ? warning : {}}
                onChange={e => this.setUserState(e)}
                onKeyPress={this.enterForm}
              />
            </FormGroup>
          </Col>
          <Col sm="12" md="4">
            <FormGroup>
              <Label for="lastName">
                <span className="text-danger">* </span>
                Nom
              </Label>
              <Input
                type="text"
                name="lastName"
                id="lastName"

                value={user.lastName}
                style={inputAttempt && !user.lastName ? warning : {}}
                onChange={e => this.setUserState(e)}
                onKeyPress={this.enterForm}
              />
            </FormGroup>
          </Col>
          <Col sm="12" md="4">
            <FormGroup>
              <Label for="birthdate">
                Date d’anniversaire
              </Label>
              <Input
                invalid={(user.birthday && this.invalidBirthdate(user.birthday)) || dobNotValid}
                type="text"
                name="birthday"
                id="birthday"

                value={user.birthday}
                onChange={e => this.setUserState(e)}
                onKeyPress={this.enterForm}
              />
              <FormFeedback>date de naissance non valide (format requis: JJ/MM/AAAA)</FormFeedback>
              {!this.birthdateRegex.test(user.birthday)
               && user.birthday && user.birthday.length <= 9 ? (
                 <div className="invalidDOB">
                   <p>Format: JJ/MM/AAAA</p>
                 </div>
                ) : <div />
              }
            </FormGroup>
          </Col>
        </Row>
        <Row className="justify-content-around">
          <Col sm="12" md="6">
            <FormGroup>
              <Label for="email">
                <span className="text-danger">* </span>
                E-mail
              </Label>
              <Input
                invalid={this.validEmail(user.email)}
                type="email"
                name="email"
                id="email"

                value={user.email}
                style={inputAttempt && !this.mailRegex.test(user.email) ? warning : {}}
                onChange={e => this.setUserState(e)}
                onKeyPress={this.enterForm}
              />
              <FormFeedback>adresse mail non valide</FormFeedback>
            </FormGroup>
          </Col>
          <Col sm="12" md="6">
            <FormGroup>
              <Label for="telephone">
                <span className="text-danger">* </span>
                Téléphone
              </Label>
              <Input type="text" name="phone" id="phone" value={user.phone} style={inputAttempt && user.phone.length < 10 ? warning : {}} onChange={e => this.setUserState(e)} onKeyPress={this.enterForm} />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col sm="12" md="12">
            <FormGroup>
              <Label>
                Commentaire à Giluna
              </Label>
              <Input type="textarea" id="comment" value={comment} onChange={e => this.updateState(e)} onKeyPress={this.enterForm} />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col sm="3" md="3">
            <img src={carte} className="logo" alt="giluna-logo" />
          </Col>
          <Col sm="6" md="6">
            <FormGroup>
              <Label>
                Ajoutez une carte message à votre Commande
              </Label>
              <Input type="textarea" id="giftcard" placeholder="Ecrivez votre message personnel ici" value={giftcard} onChange={e => this.updateState(e)} onKeyPress={this.enterForm} />
            </FormGroup>
          </Col>

        </Row>
        <Row>
          <Col sm="11" md="8">
            <FormGroup>
              <Label>
                Votre message, soigneusement écrit sur une carte de qualité,
                sera livré avec votre gâteau.
              </Label>
            </FormGroup>
          </Col>
        </Row>

        <Row className="back-btn-userinfo">
          <button
            type="button"
            onClick={() => this.handleClick()}
            className="btn-confirmation"
          >
            Envoyer la commande
          </button>
        </Row>
        {/* <img src={ require(`../../../../../back/tmp/${this.props.photo1}`) } alt="customer decoration" /> */}
      </Container>
    );
  }
}
UserInfo.propTypes = {
  updateUser: PropTypes.func.isRequired,
  customer: PropTypes.shape({}).isRequired,
  order: PropTypes.shape({}).isRequired,
  comment: PropTypes.string.isRequired,
  giftcard: PropTypes.string.isRequired,
  customWishes: PropTypes.shape({}).isRequired,
  cake: PropTypes.shape({}).isRequired,
};

const mapStateToProps = state => ({
  customer: state.customerInfo,
  customWishes: state.customizationCustomer,
  comment: state.cakeCharacteristics.comment,
  cake: state.cakeCharacteristics,
  order: state.orderCharacteristics,
});

const mapDispatchToProps = dispatch => ({
  updateUser: data => dispatch(updateUserInfo(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);
