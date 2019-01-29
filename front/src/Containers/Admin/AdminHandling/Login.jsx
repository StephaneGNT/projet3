import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Container, Row, Button } from 'reactstrap';
import alert from '../../../Actions/alert';
import { createAdmin, connectAdmin, updateAdmin } from './admin_DB_actions';
import registerToken from '../../../Actions/adminsActions/registerToken';


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        id: 'Giluna',
        password: 'password',
      },
      passwordConfirm: '',
    };
  }

  componentDidMount = () => {
    document.addEventListener('keydown', this.handleKeyPress, false);
  }

  componentWillUnmount = () => {
    document.removeEventListener('keydown', this.handleKeyPress, false);
  }

  handleKeyPress = (event) => {
    const { user, passwordConfirm } = this.state;
    const { action } = this.props;
    if (((action === 'Se connecter' && user.name === '' && user.adminPassword === '') || (user.name === '' || user.adminPassword === '' || user.adminPassword !== passwordConfirm)) && (event.key === 'Enter')) {
      this.submitUser();
    }
  }

  submitUser = async () => {
    const {
      action, history, saveToken, index, alertAction,
    } = this.props;
    const { user } = this.state;
    if (action === 'Créer') {
      createAdmin(user);
      history.push(`${process.env.PUBLIC_URL}/admin/adminList`);
    }
    if (action === 'Se connecter') {
      const answer = await connectAdmin(user);
      alertAction(answer.message);
      saveToken(answer.token);
      history.push(`${process.env.PUBLIC_URL}/admin/orders`);
    }
    if (action === 'Modifier') {
      updateAdmin(user, index);
      history.push(`${process.env.PUBLIC_URL}/admin/adminList`);
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
      textAlign: 'center',
      padding: '2vh',
    };
    const rowStyle = {
      textAlign: 'center',
      padding: '2vh',
    };
    let disabled;
    if (action === 'Se connecter') disabled = user.id === '' || user.password === '';
    else disabled = user.id === '' || user.password === '' || user.password !== passwordConfirm;

    return (
      <Container>
        <Row style={rowStyle}>
          <input
            placeholder="Identifiant"
            type="text"
            value={user.id}
            onChange={e => this.updateUser('id', e.target.value)}
          />
        </Row>
        <Row style={rowStyle}>
          <input
            placeholder="Mot de passe"
            type="password"
            value={user.password}
            onChange={e => this.updateUser('password', e.target.value)}
          />
        </Row>
        <Row style={confirmStyle}>
          <input
            placeholder="Confirmer mot de passe"
            type="password"
            onChange={e => this.setState({ passwordConfirm: e.target.value })}
          />
        </Row>
        <Row style={rowStyle}>
          <Button disabled={disabled} onClick={() => this.submitUser()}>{action}</Button>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  index: state.adminIndex,
});

const mapDispatchToProps = dispatch => ({
  saveToken: token => dispatch(registerToken(token)),
  alertAction: message => dispatch(alert(message)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
