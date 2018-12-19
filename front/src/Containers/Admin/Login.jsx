import React, { Component } from 'react';
import { Container, Row, Label, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      password: '',
    };
    this.redirectUrl = 'admin';
    // this.disabled = (this.state.id.length === 0 && this.state.password.length === 0);
    this.disabled = false;
  }

  handleChange = (key, value) => {
    this.setState = ({
      ...this.state,
      [key]: [value],
    });
  }

  checkLogin = () => {
    // Vérification de la cohérence de l'id et du password, qui retourne true ou false
  }

  render() {
    return (
      <Container>
        <Row>
          <Label className="labels-perso mt-3">Identifiant </Label>
          <input type="text" onChange={event => this.handleChange('id', event.target.value)} />
        </Row>
        <Row>
          <Label className="labels-perso mt-3">Mot de passe </Label>
          <input type="password" onChange={event => this.handleChange('password', event.target.value)} />
        </Row>
        <Link to={this.redirectUrl}><Button disabled={this.disabled} onClick={() => this.checkLogin()}> Se connecter </Button></Link>
      </Container>
    );
  }
}

export default Login;