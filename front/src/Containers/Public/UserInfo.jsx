import React, { Component } from 'react';
import {
  Container, Row, Col, FormGroup, Label, Input, Button, FormText,
} from 'reactstrap';
import NavArrowsLayout from './Navigation/NavArrowsLayout';
import Progressbar from './Progressbar';

class UserInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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
              <Label for="firstname">Prénom:</Label>
              <Input type="text" name="prenom" id="firstname" placeholder="votre prénom" />
            </FormGroup>
            <FormGroup>
              <Label for="telephone">Prénom:</Label>
              <Input type="text" name="telephone" id="telephone" placeholder="votre numéro de téléphone" />
            </FormGroup>
          </Col>
          <Col sm="10" md="5">
            <FormGroup>
              <Label for="lastname">Nom:</Label>
              <Input type="text" name="nom" id="lastname" placeholder="votre nom de famille" />
            </FormGroup>
            <FormGroup>
              <Label for="email">Prénom:</Label>
              <Input type="email" name="email" id="email" placeholder="votre adresse mail" />
            </FormGroup>
          </Col>
        </Row>
        <Row className="text-center">
          <NavArrowsLayout />
          <Button className="btn btn-info btn-lg">envoyer la Commande</Button>
        </Row>
      </Container>
    );
  }
}

export default UserInfo;
