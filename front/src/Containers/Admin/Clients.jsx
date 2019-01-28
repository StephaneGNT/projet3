import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Table } from 'reactstrap';
import '../../Assets/Styles/MainCss.css';

class Clients extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderClients = () => {
    const { clientsList } = this.props;
    const render = [];
    clientsList.map(client => render.push(
      <tr>
        <td>{client.firstName}</td>
        <td>{client.lastName}</td>
        <td>{client.birthday}</td>
        <td>{client.email}</td>
        <td>{client.phone}</td>
      </tr>,
    ));
    return render;
  }

  render() {
    return (
      <Container>
        <Table>
          <thead>
            <tr>
              <th>Nom</th>
              <th>Prénom</th>
              <th>Date de naissance</th>
              <th>Email</th>
              <th>Téléphone</th>
            </tr>
          </thead>
          <tbody>
            {this.renderClients()}
          </tbody>
        </Table>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  clientsList: state.customerList,
});

export default connect(mapStateToProps)(Clients);
