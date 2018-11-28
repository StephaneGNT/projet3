import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import OrdersAdmin from './OrdersAdmin';
import DataBase from './DataBase';
import CalendarAdmin from './CalendarAdmin';
import HomePageAdmin from './HomePageAdmin';

export default class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/admin" component={OrdersAdmin} />
          <Route path="/admin/db" component={DataBase} />
          <Route path="/admin/calendar" component={CalendarAdmin} />
          <Route path="/admin/edit" component={HomePageAdmin} />
        </Switch>
      </BrowserRouter>
    );
  }
}
