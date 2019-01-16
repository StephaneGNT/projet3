import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import Public from './Containers/Public/Public';
import Admin from './Containers/Admin/Admin';
import axiosIngredientsDB from './Actions/fetchDB/fetch_database_actions';

class App extends Component {
  componentWillMount() {
    const { axiosDatabase } = this.props;
    axiosDatabase();
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
