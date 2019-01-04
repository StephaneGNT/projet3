import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Progressbar from '../Progressbar';
import OrderCalendar from './OrderCalendar';
import CalendarTips from './CalendarTips';
import NavArrowsLayout from '../Navigation/NavArrowsLayout';
import Confirmation from './Confirmation';
import CakeImage from './CakeImage';
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
        <Row style={{ paddingTop: '5vh' }}>
          <Col sm="4">
            <Row center="xs" className="mt-3"><OrderCalendar /></Row>
            <Row center="xs" className="mt-3"><CalendarTips /></Row>
          </Col>
          <Col sm="5" className="mt-4"><Confirmation /></Col>
          <Col sm="3" className="mt-4"><CakeImage /></Col>
        </Row>
        <NavArrowsLayout />
      </Container>
    );
  }
}

export default OrderDetail;
