import React, { Component } from 'react';
import { Row } from 'reactstrap';
import NavArrowsLayout from './Navigation/NavArrowsLayout';
import Progressbar from './Progressbar';


class OrderDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        Order detail
        <Row>
          <Progressbar />
        </Row>
        <NavArrowsLayout />
      </div>
    );
  }
}

export default OrderDetail;