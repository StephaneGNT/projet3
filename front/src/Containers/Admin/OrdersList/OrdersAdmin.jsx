import React, { Component } from 'react';
import {
  Container, Table, Button, Input,
} from 'reactstrap';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../../../Assets/Styles/MainCss.css';
// import Customers from './Customers';
import changeOrderAdminStatus from '../../../Actions/orderActions/changeOrderStatus';

class OrdersAdmin extends Component {
  renderOrders = () => {
    const {
      history, orders, customers, cakes, changeOrderStatus,
    } = this.props;
    console.log("orders", orders);
    console.log("customers", customers);
    const render = [];
    orders.map((order, index) => render.push(
      <tr>
        <td>{order.id}</td>
        <td>{order.orderDate}</td>
        <td>{order.deliveryDate}</td>
        <td>
          <Input type="select" onChange={e => changeOrderStatus(index, e.target.value)}>
            <option />
            <option>Acceptée</option>
            <option>En préparation</option>
            <option>En décoration</option>
            <option>Commande prête</option>
          </Input>
        </td>
        <td>
          <Button
            onClick={() => history.push({
              pathname: '/admin/orderDetail/cake',
              state: { cake: cakes[index - 1] },
            })}
          >
            Détail
          </Button>
        </td>
        <td>
          <Button
            onClick={() => {
              history.push({
                pathname: '/admin/orderDetail/client',
                state: { customer: customers[order.customerId - 1] },
              });
            }}
          >
            Détail
          </Button>
        </td>
      </tr>,
    ));
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(OrdersAdmin));
