import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  Container, Row, Label, Button,
} from 'reactstrap';
// import { Redirect } from 'react-router-dom';
import { createAdmin, connectAdmin, updateAdmin } from './admin_DB_actions';


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        id: '',
        password: '',
      },
      passwordConfirm: '',
    };
  }

  submitUser = () => {
    const { action, history } = this.props;
    const { user } = this.state;
    console.log(action);
    if (action === 'Créer') {
      createAdmin(user);
      // return <Redirect to="/admin/adminList" />;
      history.push('/admin/adminList');
    }
    if (action === 'Se connecter') {
      connectAdmin(user);
      // return <Redirect to="/admin/orders" />;
      history.push('/admin/adminList');
    }
    if (action === 'Modifier') {
      console.log("click on modifier")
      const { id } = this.props;
      updateAdmin(user, id);
      // return <Redirect to="/admin/adminList" />;
      history.push('/admin/adminList');
    }
  }

  updateUser = (stateToUpdate, value) => {
    this.setState({
      ...this.state,
      user: {
        ...this.state.user,
        [stateToUpdate]: value,
      },
    });
  }

  render() {
    const { action } = this.props;
    const { user, passwordConfirm } = this.state;
    const confirmStyle = {
      display: action === 'Se connecter' ? 'none' : 'block',
    };
    let disabled;
    if (action === 'Se connecter') disabled = user.id === '' || user.password === '';
    else disabled = user.id === '' || user.password === '' || user.password !== passwordConfirm;

    return (
      <Container>
        <Row>
          <Label>Identifiant : </Label>
          <input
            placeholder="Identifiant"
            type="text"
            onChange={e => this.updateUser('id', e.target.value)}
          />
        </Row>
        <Row>
          <Label>Mot de passe : </Label>
          <input
            placeholder="Mot de passe"
            type="password"
            onChange={e => this.updateUser('password', e.target.value)}
          />
        </Row>
        <Row style={confirmStyle}>
          <Label>Confirmer mot de passe : </Label>
          <input
            placeholder="Confirmer mot de passe"
            type="password"
            onChange={e => this.setState({ passwordConfirm: e.target.value })}
          />
        </Row>
        <Button disabled={disabled} onClick={() => this.submitUser()}>{action}</Button>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  id: state.adminIndex,
});

export default withRouter(connect(mapStateToProps, null)(Login));
