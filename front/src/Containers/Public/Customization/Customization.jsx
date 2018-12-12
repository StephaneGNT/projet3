import React from 'react';
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

const Personalisation = (props) => {
  const { textDisabled } = props;

  return (
    <div>
      <Container className="container">
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
              <div className={textDisabled ? 'greyScale' : null}>
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
        <Price />
      </Container>
      <NavArrowsLayout />
    </div>
  );
};

const mapStatetoProps = state => ({
  textDisabled: state.customization.textDisabled,
});

export default connect(mapStatetoProps, null)(Personalisation);
