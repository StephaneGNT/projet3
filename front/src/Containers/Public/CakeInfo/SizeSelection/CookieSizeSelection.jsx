import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Button, Row, Container, Label, Col,
} from 'reactstrap';
import changeCakeSize from '../../../../Actions/cakeActions/changeCakeSize';
import changeCakeAmount from '../../../../Actions/cakeActions/changeCakeAmount';

import '../../../../Assets/Styles/CookieSizeSelection.css';

const CakeSizeSelection = (props) => {
  const { size, selectCakeSize, selectQuantity } = props;
  return (
    <Container className="cookieSizeSelection">
      <Label className="lb-1">Choisissez la taille de vos cookies</Label>
      <Row className="sizeSelection">
        <Col className="sm-4"><Button id="smallCookie" onClick={() => selectCakeSize('S')} className={size === 'S' && 'selectionOutline'}>Petit</Button></Col>
        <Col className="sm-4"><Button id="averageCookie" onClick={() => selectCakeSize('M')} className={size === 'M' && 'selectionOutline'}>Moyen</Button></Col>
        <Col className="sm-4"><Button id="bigCookie" onClick={() => selectCakeSize('L')} className={size === 'L' && 'selectionOutline'}>Gros</Button></Col>
      </Row>
      <Row className="row-nbr-choice">
        <Col sm="7">
          <input placeholder="Quantité de cookies" onChange={event => selectQuantity(parseInt(event.target.value, 10))} />
        </Col>
      </Row>
    </Container>
  );
};

CakeSizeSelection.propTypes = {
  size: PropTypes.string.isRequired,
  selectCakeSize: PropTypes.func.isRequired,
  selectQuantity: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({ size: state.cakeCharacteristics.size });

const mapDispatchToProps = dispatch => ({
  selectCakeSize: size => dispatch(changeCakeSize(size)),
  selectQuantity: amount => dispatch(changeCakeAmount(amount)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CakeSizeSelection);
