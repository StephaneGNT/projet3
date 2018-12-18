import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Container, Row, Col, FormGroup, Label, Input, FormFeedback,
} from 'reactstrap';
import NavArrowsLayout from './Navigation/NavArrowsLayout';
import Progressbar from './Progressbar';

class UserInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      telephone: '',
      birthdate: '',
      feedback: 'd-none',
    };
  }

  updateState = (e) => {
    switch (e.target.id) {
      case 'firstname':
        this.setState({ firstname: e.target.value });
        break;
      case 'lastname':
        this.setState({ lastname: e.target.value });
        break;
      case 'email':
        this.setState({ email: e.target.value });
        break;
      case 'telephone':
        this.setState({ telephone: e.target.value });
        break;
      case 'birthdate':
        this.setState({ birthdate: e.target.value });
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
      email, firstname, lastname, telephone,
    } = this.state;
    if (firstname.length > 1
        && lastname.length > 1
        && telephone.length >= 10
        && this.validEmail(email) === false) return false;
    return true;
  }

  render() {
    const {
      firstname, lastname, birthdate, telephone, email,
    } = this.state;
    return (
      <Container>
        <Row className="text-center">
          <Progressbar />
        </Row>
        <Row className="justify-content-around">
          <Col sm="10" md="4">
            <FormGroup>
              <Label for="firstname">
                <span className="text-danger">* </span>
                Prénom
              </Label>
              <Input type="text" name="firstname" id="firstname" placeholder="votre prénom" value={firstname} onChange={e => this.updateState(e)} />
            </FormGroup>
          </Col>
          <Col sm="10" md="4">
            <FormGroup>
              <Label for="lastname">
                <span className="text-danger">* </span>
                Nom
              </Label>
              <Input type="text" name="lastname" id="lastname" placeholder="votre nom de famille" value={lastname} onChange={e => this.updateState(e)} />
            </FormGroup>
          </Col>
          <Col sm="10" md="3">
            <FormGroup>
              <Label for="birthdate">
                Date de naissance
              </Label>
              <Input type="text" name="birthdate" id="birthdate" placeholder="votre date de naissance" value={birthdate} onChange={e => this.updateState(e)} />
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
          </Col>
          <Col sm="10" md="5">
            <FormGroup>
              <Label for="telephone">
                <span className="text-danger">* </span>
                Téléphone
              </Label>
              <Input type="text" name="telephone" id="telephone" placeholder="votre numéro de téléphone" value={telephone} onChange={e => this.updateState(e)} />
            </FormGroup>
          </Col>
        </Row>
        <Row className="back-btn-userinfo">
          <button type="button" className="btn-confirmation" disabled={this.activateButton()} onClick={() => this.setState({ feedback: 'd-block' })}>envoyer la Commande</button>
        </Row>
        <Row className="mt-3 text-center">
          <h4 className={this.state.feedback}>Merci pour votre commande!</h4>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => ({ cake: state.cakeCharacteristics });

export default connect(mapStateToProps)(UserInfo);
