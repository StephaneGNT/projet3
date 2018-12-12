import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { Container, Col, Row } from 'reactstrap';

import VerticalNavBar from './Navigation/VerticalNavBar';
import OrdersAdmin from './OrdersAdmin';
import DataBase from './DatabaseIngredient/DataBase';
import Clients from './Clients';
import CalendarAdmin from './CalendarAdmin';
import HomePageAdmin from './HomePageAdmin';
import CustomizationAdmin from './CustomizationAdmin';

export default class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container>
        <BrowserRouter>
          <Row className="mt-5">
            <Col sm="2">
              <VerticalNavBar />
            </Col>
            <Col sm="10">
              <Switch>
                <Route exact path="/admin" component={OrdersAdmin} />
                <Route path="/admin/ingredients" component={DataBase} />
                <Route path="/admin/clients" component={Clients} />
                <Route path="/admin/calendar" component={CalendarAdmin} />
                <Route path="/admin/edit" component={HomePageAdmin} />
                <Route path="/admin/customization" component={CustomizationAdmin} />
              </Switch>
            </Col>
          </Row>
        </BrowserRouter>
      </Container>
    );
  }
}
