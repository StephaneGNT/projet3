import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import HomePage from './HomePage';
import PimpMyCake from './PimpMyCake';
import Contact from './Contact';

export default class Public extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div> NavBar </div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/mycake" component={PimpMyCake} />
            <Route path="/contact/" component={Contact} />
          </Switch>
        </BrowserRouter>
        <div> Footer </div>
      </div>
    );
  }
}
