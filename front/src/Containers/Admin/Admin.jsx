import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import OrdersAdmin from './OrdersAdmin';
import DataBase from './DataBase';
import CalendarAdmin from './CalendarAdmin';
import HomePageAdmin from './HomePageAdmin';
import CustomizationAdmin from './CustomizationAdmin';
import AddIngredients from './AddIngredients';

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
          <Route path="/admin/customization" component={CustomizationAdmin} />
          <Route path="/admin/newingredient" component={AddIngredients} />
        </Switch>
      </BrowserRouter>
    );
  }
}
