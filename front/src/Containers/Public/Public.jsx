import React, { Component } from 'react';
import {
  Route,
  Switch,
  BrowserRouter,
  // Link
} from 'react-router-dom';
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
          {/* <Link to="/admin"><button type="button">Admin</button></Link> */}
        </div>
        <div className="content-zone">
          <BrowserRouter>
            <Switch>
              <Route exact path={`${process.env.PUBLIC_URL}/`} component={HomePage} />
              <Route path={`${process.env.PUBLIC_URL}/mycake`} component={PimpMyCake} />
              <Route path={`${process.env.PUBLIC_URL}/contact`} component={Contact} />
            </Switch>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

export default Public;
