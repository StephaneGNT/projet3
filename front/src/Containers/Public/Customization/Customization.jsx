import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Container,
  Row,
  Col,
  FormGroup,
} from 'reactstrap';
import CustomMessage from './CustomMessage';
import CustomMessageInput from './CustomMessageInput';
import ColorPicker from './ColorPicker';
import Price from '../Price';
import FontPicker from './FontPicker';
import CustomWish from './CustomWish';
import Decoration from './Decoration';
import DecorationExamples from './DecorationExamples';
import NavArrowsLayout from '../Navigation/NavArrowsLayout';
import Progressbar from '../Progressbar';
import '../../../Assets/Styles/Personalisation.css';

const Customization = (props) => {
  const { wantsCustomMessage } = props;
  return (
    <div>
      <Container className="content-zone">
        <Row className="text-center">
          <Progressbar />
        </Row>
        <Row className="title">
          <h1>Personnalisation</h1>
        </Row>
        <Row>
          <Col sm="6" lg="6" className="column">
            <FormGroup>
              <CustomMessage />
              <div className={!wantsCustomMessage ? 'greyScale' : null}>
                <CustomMessageInput />
                <ColorPicker />
                <FontPicker />
              </div>
              <CustomWish />
            </FormGroup>
          </Col>
          <Col sm="6" lg="6" className="column">
            <Decoration />
            <DecorationExamples />
          </Col>
        </Row>
      </Container>
      <Row className="back-btn">
        <NavArrowsLayout />
        <Price />
      </Row>
    </div>
  );
};

Customization.propTypes = {
  wantsCustomMessage: PropTypes.bool.isRequired,
};

const mapStatetoProps = state => ({
  wantsCustomMessage: state.customization.wantsCustomMessage,
});

export default connect(mapStatetoProps, null)(Customization);
