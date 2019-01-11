import React, { Component } from 'react';
import {
  Route, Switch, BrowserRouter, Redirect,
} from 'react-router-dom';
import { Container, Col, Row } from 'reactstrap';
import VerticalNavBar from './Navigation/VerticalNavBar';
import Login from './Login';
import OrdersAdmin from './OrdersAdmin';
import DataBase from './DatabaseIngredient/DataBase';
import Clients from './Clients';
import CalendarAdmin from './CalendarAdmin';
import HomePageAdmin from './HomePageAdmin';
import CustomizationAdmin from './CustomizationAdmin';
import AddIngredients from './AddIngredients';

export default class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.loggedIn = true;
  }

  redirect = (destination) => {
    let render;
    switch (destination) {
      case 'order': render = (!this.loggedIn ? (<Redirect to="/admin/login" />) : <OrdersAdmin />); break;
      case 'database': render = (!this.loggedIn ? (<Redirect to="/admin/login" />) : <DataBase />); break;
      case 'clients': render = (!this.loggedIn ? (<Redirect to="/admin/login" />) : <Clients />); break;
      case 'calendar': render = (!this.loggedIn ? (<Redirect to="/admin/login" />) : <CalendarAdmin />); break;
      case 'edit': render = (!this.loggedIn ? (<Redirect to="/admin/login" />) : <HomePageAdmin />); break;
      case 'customization': render = (!this.loggedIn ? (<Redirect to="/admin/login" />) : <CustomizationAdmin />); break;
      default: render = <Login />;
    }
    return render;
  }

  render() {
    // this.test = OrdersAdmin;
    const PrivateRoute = ({ component: Component, ...rest }) => (
      <Route {...rest} render={(props) => (
        this.loggedIn
          ? <Component {...props} />
          : <Redirect to='/admin' />
      )} />
    )

    return (
      <Container fluid>
        {/* <BrowserRouter style={{ width: '90vw', marginLeft: '5vw' }}> */}
          <Row className="mt-5">
            <Col sm="2">
              <VerticalNavBar />
            </Col>
            <Col sm="10">
              <Switch>
                {/* <Route exact path="/admin" component={OrdersAdmin} />
                <Route path="/admin/ingredients" component={DataBase} />
                <Route path="/admin/clients" component={Clients} />
                <Route path="/admin/calendar" component={CalendarAdmin} />
                <Route path="/admin/edit" component={HomePageAdmin} />
                <Route path="/admin/customization" component={CustomizationAdmin} />
                <Route path="/admin/newingredient" component={AddIngredients} /> */}
                <Route exact path="/admin" component={Login} />
                <PrivateRoute path='/admin/orders' component={OrdersAdmin} />
                <PrivateRoute path='/admin/ingredients' component={DataBase} />
                <Route path="/admin/clients" component={Clients} />
                <Route path="/admin/calendar" component={CalendarAdmin} />
                <Route path="/admin/edit" component={HomePageAdmin} />
                <Route path="/admin/customization" component={CustomizationAdmin} />
                <Route path="/admin/newingredient" component={AddIngredients} />
              </Switch>
            </Col>
          </Row>
        {/* </BrowserRouter> */}
      </Container>
    );
  }
}
