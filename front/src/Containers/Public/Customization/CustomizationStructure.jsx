import React from 'react';
import { Container, Col, Row } from 'reactstrap';
import NavArrowsLayout from '../Navigation/NavArrowsLayout';
import Price from '../Price';
import CustomCenterInfo from './CustomCenterInfo';
import '../../../Assets/Styles/CustomFirstPage.css';
import Progressbar from '../Progressbar';

const CustomizationStructure = () => (
  <Container className="body-row">
    <Row className="text-center">
      <Progressbar />
    </Row>
    <Row>
      <Col sm={12} xs={12}>
        <CustomCenterInfo />
      </Col>
    </Row>
    <Row>
      <NavArrowsLayout />
      <Price />
    </Row>
  </Container>
);

export default CustomizationStructure;
