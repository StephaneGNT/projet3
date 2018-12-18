
import { Label, Input, Container, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';
import NavArrowsLayout from '../Navigation/NavArrowsLayout';
import changeCakeType from '../../../Actions/cakeActions/changeCakeType';
import SizeSelection from './SizeSelection/SizeSelection';
import Tips from './Tips/Tips';
import CakeOccasion from './CakeOccasion';
import '../../../Assets/Styles/CakeInfo.css';

const CakeInfo = (props) => {
  const { localChangeCakeType } = props;

  return (
    <Container style={{ height: '80vh' }}>
      <Row className="justify-content-around">
        <Col sm="5">
          <h3 className="mt-3">Choisissez votre type de douceur</h3>
        </Col>
      </Row>
      <Row className="mt-3 justify-content-around">
        <Col sm="2" className="text-center">
          <button type="button" className="btn-marg" color="info" onClick={() => localChangeCakeType('cookie')}>
            Cookie
          </button>
        </Col>
        <Col sm="2" className="text-center">
          <button type="button" className="btn-marg" color="info" onClick={() => localChangeCakeType('cake')}>
            Cake
          </button>
        </Col>
        <Col sm="2" className="text-center">
          <button type="button" className="btn-marg" color="info" onClick={() => localChangeCakeType('cheesecake')}>
            Cheesecake
          </button>
        </Col>
        <Col sm="2" className="text-center">
          <button type="button" className="btn-marg" color="info" onClick={() => localChangeCakeType('macaron')}>
            Macaron
          </button>
        </Col>
        <Col sm="2" className="text-center">
          <button type="button" className="btn-marg" color="info" onClick={() => localChangeCakeType('brownie')}>
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
};

const mapStateToProps = state => ({
  dispatch: state.dispatch,
  selectedCakeType: state.cakeCharacteristics,
});

const mapDispatchToProps = dispatch => ({
  localChangeCakeType: cakeType => dispatch(changeCakeType(cakeType)),
});


export default connect(mapStateToProps, mapDispatchToProps)(CakeInfo);
