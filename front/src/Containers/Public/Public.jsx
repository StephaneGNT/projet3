import React, { Component } from 'react';
import {
  Route, Switch, BrowserRouter, Link,
} from 'react-router-dom';
import HomePage from './HomePage';
import PimpMyCake from './PimpMyCake';
import Contact from './Contact';
import MainNavigation from './Navigation/MainNavigation';
import '../../Assets/Styles/Public.css';
import Admin from '../Admin/Admin';

class Public extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <BrowserRouter>
        <div className="body-zone">
          <MainNavigation />
          <div className="header-zone">
            Pimp My Cake
            <button><Link to={`${process.env.PUBLIC_URL}/admin`}>Admin</Link></button>
          </div>
          <div className="content-zone">
            <Switch>
              <Route exact path={`${process.env.PUBLIC_URL}/`} component={HomePage} />
              <Route path={`${process.env.PUBLIC_URL}/mycake`} component={PimpMyCake} />
              <Route path={`${process.env.PUBLIC_URL}/contact`} component={Contact} />
              <Route path={`${process.env.PUBLIC_URL}/admin`} component={Admin} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default Public;
