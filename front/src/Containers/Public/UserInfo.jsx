import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import {
  Container, Row, Col, FormGroup, Label, Input, FormFeedback,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Progressbar from './Progressbar';
import updateUserInfo from '../../Actions/orderActions/updateUserInfo';
import '../../Assets/Styles/UserInfo.css';

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
    const { updateUser } = this.props; updateUser(this.state);
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
    const mail = {
      client: {
        email: 'mdearmey@gmail.com',
        title: 'bonjour client',
        content: `Bonjour ${user.firstName} ${user.lastName}, votre commande a bien été prise en compte.
                Nous reviendrons vers vous rapidement pour vous confirmer sa validation.`
      },
      giluna: {
        email: 'mdearmey@gmail.com',
        title: 'Bonjour giluna',
        content: 'une nouvelle commande vient d’être générée sur le site',
      },
    };
    axios.post('/api/send/mail', mail).then(response => console.log(response.data));
  }

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

  handleClick = (event) => {
    const { user } = this.state;
    if (!user.firstName || !user.lastName || !this.mailRegex.test(user.email)
      || user.phone.length < 10) {
      this.setState({ inputAttempt: true });
      event.preventDefault();
    }
    if (user.birthday && !this.birthdateRegex.test(user.birthday)) {
      this.setState({ dobNotValid: true });
      event.preventDefault();
    }
    // else this.sendConfirmationEmails();
  }

  setWarning = (event) => {
    const { inputAttempt } = this.state;
    const warning = { borderColor: '#dc3545' };
    if (!this.state[event.target.name] && inputAttempt) return warning;
    return null;
  }


  render() {
    const {
      user, comment, giftcard, inputAttempt, dobNotValid
    } = this.state;
    const warning = { border: '3px solid', borderColor: '#dc3545' };
    return (
      <Container>
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
              <Input autoFocus type="text" name="firstName" id="firstName" placeholder="votre prénom" value={user.firstName} style={inputAttempt && !user.firstName ? warning : {}} onChange={e => this.setUserState(e)} onKeyPress={this.enterForm} />
            </FormGroup>
          </Col>
          <Col sm="12" md="4">
            <FormGroup>
              <Label for="lastName">
                <span className="text-danger">* </span>
                Nom
              </Label>
              <Input type="text" name="lastName" id="lastName" placeholder="votre nom de famille" value={user.lastName} style={inputAttempt && !user.lastName ? warning : {}} onChange={e => this.setUserState(e)} onKeyPress={this.enterForm} />
            </FormGroup>
          </Col>
          <Col sm="12" md="4">
            <FormGroup>
              <Label for="birthdate">
                Date de naissance
              </Label>
              <Input invalid={(user.birthday && this.invalidBirthdate(user.birthday)) || dobNotValid} type="text" name="birthday" id="birthday" placeholder="date de naissance – ex: 30/09/1982" value={user.birthday} onChange={e => this.setUserState(e)} onKeyPress={this.enterForm} />
              <FormFeedback>date de naissance non valide (format requis: JJ/MM/AAAA)</FormFeedback>
              {!this.birthdateRegex.test(user.birthday) && user.birthday.length <= 9 ? (
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
              <Input invalid={this.validEmail(user.email)} type="email" name="email" id="email" placeholder="votre adresse mail" value={user.email} style={inputAttempt && !this.mailRegex.test(user.email) ? warning : {}} onChange={e => this.setUserState(e)} onKeyPress={this.enterForm} />
              <FormFeedback>adresse mail non valide</FormFeedback>
            </FormGroup>
          </Col>
          <Col sm="12" md="6">
            <FormGroup>
              <Label for="telephone">
                <span className="text-danger">* </span>
                Téléphone
              </Label>
              <Input type="text" name="phone" id="phone" placeholder="votre numéro de téléphone" value={user.phone} style={inputAttempt && user.phone.length < 10 ? warning : {}} onChange={e => this.setUserState(e)} onKeyPress={this.enterForm} />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col sm="12" md="6">
            <FormGroup>
              <Label>
                Commentaire à Giluna
              </Label>
              <Input type="textarea" id="comment" value={comment} onChange={e => this.updateState(e)} onKeyPress={this.enterForm} />
            </FormGroup>
          </Col>
          <Col sm="12" md="6">
            <FormGroup>
              <Label>
                Ajoutez une carte à votre Commande
              </Label>
              <Input type="textarea" id="giftcard" value={giftcard} onChange={e => this.updateState(e)} onKeyPress={this.enterForm} />
            </FormGroup>
          </Col>
        </Row>
        <Row className="back-btn-userinfo">
          <Link disabled to={`${process.env.PUBLIC_URL}/mycake/orderConfirmation`}>
            <button type="button" onClick={e => this.handleClick(e)} className="btn-confirmation">envoyer la Commande</button>
          </Link>
        </Row>
        <img src={ require(`../../../../back/tmp/${this.props.customization.photo1}`) } alt="customer decoration" />
        {/* <img src={ require(`../../Assets/Temp/${this.props.customization.photo1}`) } alt="customer decoration" /> */}
      </Container>
    );
  }
}
UserInfo.propTypes = {
  updateUser: PropTypes.func.isRequired,
  customer: PropTypes.shape({}).isRequired,
  comment: PropTypes.string.isRequired,
  giftcard: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  customer: state.customerInfo,
  customization: state.customizationCustomer,
  comment: state.cakeCharacteristics.comment,
});

const mapDispatchToProps = dispatch => ({
  updateUser: data => dispatch(updateUserInfo(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);
