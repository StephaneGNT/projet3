import React, { Component } from 'react';
import {
  Route, Switch, BrowserRouter, withRouter,
} from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import PimpMyCake from './PimpMyCake';
// import MainNavigation from './Navigation/MainNavigation';
import Contact from './ContactPage/Contact';
import '../../Assets/Styles/Public.css';

class Public extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { history } = this.props;
    return (
      <BrowserRouter>
        <div className="body-zone">
          {/* <MainNavigation /> */}
          <div className="header-zone">
            Pimp My Cake
            <button
              type="button"
              onClick={() => history.push(`${process.env.PUBLIC_URL}/admin`)}
            >
              Admin
            </button>
          </div>
          <div className="content-zone">
            <Switch>
              <Route exact path={`${process.env.PUBLIC_URL}/`} component={HomePage} />
              <Route path={`${process.env.PUBLIC_URL}/mycake`} component={PimpMyCake} />
              <Route path={`${process.env.PUBLIC_URL}/contact`} component={Contact} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default withRouter(Public);
