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
        <Row className="text-center">
          <Progressbar />
        </Row>
        Order detail
        <NavArrowsLayout />
      </div>
    );
  }
}

export default OrderDetail;
