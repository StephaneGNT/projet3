import React, { Component } from 'react';
import {
  Container, Row, Col, FormGroup, Label, Input, Button, FormFeedback,
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
    if (this.state.firstname.length > 1 && this.state.lastname.length > 1 && this.state.telephone.length >= 10 && this.validEmail(this.state.email) === false) return false;
    return true;
  }

  render() {
    return (
      <Container>
        <Row className="text-center">
          <Progressbar />
        </Row>
        <Row className="justify-content-around">
          <Col sm="10" md="5">
            <FormGroup>
              <Label for="firstname">
                <span className="text-danger lead">* </span>
                Prénom
              </Label>
              <Input type="text" name="firstname" id="firstname" placeholder="votre prénom" value={this.state.firstname} onChange={e => this.updateState(e)} />
            </FormGroup>
            <FormGroup>
              <Label for="email">
                <span className="text-danger lead">* </span>
                E-mail
              </Label>
              <Input invalid={this.validEmail(this.state.email)} type="email" name="email" id="email" placeholder="votre adresse mail" value={this.state.email} onChange={e => this.updateState(e)} />
              <FormFeedback>adresse mail non valide</FormFeedback>
            </FormGroup>
          </Col>
          <Col sm="10" md="5">
            <FormGroup>
              <Label for="lastname">
                <span className="text-danger lead">* </span>
                Nom
              </Label>
              <Input type="text" name="lastname" id="lastname" placeholder="votre nom de famille" value={this.state.lastname} onChange={e => this.updateState(e)} />
            </FormGroup>
            <FormGroup>
              <Label for="telephone">
                <span className="text-danger lead">* </span>
                Téléphone
              </Label>
              <Input type="text" name="telephone" id="telephone" placeholder="votre numéro de téléphone" value={this.state.telephone} onChange={e => this.updateState(e)} />
            </FormGroup>
          </Col>
        </Row>
        <Row className="text-center">
          <NavArrowsLayout />
          <Button className="btn btn-info btn-lg" disabled={this.activateButton()}>envoyer la Commande</Button>
        </Row>
      </Container>
    );
  }
}

export default UserInfo;
