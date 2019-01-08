import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Public from './Containers/Public/Public';
import Admin from './Containers/Admin/Admin';
import {
  getCakeBases,
  getBrownieBases,
  getCookieBases,
  getCheesecakeFlavor,
  getFillings,
  getIcings,
  getToppings,
  getMacaronFlavors,
  getMacaronShells,
} from './Actions/fetchDB/fetch_database_actions';

class App extends Component {
  componentWillMount() {
    const { fetchDatabase } = this.props;
    fetchDatabase();
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path={`${process.env.PUBLIC_URL}/admin`} component={Admin} />
            <Route path={`${process.env.PUBLIC_URL}/`} component={Public} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

App.propTypes = {
  fetchDatabase: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => (
  {
    fetchDatabase: () => dispatch(
      getCakeBases(),
      getBrownieBases(),
      getCheesecakeFlavor(),
      getCookieBases(),
      getFillings(),
      getIcings(),
      getToppings(),
      getMacaronFlavors(),
      getMacaronShells(),
    ),
  }
);

const mapStateToProps = state => (
  {
    dispatch: state.dispatch,
    appstate: state,
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(App);
