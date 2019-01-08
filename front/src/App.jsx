import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Public from './Containers/Public/Public';
import Admin from './Containers/Admin/Admin';
import getCakeBases from './Actions/fetchDB/fetch_database_actions';

class App extends Component {
  componentWillMount() {
    const { CakeBases } = this.props;
    CakeBases();
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
  CakeBases: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => (
  {
    getCakeBases: () => dispatch(getCakeBases()),
  }
);

export default connect(mapDispatchToProps)(App);
