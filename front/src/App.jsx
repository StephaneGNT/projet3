import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
// import { createStore } from 'redux';
// import { Provider } from 'react-redux';

import Public from './Components/Public/Public';
import Admin from './Components/Admin/Admin';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // const store = createStore(reducer);

  render() {
    return (
      <div className="App">
        {/* <Provider store={store}> */}
          <BrowserRouter>
            <Switch>
              <Route path="/admin" component={Admin} />
              <Route path="/" component={Public} />
              
            </Switch>
          </BrowserRouter>
        {/* </Provider> */}
      </div>
    );
  };
};
