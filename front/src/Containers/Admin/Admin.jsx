import React, { Component } from 'react';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';
import { Container, Col, Row } from 'reactstrap';
import VerticalNavBar from './Navigation/VerticalNavBar';
import OrdersAdmin from './OrdersAdmin';
import DataBase from './DatabaseIngredient/DataBase';
import Clients from './Clients';
import CalendarAdmin from './CalendarAdmin';
import HomePageAdmin from './HomePageAdmin';
import CustomizationAdmin from './CustomizationAdmin';
<<<<<<< HEAD
import AddIngredients from './AddIngredients';
=======
import Login from './Login';
>>>>>>> 824f728eef7c75f2a074308742918fea21284dbe

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
    this.test = OrdersAdmin;
    return (
      <Container fluid>
        <BrowserRouter style={{ width: '90vw', marginLeft: '5vw' }}>
          <Row className="mt-5">
            <Col sm="2">
              <VerticalNavBar />
            </Col>
            <Col sm="10">
              <Switch>
                <Route path="/admin/login" component={Login} />
                <Route exact path="/admin" render={() => this.redirect('order')} />
                <Route exact path="/admin/ingredients" render={() => this.redirect('database')} />
                <Route exact path="/admin/clients" render={() => this.redirect('clients')} />
                <Route exact path="/admin/calendar" render={() => this.redirect('calendar')} />
                <Route exact path="/admin/edit" render={() => this.redirect('edit')} />
                <Route exact path="/admin/customization" render={() => this.redirect('customization')} />
              </Switch>
            </Col>
          </Row>
        </BrowserRouter>
      </Container>
    );
  }
}
