import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Table } from 'reactstrap';
import '../../Assets/Styles/MainCss.css';

class Customers extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderCustomers = () => {
    const render = [];
    const { customers } = this.props;
    customers.map(customer => render.push(
      <tr>
        <td>{customer.firstName}</td>
        <td>{customer.lastName}</td>
        <td>{customer.email}</td>
        <td>{customer.phone}</td>
        <td>{customer.birthday}</td>
      </tr>,
    ));
    return render;
  }

  render() {
    return (
      <Table striped>
        <thead>
          <tr>
            <th>Prénom</th>
            <th>Nom</th>
            <th>Adresse Email</th>
            <th>N° de téléphone</th>
            <th>Date de naissance</th>
          </tr>
        </thead>
        <tbody>
          {this.renderCustomers()}
        </tbody>
      </Table>
    );
  }
}

Customers.propTypes = {
  customers: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

const mapStateToProps = state => ({
  customers: state.customerList,
});

export default connect(mapStateToProps, null)(Customers);
