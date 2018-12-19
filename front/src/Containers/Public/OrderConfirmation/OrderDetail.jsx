import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Progressbar from '../Progressbar';
import OrderCalendar from './OrderCalendar';
import CalendarTips from './CalendarTips';
import NavArrowsLayout from '../Navigation/NavArrowsLayout';
import Confirmation from './Confirmation';

import '../../../Assets/Styles/OrderDetail.css';


class OrderDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container>
        <Row className="text-center">
          <Progressbar />
        </Row>
        <Row>
          <Col sm="6" className="mt-4"><Confirmation /></Col>
          <Col sm="6">
            
            <Row center="xs" className="mt-4"><OrderCalendar /></Row>
            <Row center="xs" className="mt-4"><CalendarTips /></Row>
          </Col>
        </Row>
        <NavArrowsLayout />
      </Container>
    );
  }
}

export default OrderDetail;
