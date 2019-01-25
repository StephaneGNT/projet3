import React from 'react';
import { Container, Col, Row } from 'reactstrap';
import NavArrowsLayout from '../Navigation/NavArrowsLayout';
import Price from '../Price';
// import LeftPics from './LeftPics';
import CustomCenterInfo from './CustomCenterInfo';
// import RightPics from './RightPics';

import '../../../Assets/Styles/CustomFirstPage.css';
import Progressbar from '../Progressbar';

const CustomizationStructure = () => (
  <Container>
    <Row className="text-center">
      <Progressbar />
    </Row>
    <Row style={{ minHeight: '65vh', background: 'rgba(255,255,255, 1)' }}>
      {/* <Col sm={1} xs={0}>
        <LeftPics />
      </Col> */}
      <Col sm={12} xs={12}>
        <CustomCenterInfo />
      </Col>
      {/* <Col sm={1} xs={0}>
        <RightPics />
      </Col> */}
    </Row>
    <Row>
      <NavArrowsLayout />
      <Price />
    </Row>
  </Container>
);

export default CustomizationStructure;
