import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Button, Row, Container, Label, Input, Col,
} from 'reactstrap';
import changeCakeSize from '../../../../Actions/cakeActions/changeCakeSize';
import changeCakeAmount from '../../../../Actions/cakeActions/changeCakeAmount';

import '../../../../Assets/Styles/MacaronSizeSelection.css';

const MacaronSizeSelection = (props) => {
  const { size, selectCakeSize, selectQuantity } = props;
  return (
    <Container className="macaronSizeSelection">
      <Label className="lb-1">Choisissez la taille & le nombre de Macarons souhaités :</Label>
      <Row>
        <Button id="smallMacaron" onClick={() => selectCakeSize('S')} className={size === 'S' && 'selectionOutline'}>Petit</Button>
        <Button id="bigMacaron" onClick={() => selectCakeSize('L')} className={size === 'L' && 'selectionOutline'}>Gros</Button>
      </Row>
      <Row className="row-nbr-choice">
        <Col sm="7">
          <Input bsSize="sm" placeholder="Quantité de macarons" onChange={event => selectQuantity(parseInt(event.target.value, 10))} />
        </Col>
      </Row>
    </Container>
  );
};

MacaronSizeSelection.propTypes = {
  size: PropTypes.string.isRequired,
  selectCakeSize: PropTypes.func.isRequired,
  selectQuantity: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({ size: state.cakeCharacteristics.size });

const mapDispatchToProps = dispatch => ({
  selectCakeSize: size => dispatch(changeCakeSize(size)),
  selectQuantity: amount => dispatch(changeCakeAmount(amount)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MacaronSizeSelection);
