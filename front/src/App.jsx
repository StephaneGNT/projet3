import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Public from './Containers/Public/Public';
import Admin from './Containers/Admin/Admin';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/admin" component={Admin} />
          <Route path="/" component={Public} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
