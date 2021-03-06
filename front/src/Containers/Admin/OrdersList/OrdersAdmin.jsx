import React, { Component } from 'react';
import {
  Container, Table, Button, Input,
} from 'reactstrap';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import changeOrderAdminStatus from '../../../Actions/orderActions/changeOrderStatus';
import { getAllOrders, getAllCakes } from '../../../Actions/adminsActions/getAllOrdersCakesCustomers';

class OrdersAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      asc: false,
    }
  }

  componentWillMount = () => {
    const { saveCakes, saveOrders } = this.props;
    axios.get('/api/orders/all').then(response => saveOrders(response.data));
    axios.get('/api/cakes/all').then(response => saveCakes(response.data));
  }

  changeStatus = (index, newStatus, customer) => {
    const { changeOrderStatus } = this.props;

    const mailClient = {
      from: 'Giluna Pimp My Cake <giluna@pimpmycake.com>',
      to: customer.email,
      title: 'Commande mise à jour',
      text: `Bonjour ${customer.firstName} ${customer.lastName},
      Nous avons le plaisir de vous informer que votre commande est ${newStatus}.
      Nous reviendrons vers vous rapidement pour vous confirmer sa validation.`,
    };
    axios.post('/api/send/mail', mailClient);

    changeOrderStatus(index, newStatus);
  };

  formatDate = (date) => {
    const year = date.slice(0, 4);
    const month = date.slice(5, 7);
    const day = date.slice(8, 10);
    return `${day}/${month}/${year}`;
  }

  getOrderStatus = (order, index, customers) => {
    const { cakes } = this.props;
    const selectedCake = cakes.find(cake => cake.id === order.cakeId);
    let message = null;
    if (selectedCake && (selectedCake.deco1 === '3D' || selectedCake.deco2 === '3D')) message = 'Gâteau avec décoration 3D: merci de confirmer le prix avant validation';
    return (
      <div>
        {message}
        <Input
          type="select"
          onChange={e => this.changeStatus(index, e.target.value, customers.find(customer => customer.id === order.customerId))}
        >
          <option />
          <option selected={order.admin_status === 'acceptée'}>acceptée</option>
          <option selected={order.admin_status === 'en préparation'}>en préparation</option>
          <option selected={order.admin_status === 'en décoration'}>en décoration</option>
          <option selected={order.admin_status === 'prête'}>prête</option>
          <option selected={order.admin_status === 'payée et récupérée'}>payée et récupérée</option>
        </Input>
      </div>
    );
  }

  renderOrders = () => {
    const {
      history, orders, customers, cakes,
    } = this.props;
    const render = [];

    if (orders.length > 0) {
      orders.map((order, index) => {
        const formattedorderDate = this.formatDate(order.orderDate);
        const formatteddeliveryDate = this.formatDate(order.deliveryDate);

        render.push(
          <tr>
            <td>{order.id}</td>
            <td>{formattedorderDate}</td>
            <td>{formatteddeliveryDate}</td>
            <td>
              {this.getOrderStatus(order, index, customers)}
            </td>
            <td>{order.customerComment}</td>
            <td>{order.customerMessage}</td>
            <td>
              <Button
                color="primary"
                onClick={() => {
                  history.push({
                    pathname: `${process.env.PUBLIC_URL}/giluna/adminZone/orderDetail/cake`,
                    state: { cake: cakes.find(cake => cake.id === order.cakeId) },
                  });
                }}
              >
                Détail gâteau
              </Button>
            </td>
            <td>
              <Button
                color="info"
                onClick={() => history.push({
                  pathname: `${process.env.PUBLIC_URL}/giluna/adminZone/orderDetail/client`,
                  state: { customer: customers.find(customer => customer.id === order.customerId) },
                })}
              >
                Info client
              </Button>
            </td>
          </tr>,
        );
      });
    }
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
              <th>Commentaire client</th>
              <th>Message carte</th>
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
  saveOrders: PropTypes.func.isRequired,
  saveCakes: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  customers: state.customerList,
  orders: state.orderList,
  cakes: state.cakeList,
});

const mapDispatchToProps = dispatch => ({
  changeOrderStatus: status => dispatch(changeOrderAdminStatus(status)),
  saveOrders: orders => dispatch(getAllOrders(orders)),
  saveCakes: cakes => dispatch(getAllCakes(cakes)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(withRouter(OrdersAdmin)));
