
import '../../../Assets/Styles/CakeInfo.css';
import { Label, Input, Container, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';
import NavArrowsLayout from '../Navigation/NavArrowsLayout';
import changeCakeType from '../../../Actions/cakeActions/changeCakeType';
import SizeSelection from './SizeSelection/SizeSelection';
import Tips from './Tips/Tips';
import '../../../Assets/Styles/CakeInfo.css';

const CakeInfo = (props) => {
  const { localChangeCakeType } = props;

  return (
    <Container style={{ height: '80vh' }}>
      <Row className="justify-content-around">
        <Col sm="5">
          <h3 className="mt-3">Choississez votre type de douceur :</h3>
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
          <Input type="select" name="select">
            <option>Anniversaire d'adulte</option>
            <option>Anniversaire d'enfant</option>
            <option>Apéro</option>
            <option>Baptême</option>
            <option>Babyshower, naissance</option>
            <option>Brunch</option>
            <option>Disney</option>
            <option>Fête des mères</option>
            <option>Fête des pères</option>
            <option>Halloween</option>
            <option>Mariage</option>
            <option>Sport</option>
            <option>Pot de départ</option>
            <option>Noël</option>
            <option>Pâques</option>
            <option>Remerciements</option>
            <option>Enterrement de vie de fille/garçon</option>
          </Input>
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
      {/* <Row className="justify-content-center mt-3">
        
      </Row> */}
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
