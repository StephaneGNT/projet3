import React, { Component } from 'react';
import { Container, Row, Button } from 'reactstrap';
import axios from 'axios';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Login from './Login';
import { deleteAdminFromDB } from './admin_DB_actions';
import changeIndex from '../../../Actions/adminsActions/changeAdminIndex';

class AdminList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      create: false,
      modify: false,
      adminList: [],
    };
  }

  componentDidMount = () => {
    console.log("this.componentDidMount")
    this.getAdminList();
  }

  getAdminList = async () => {
    const adminList = await axios.get('/api/admin/all').then(res => res.data);
    this.setState({ adminList });
  }

  renderList = () => {
    const { adminList } = this.state;
    const render = [];
    adminList.map((admin) => {
      render.push(
        <tr>
          <td>{admin.name}</td>
          <td>
            <Button
              onClick={() => this.modifyAdmin(admin.id)}
              title="Modifier"
            >
              ✎
            </Button>
          </td>
          <td><Button onClick={() => this.deleteAdmin(admin.id)} title="Supprimer">✗</Button></td>
        </tr>,
      );
    });
    return render;
  }

  modifyAdmin = (adminID) => {
    const { modify } = this.state;
    const { setAdminIndex } = this.props;
    this.setState({ modify: !modify });
    setAdminIndex(adminID);
  }

  deleteAdmin = (adminID) => {
    if (window.confirm('Supprimer cet admin ?')) deleteAdminFromDB(adminID);
    this.getAdminList();
  }

  render() {
    const { create, modify } = this.state;
    const createStyle = {
      display: create ? 'block' : 'none',
    };
    const modifyStyle = {
      display: modify ? 'block' : 'none',
    };
    const displayStyle = {
      display: create || modify ? 'none' : 'block',
    };
    return (
      <Container>
        <Row>
          <h1>Liste d'administrateurs</h1>
        </Row>
        <Row style={displayStyle} className="text-center">
          <table style={{ margin: 'auto' }}>
            <tbody>
              {this.renderList()}
            </tbody>
          </table>
        </Row>
        <Row style={createStyle} className="text-center">
          <Login action="Créer" />
        </Row>
        <Row style={modifyStyle} className="text-center">
          <Login action="Modifier" />
        </Row>
        <Row style={displayStyle} className="text-center">
          <Button onClick={() => this.setState({ create: true })}>Nouvel admin</Button>
        </Row>
      </Container>
    );
  }
}

AdminList.propTypes = {
  setAdminIndex: PropTypes.func.isRequired,
  // admins: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

const mapStateToProps = state => ({
  admins: state.adminList,
});

const mapDispatchToProps = dispatch => ({
  setAdminIndex: index => dispatch(changeIndex(index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminList);
