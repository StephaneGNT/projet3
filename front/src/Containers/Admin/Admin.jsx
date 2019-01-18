import React, { Component } from 'react';
import {
  Route, Switch, Redirect,
} from 'react-router-dom';
import { connect } from 'react-redux';
import { Container, Col, Row } from 'reactstrap';
import axios from 'axios';
import PropTypes from 'prop-types';
import VerticalNavBar from './Navigation/VerticalNavBar';
import Login from './AdminHandling/Login';
import OrdersAdmin from './OrdersList/OrdersAdmin';
import CakeDetail from './OrdersList/CakeDetail';
import ClientDetail from './OrdersList/ClientDetail';
import DataBase from './DatabaseIngredient/DataBase';
import Customers from './Customers';
import CalendarAdmin from './CalendarAdmin';
import HomePageAdmin from './HomePageAdmin';
import CustomizationAdmin from './CustomizationAdmin';
import AdminList from './AdminHandling/AdminList';
import { getAllOrders, getAllCustomers, getAllCakes } from '../../Actions/adminsActions/getAllOrdersCakesCustomers';

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.loggedIn = true;
  }

  componentWillMount = () => {
    const { saveOrdersList, saveCustomersList, saveCakesList } = this.props;
    axios.get('/orders/all').then(res => saveOrdersList(res.data));
    axios.get('/customers/all').then(res => saveCustomersList(res.data));
    axios.get('/cakes/all').then(res => saveCakesList(res.data));
  }

  render() {
    const { jwtToken } = this.props;
    const PrivateRoute = ({ component: Component, ...rest }) => (
      <Route
        {...rest}
        render={() => (
          jwtToken !== ''
          // this.loggedIn
            ? <Component />
            : <Redirect to="/admin" />
        )}
      />
    );

    return (
      <Container fluid>
        <Row className="mt-5">
          <Col sm="2">
            <VerticalNavBar />
          </Col>
          <Col sm="10">
            <Switch>
              <Route
                exact path={`${process.env.PUBLIC_URL}/admin`}
                render={props => <Login {...props} action="Se connecter" />}
              />
              <PrivateRoute
                path={`${process.env.PUBLIC_URL}/admin/orders`}
                component={OrdersAdmin}
              />
              <PrivateRoute
                path={`${process.env.PUBLIC_URL}/admin/orderDetail/cake`}
                component={CakeDetail}
              />
              <PrivateRoute
                path={`${process.env.PUBLIC_URL}/admin/orderDetail/client`}
                component={ClientDetail}
              />
              <PrivateRoute
                path={`${process.env.PUBLIC_URL}/admin/ingredients`}
                component={DataBase}
              />
              <PrivateRoute
                path={`${process.env.PUBLIC_URL}/admin/clients`}
                component={Customers}
              />
              <PrivateRoute
                path={`${process.env.PUBLIC_URL}/admin/calendar`}
                component={CalendarAdmin}
              />
              <PrivateRoute
                path={`${process.env.PUBLIC_URL}/admin/edit`}
                component={HomePageAdmin}
              />
              <PrivateRoute
                path={`${process.env.PUBLIC_URL}/admin/customization`}
                component={CustomizationAdmin}
              />
              <PrivateRoute
                path={`${process.env.PUBLIC_URL}/admin/adminList`}
                component={AdminList}
              />
            </Switch>
          </Col>
        </Row>
      </Container>
    );
  }
}

Admin.propTypes = {
  saveOrdersList: PropTypes.func.isRequired,
  saveCustomersList: PropTypes.func.isRequired,
  saveCakesList: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  saveOrdersList: orderList => dispatch(getAllOrders(orderList)),
  saveCustomersList: customerList => dispatch(getAllCustomers(customerList)),
  saveCakesList: cakeList => dispatch(getAllCakes(cakeList)),
});

const mapStateToProps = state => ({
  jwtToken: state.adminToken,
});

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
