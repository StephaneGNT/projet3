import React from 'react';
import { connect } from 'react-redux';
import {
  Container,
  Row,
  Col,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';
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
import { allowMessage } from '../../../Actions/customization_actions';

const Personalisation = (props) => {
  const {
    textDisabled,
    allowCakeMessage,
  } = props;

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
              <Label for="wantsCutomMessage"><u><b>Message personnalisé sur le gâteau?</b></u></Label>
              <br />
              <div className="messageYes">
                <div>
                  <Input className="textdecocheckbox" type="checkbox" onChange={allowCakeMessage} />
                </div>
                <div>
                  <p>Cochez si vous souhaitez ajouter une message au gâteau</p>
                </div>
              </div>
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

const mapDispatchToProps = dispatch => ({
  allowCakeMessage: () => dispatch(allowMessage()),
});

export default connect(mapStatetoProps, mapDispatchToProps)(Personalisation);
