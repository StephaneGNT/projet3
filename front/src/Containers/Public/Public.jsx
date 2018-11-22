import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import HomePage from './HomePage';
import PimpMyCake from './PimpMyCake';
import Contact from './Contact';

import '../../Assets/Styles/Public.css';

export default class Public extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="bodyZone">
        <div className="headerZone"> NavBar </div>
        <div className="contentZone">
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/mycake" component={PimpMyCake} />
              <Route path="/contact/" component={Contact} />
            </Switch>
          </BrowserRouter>
        </div>
        <div className="footerZone"> Footer </div>
      </div>
    );
  }
}
