import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Public from './Containers/Public/Public';
import Admin from './Containers/Admin/Admin';
import { getAllOrders, getAllCustomers, getAllCakes } from './Actions/adminsActions/getAllOrdersCakesCustomers';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount = () => {
    const { saveOrdersList, saveCustomersList, saveCakesList } = this.props;
    axios.get('/orders/all').then(res => saveOrdersList(res.data));
    axios.get('/customers/all').then(res => saveCustomersList(res.data));
    axios.get('/cakes/all').then(res => saveCakesList(res.data));
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path={`${process.env.PUBLIC_URL}/admin`} component={Admin} />
            <Route exact path={`${process.env.PUBLIC_URL}/`} component={Public} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

App.propTypes = {
  saveOrdersList: PropTypes.func.isRequired,
  saveCustomersList: PropTypes.func.isRequired,
  saveCakesList: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  saveOrdersList: orderList => dispatch(getAllOrders(orderList)),
  saveCustomersList: customerList => dispatch(getAllCustomers(customerList)),
  saveCakesList: cakeList => dispatch(getAllCakes(cakeList)),
});

export default connect(null, mapDispatchToProps)(App);
