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
      <Container className="body-row">
        <Row>
          <Progressbar />
        </Row>
        <Row>
          <Confirmation />
        </Row>
        <Row className="back-btn">
          <NavArrowsLayout />
          <Price />
        </Row>
      </Container>
    );
  }
}

export default (OrderDetail);
