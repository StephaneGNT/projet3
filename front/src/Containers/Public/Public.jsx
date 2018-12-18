import React, { Component } from 'react';
import { Route, Switch, BrowserRouter, Link } from 'react-router-dom';
import HomePage from './HomePage';
import PimpMyCake from './PimpMyCake';
import Contact from './Contact';
import '../../Assets/Styles/Public.css';

class Public extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="body-zone">
        <div className="header-zone">
          Pimp My Cake
          <Link to="/admin"><button type="button">Admin</button></Link>
        </div>
        <div className="content-zone">
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/mycake" component={PimpMyCake} />
              <Route path="/contact" component={Contact} />
            </Switch>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

export default Public;
