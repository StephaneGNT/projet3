import React, { Component } from 'react';
import {
  Route, Switch, Redirect,
} from 'react-router-dom';
import { connect } from 'react-redux';
import { Container, Col, Row } from 'reactstrap';
import VerticalNavBar from './Navigation/VerticalNavBar';
import Login from './AdminHandling/Login';
import OrdersAdmin from './OrdersAdmin';
import DataBase from './DatabaseIngredient/DataBase';
import Clients from './Clients';
import CalendarAdmin from './CalendarAdmin';
import HomePageAdmin from './HomePageAdmin';
import CustomizationAdmin from './CustomizationAdmin';
import AdminList from './AdminHandling/AdminList';

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.loggedIn = true;
  }

  render() {
    const { jwtToken } = this.props;
    const PrivateRoute = ({ component: Component, ...rest }) => (
      <Route
        {...rest}
        render={() => (
          //jwtToken !== ''
           this.loggedIn
            ? <Component />
            : <Redirect to="/admin" />
        )}
      />
    );

    return (
      <Container fluid>
        <Row className="mt-5">
          <Col sm="2">
            <VerticalNavBar />
          </Col>
          <Col sm="10">
            <Switch>
              <Route
                exact path={`${process.env.PUBLIC_URL}/admin`}
                render={props => <Login {...props} action="Se connecter" />}
              />
              <PrivateRoute
                path={`${process.env.PUBLIC_URL}/admin/orders`}
                component={OrdersAdmin}
              />
              <PrivateRoute
                path={`${process.env.PUBLIC_URL}/admin/ingredients`}
                component={DataBase}
              />
              <PrivateRoute
                path={`${process.env.PUBLIC_URL}/admin/clients`}
                component={Clients}
              />
              <PrivateRoute
                path={`${process.env.PUBLIC_URL}/admin/calendar`}
                component={CalendarAdmin}
              />
              <PrivateRoute
                path={`${process.env.PUBLIC_URL}/admin/edit`}
                component={HomePageAdmin}
              />
              <PrivateRoute
                path={`${process.env.PUBLIC_URL}/admin/customization`}
                component={CustomizationAdmin}
              />
              <PrivateRoute
                path={`${process.env.PUBLIC_URL}/admin/adminList`}
                component={AdminList}
              />
            </Switch>
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  jwtToken: state.adminToken,
});

export default connect(mapStateToProps, null)(Admin);
