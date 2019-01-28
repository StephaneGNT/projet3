import React, { Component } from 'react';
import { Row } from 'reactstrap';
import NavArrowsLayout from './Navigation/NavArrowsLayout';
import Progressbar from './Progressbar';
import Confirmation from './confirmation'
import Price from './Price';
import '../../Assets/Styles/OrderDetail.css';


class OrderDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="content-zone">
        <Row className="text-center">
          <Progressbar />
        </Row>
        <Row>
          <Confirmation />
        </Row>
        <Row className="back-btn">
          <NavArrowsLayout />
          <Price />
        </Row>
      </div>
    );
  }
}

export default (OrderDetail);
