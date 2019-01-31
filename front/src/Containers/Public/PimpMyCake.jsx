import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import CakeInfo from './CakeInfo/CakeInfo';
import Composition from './IngredientsChoice/Composition';
// import Customization from './Customization/Customization';
import OrderDetail from './OrderConfirmation/OrderDetail';
import UserInfo from './FinalOrder/UserInfo';
import CustomizationStructure from './Customization/CustomizationStructure';
import ConfirmationPage from './OrderConfirmation/ConfirmationPage';

class PimpMyCake extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      // <div style={{ width: '100%', height: '100%' }}>
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path={`${process.env.PUBLIC_URL}/mycake`} component={CakeInfo} />
            <Route path={`${process.env.PUBLIC_URL}/mycake/composition`} component={Composition} />
            <Route path={`${process.env.PUBLIC_URL}/mycake/customCake`} component={CustomizationStructure} />
            <Route path={`${process.env.PUBLIC_URL}/mycake/orderDetail`} component={OrderDetail} />
            <Route path={`${process.env.PUBLIC_URL}/mycake/userInfo`} component={UserInfo} />
            <Route path={`${process.env.PUBLIC_URL}/mycake/orderConfirmation`} component={ConfirmationPage} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default PimpMyCake;
