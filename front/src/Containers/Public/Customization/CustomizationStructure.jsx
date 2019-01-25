import React from 'react';
import { Container, Col, Row } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import NavArrowsLayout from '../Navigation/NavArrowsLayout';
import { getCustomPrices } from '../../../Actions/customization_actions';
import Price from '../Price';
import CustomCenterInfo from './CustomCenterInfo';
import '../../../Assets/Styles/CustomFirstPage.css';
import Progressbar from '../Progressbar';


const CustomizationStructure = (props) => {
  const { sendPrices } = props;

  sendPrices();

  return (
    <Container>
      <Row className="text-center">
        <Progressbar />
      </Row>
      <Row style={{ minHeight: '65vh', background: 'rgba(255,255,255, 0.9)' }}>
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
  )
};

CustomizationStructure.propTypes = {
  sendPrices: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  sendPrices: prices => dispatch(getCustomPrices(prices)),
});

export default connect(null, mapDispatchToProps)(CustomizationStructure);
