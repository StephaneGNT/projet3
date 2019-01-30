import React, { Component } from 'react';
import { Container, Table, Button } from 'reactstrap';
import { withRouter } from 'react-router-dom';

class ClientDetail extends Component {
  renderClientDescription = (customer) => {
    const render = [];
    
    render.push(
      <tr>
        <td>N°</td>
        <td>{customer.id}</td>
      </tr>,
      <tr>
        <td>Nom</td>
        <td>{customer.lastName}</td>
      </tr>,
      <tr>
        <td>Prénom</td>
        <td>{customer.firstName}</td>
      </tr>,
      <tr>
        <td>Téléphone</td>
        <td>{customer.phone}</td>
      </tr>,
      <tr>
        <td>Email</td>
        <td>{customer.email}</td>
      </tr>,
      <tr>
        <td>Date de naissance</td>
        <td>{customer.birthday}</td>
      </tr>,
    );
    return render;
  }

  render() {
    const { location, history } = this.props;
    return (
      <Container>
        <Table>
          <tbody>
            {this.renderClientDescription(location.state.customer)}
          </tbody>
        </Table>
        <Button onClick={() => history.push(`${process.env.PUBLIC_URL}/giluna/adminZone/orders`)}>Retour</Button>
      </Container>
    );
  }
}

export default withRouter(ClientDetail);
