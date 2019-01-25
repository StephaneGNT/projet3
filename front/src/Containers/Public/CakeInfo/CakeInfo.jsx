
import {
  Label,
  Container,
  Row,
  Col,
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
import '../../../Assets/Styles/CakeInfo.css';

const CakeInfo = (props) => {
  const { type, localChangeCakeType, resetCakeStories } = props;

  return (
    <Container className="body-cake-select">
      <Row className="justify-content-around">
        <Col sm="5">
          <h3 className="mt-3">Choisissez votre type de douceur</h3>
        </Col>
      </Row>
      <Row className="mt-3 justify-content-around">
        <Col sm="2" className="text-center">
          <button
            type="button"
            className={`typeButton ${type === 'cookie' && 'selectionOutline'}`}
            id="cookieButton"
            title="A partir de 2,5€"
            onClick={() => { localChangeCakeType('cookie'); resetCakeStories(); }}
          >
            Cookie
          </button>
        </Col>
        <Col sm="2" className="text-center">
          <button
            type="button"
            className={`typeButton ${type === 'cake' && 'selectionOutline'}`}
            id="cakeButton"
            title="A partir de 8€"
            onClick={() => { localChangeCakeType('cake'); resetCakeStories(); }}
          >
            Cake
          </button>
        </Col>
        <Col sm="2" className="text-center">
          <button
            type="button"
            className={`typeButton ${type === 'cheesecake' && 'selectionOutline'}`}
            id="cheesecakeButton"
            title="A partir de 8€"
            onClick={() => { localChangeCakeType('cheesecake'); resetCakeStories(); }}
          >
            Cheesecake
          </button>
        </Col>
        <Col sm="2" className="text-center">
          <button
            type="button"
            className={`typeButton ${type === 'macaron' && 'selectionOutline'}`}
            id="macaronButton"
            title="A partir de 2,5€"
            onClick={() => { localChangeCakeType('macaron'); resetCakeStories(); }}
          >
            Macaron
          </button>
        </Col>
        <Col sm="2" className="text-center">
          <button
            type="button"
            className={`typeButton ${type === 'brownie' && 'selectionOutline'}`}
            id="brownieButton"
            title="A partir de 2,5€"
            onClick={() => { localChangeCakeType('brownie'); resetCakeStories(); }}
          >
            Brownie
          </button>
        </Col>
      </Row>
      <Row className="mt-5 justify-content-around">
        <Col sm="6">
          <Label for="choix_occasion" className="labels-perso mt-3">Pour quelle occasion voulez-vous votre gâteau ?</Label>
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
