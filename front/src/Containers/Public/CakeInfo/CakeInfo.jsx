import {
  Label, Container, Row, Col, Button,
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
  const { localChangeCakeType, resetCakeStories } = props;

  return (
    <Container style={{ height: '80vh' }}>
      <Row className="justify-content-around">
        <Col sm="5">
          <h3 className="mt-3">Choisissez votre type de douceur :</h3>
        </Col>
      </Row>
      <Row className="mt-3 justify-content-around">
        <Col sm="2" className="text-center">
          <Button className="btn" color="info" onClick={() => { localChangeCakeType('cookie'); resetCakeStories(); }}>
            Cookie
          </Button>
        </Col>
        <Col sm="2" className="text-center">
          <Button className="btn-marg" color="info" onClick={() => { localChangeCakeType('cake'); resetCakeStories(); }}>
            Cake
          </Button>
        </Col>
        <Col sm="2" className="text-center">
          <Button className="btn-marg" color="info" onClick={() => { localChangeCakeType('cheesecake'); resetCakeStories(); }}>
            Cheesecake
          </Button>
        </Col>
        <Col sm="2" className="text-center">
          <Button className="btn-marg" color="info" onClick={() => { localChangeCakeType('macaron'); resetCakeStories(); }}>
            Macaron
          </Button>
        </Col>
        <Col sm="2" className="text-center">
          <Button className="btn-marg" color="info" onClick={() => { localChangeCakeType('brownie'); resetCakeStories(); }}>
            Brownie
          </Button>
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
          <Row className="text-right">
            <NavArrowsLayout />
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

CakeInfo.propTypes = {
  localChangeCakeType: PropTypes.func.isRequired,
  resetCakeStories: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  dispatch: state.dispatch,
  selectedCakeType: state.cakeCharacteristics,
});

const mapDispatchToProps = dispatch => ({
  localChangeCakeType: cakeType => dispatch(changeCakeType(cakeType)),
  resetCakeStories: () => dispatch(resetCakePieces()),
});


export default connect(mapStateToProps, mapDispatchToProps)(CakeInfo);
