import React, { Component } from 'react';
import NavArrowsLayout from './Navigation/NavArrowsLayout';

class OrderDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        Order detail
        <NavArrowsLayout />
      </div>
    );
  }
}

export default OrderDetail;