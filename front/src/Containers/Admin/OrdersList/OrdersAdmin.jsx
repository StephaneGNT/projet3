import React, { Component } from 'react';
import {
  Container, Table, Button, Input,
} from 'reactstrap';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../../../Assets/Styles/MainCss.css';
// import Customers from './Customers';
import changeOrderAdminStatus from '../../../Actions/orderActions/changeOrderStatus';

class OrdersAdmin extends Component {
  changeStatus = (index, newStatus, customer) => {
    const { changeOrderStatus } = this.props;

    const mailClient = {
      from: 'Giluna Pimp My Cake <giluna@pimpmycake.com>',
      to: customer.email,
      subject: 'Commande mise à jour',
      content: `Bonjour ${customer.firstname} ${customer.lastname},
      Nous avons le plaisir de vous informer que votre commande est ${newStatus}.
      Nous reviendrons vers vous rapidement pour vous confirmer sa validation.`,
    };
    axios.post('/api/send/mail', mailClient).then(response => console.log(response.data));

    changeOrderStatus(index, newStatus);
  };

  formatDate = (date) => {
    const year = date.slice(0, 4);
    const month = date.slice(5, 7);
    const day = date.slice(8, 10);
    return `${day}/${month}/${year}`;
  }

  renderOrders = () => {
    const {
      history, orders, customers, cakes,
    } = this.props;
    const render = [];

    orders.map((order, index) => {
      const formattedorderDate = this.formatDate(order.orderDate);
      const formatteddeliveryDate = this.formatDate(order.deliveryDate);

      render.push(
        <tr>
          <td>{order.id}</td>
          <td>{formattedorderDate}</td>
          <td>{formatteddeliveryDate}</td>
          <td>
            <Input
              type="select"
              onChange={e => this.changeStatus(index, e.target.value, customers.find(customer => customer.id === order.customerId))}
            >
              <option />
              <option selected={order.admin_status === 'Acceptée'}>acceptée</option>
              <option selected={order.admin_status === 'en préparation'}>en préparation</option>
              <option selected={order.admin_status === 'en décoration'}>en décoration</option>
              <option selected={order.admin_status === 'prête'}>prête</option>
              <option selected={order.admin_status === 'payée et récupérée'}>payée et récupérée</option>
            </Input>
          </td>
          <td>
            <Button
              onClick={() => {
                console.log("order", order, "cakes", cakes)
                history.push({
                pathname: `${process.env.PUBLIC_URL}/admin/orderDetail/cake`,
                state: { cake: cakes.find(cake => cake.id === order.cakeId) },
              })}}
            >
              Détail
            </Button>
          </td>
          <td>
            <Button
              onClick={() => history.push({
                pathname: `${process.env.PUBLIC_URL}/admin/orderDetail/client`,
                state: { customer: customers.find(customer => customer.id === order.customerId) },
              })}
            >
              Détail
            </Button>
          </td>
        </tr>,
      );
    });
    return render;
  }

  render() {
    return (
      <Container>
        <Table striped>
          <thead>
            <tr>
              <th>N° de commande</th>
              <th>Date de commande</th>
              <th>Date de livraison</th>
              <th>Statut commande</th>
              <th>Gâteau</th>
              <th>Client</th>
            </tr>
          </thead>
          <tbody>
            {this.renderOrders()}
          </tbody>
        </Table>
      </Container>
    );
  }
}

OrdersAdmin.propTypes = {
  orders: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  customers: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  cakes: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  changeOrderStatus: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  customers: state.customerList,
  orders: state.orderList,
  cakes: state.cakeList,
});

const mapDispatchToProps = dispatch => ({
  changeOrderStatus: status => dispatch(changeOrderAdminStatus(status)),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(withRouter(OrdersAdmin)));
