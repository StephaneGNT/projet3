
import {
  Label,
  Container,
  Row,
  Col,
  Badge,
} from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';
import NavArrowsLayout from '../Navigation/NavArrowsLayout';
import changeCakeType from '../../../Actions/cakeActions/changeCakeType';
import { resetCakePieces } from '../../../Actions/cakeActions/changeCakePiecesAndStories';
import SizeSelection from './SizeSelection/SizeSelection';
import Tips from './Tips/Tips';
import CakeOccasion from './CakeOccasion';
import '../../../Assets/Styles/Public.css';

const CakeInfo = (props) => {
  const { type, localChangeCakeType, resetCakeStories } = props;

  return (
    <Container className="body-row">
      <Row className="justify-content-around">
        <Col sm="12">
          <div className="labels-perso-btn-douceurs">Choisissez votre type de douceur :</div>
        </Col>
      </Row>
      <Row className="b-ligne-button">
        <Col sm="2">
          <button
            type="button"
            className={`typeButton ${type === 'cookie' && 'selectionOutline'}`}
            id="cookieButton"
            title="A partir de 2,5€"
            onClick={() => { localChangeCakeType('cookie'); resetCakeStories(); }}
          >
            <txt-btn-sweet>Cookie</txt-btn-sweet>
          </button>
        </Col>
        <Col sm="2">
          <button
            type="button"
            className={`typeButton ${type === 'cake' && 'selectionOutline'}`}
            id="cakeButton"
            title="A partir de 8€"
            onClick={() => { localChangeCakeType('cake'); resetCakeStories(); }}
          >
            <txt-btn-sweet>Cake</txt-btn-sweet>
          </button>
        </Col>
        <Col sm="2">
          <button
            type="button"
            className={`typeButton ${type === 'cheesecake' && 'selectionOutline'}`}
            id="cheesecakeButton"
            title="A partir de 8€"
            onClick={() => { localChangeCakeType('cheesecake'); resetCakeStories(); }}
          >
            <txt-btn-sweet>Cheesecake</txt-btn-sweet>
          </button>
        </Col>
        <Col sm="2">
          <button
            type="button"
            className={`typeButton ${type === 'macaron' && 'selectionOutline'}`}
            id="macaronButton"
            title="A partir de 2,5€"
            onClick={() => { localChangeCakeType('macaron'); resetCakeStories(); }}
          >
            <txt-btn-sweet>Macarons</txt-btn-sweet>
          </button>
        </Col>
        <Col sm="2">
          <button
            type="button"
            className={`typeButton ${type === 'brownie' && 'selectionOutline'}`}
            id="brownieButton"
            title="A partir de 2,5€"
            onClick={() => { localChangeCakeType('brownie'); resetCakeStories(); }}
          >
            <txt-btn-sweet>Brownies</txt-btn-sweet>
          </button>
        </Col>
      </Row>
      <Row className="mt-5 justify-content-around">
        <Col sm="6">
          <Label for="choix_occasion" className="lb-0">Pour quelle occasion voulez-vous votre délice ?</Label>
          <CakeOccasion />
          <SizeSelection />
        </Col>
        <Col sm="5" className="tipsColumn">
          <Row>
            <Tips />
          </Row>
        </Col>
      </Row>
      <div className="btn-group">
        <NavArrowsLayout />
      </div>
    </Container>
  );
};

CakeInfo.propTypes = {
  localChangeCakeType: PropTypes.func.isRequired,
  resetCakeStories: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  dispatch: state.dispatch,
  type: state.cakeCharacteristics.type,
});

const mapDispatchToProps = dispatch => ({
  localChangeCakeType: cakeType => dispatch(changeCakeType(cakeType)),
  resetCakeStories: () => dispatch(resetCakePieces()),
});


export default connect(mapStateToProps, mapDispatchToProps)(CakeInfo);
