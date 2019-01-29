import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container } from 'reactstrap';
import PropTypes from 'prop-types';
import axios from 'axios';
import Alert from './Alert';
import Public from './Containers/Public/Public';
import Admin from './Containers/Admin/Admin';
import CellPhonePage from './Containers/CellPhonePage';
import { getAllOrders, getAllCustomers, getAllCakes } from './Actions/adminsActions/getAllOrdersCakesCustomers';
import changeDescriptions from './Actions/adminsActions/changeDescriptions';
import axiosIngredientsDB from './Actions/fetchDB/fetch_database_actions';
import Responsive from 'react-responsive';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount = () => {
    const {
      saveOrdersList, saveCustomersList, saveCakesList, saveDescriptions, axiosDatabase,
    } = this.props;
    axiosDatabase();
    // axios.get('/api/orders/all').then(res => saveOrdersList(res.data));
    // axios.get('/api/customers/all').then(res => saveCustomersList(res.data));
    // axios.get('/api/cakes/all').then(res => saveCakesList(res.data));
    axios.get('/api/admin/descriptions').then(res => saveDescriptions(res.data));
  }

  render() {
    const Desktop = props => <Responsive {...props} minWidth={768} />;
    const Mobile = props => <Responsive {...props} maxWidth={767} />;
    return (
      <div className="App">
        <Desktop>
          <Alert />
          <BrowserRouter className="d-none d-md-block">
            <Switch>
              <Route path={`${process.env.PUBLIC_URL}/admin`} component={Admin} />
              <Route path={`${process.env.PUBLIC_URL}/`} component={Public} />
            </Switch>
          </BrowserRouter>
        </Desktop>
        <Mobile>
          <CellPhonePage />
        </Mobile>
      </div>
    );
  }
}

App.propTypes = {
  saveOrdersList: PropTypes.func.isRequired,
  saveCustomersList: PropTypes.func.isRequired,
  saveCakesList: PropTypes.func.isRequired,
  saveDescriptions: PropTypes.func.isRequired,
  axiosDatabase: PropTypes.func.isRequired,
};

const mapStateToProps = state => (
  {
    dispatch: state.dispatch,
  }
);

const mapDispatchToProps = dispatch => ({
  saveOrdersList: orderList => dispatch(getAllOrders(orderList)),
  saveCustomersList: customerList => dispatch(getAllCustomers(customerList)),
  saveCakesList: cakeList => dispatch(getAllCakes(cakeList)),
  saveDescriptions: newDescription => dispatch(changeDescriptions(newDescription)),
  axiosDatabase: bindActionCreators(axiosIngredientsDB, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
