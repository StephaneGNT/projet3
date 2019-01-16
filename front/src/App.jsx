import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import Public from './Containers/Public/Public';
import Admin from './Containers/Admin/Admin';
import axiosIngredientsDB from './Actions/fetchDB/fetch_database_actions';

<<<<<<< HEAD
class App extends Component {
  componentWillMount() {
    const { axiosDatabase } = this.props;
    const allTables = ['cake_bases', 'cookie_bases', /* 'brownie_bases', */'fillings', 'icings', 'toppings', 'macaron_flavors', 'macaron_shells', 'cheesecake_flavors'];
    allTables.map(table => axiosDatabase(table));
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
  axiosDatabase: PropTypes.func.isRequired,
=======
const App = () => {
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
>>>>>>> dev
};

const mapStateToProps = state => (
  {
    dispatch: state.dispatch,
  }
);

const mapDispatchToProps = dispatch => (
  {
    axiosDatabase: bindActionCreators(axiosIngredientsDB, dispatch),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(App);
