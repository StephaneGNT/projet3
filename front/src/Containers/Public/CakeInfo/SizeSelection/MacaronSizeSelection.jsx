import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Button, Row, Container, Label,
} from 'reactstrap';
import changeCakeSize from '../../../../Actions/cakeActions/changeCakeSize';
import changeCakeAmount from '../../../../Actions/cakeActions/changeCakeAmount';

import '../../../../Assets/Styles/MacaronSizeSelection.css';

const MacaronSizeSelection = (props) => {
  const { selectCakeSize, selectQuantity } = props;
  return (
    <Container style={{ minWidth: '100%' }} className="macaronSize text-center">
      <Label className="labels-perso mt-3">Choisissez la taille de vos macarons</Label>
      <Row className="macaronSizeSelection">
        <Button id="smallMacaron" onClick={() => selectCakeSize('S')}>Petit</Button>
        <Button id="bigMacaron" onClick={() => selectCakeSize('L')}>Gros</Button>
      </Row>
      <Row>
        <Label className="labels-perso mt-3">Choisissez le nombre de macarons que vous voulez </Label>
        <input placeholder="Quantité de macarons" onChange={event => selectQuantity(parseInt(event.target.value, 10))} />
      </Row>
    </Container>
  );
};

MacaronSizeSelection.propTypes = {
  selectCakeSize: PropTypes.func.isRequired,
  selectQuantity: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  selectCakeSize: size => dispatch(changeCakeSize(size)),
  selectQuantity: amount => dispatch(changeCakeAmount(amount)),
});

export default connect(null, mapDispatchToProps)(MacaronSizeSelection);
