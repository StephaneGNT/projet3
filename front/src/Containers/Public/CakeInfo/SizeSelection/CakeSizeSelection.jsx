import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Row, Container, Label,
} from 'reactstrap';
import changeCakeSize from '../../../../Actions/cakeActions/changeCakeSize';
import changeCakeStory from '../../../../Actions/cakeActions/changeCakeStory';

import '../../../../Assets/Styles/CakeSizeSelection.css';

class CakeSizeSelection extends Component {
  renderCakeDetails = () => {
    const { size, story } = this.props;
    if (size > 0) {
      return (
        `Personnes : ${size} - Etage(s) : ${story}`
      );
    }
    return <div />;
  }

  render() {
    const { selectCakeSize, selectCakeStory } = this.props;
    return (
      <Container style={{ minWidth: '100%' }}>
        <Label className="labels-perso mt-3">Choisissez la taille de votre gâteau</Label>
        <Row>
          <Label className="labels-perso mt-3">Pour combien de personnes ? </Label>
          <input placeholder="Nombre de personnes" onChange={event => selectCakeSize(parseInt(event.target.value, 10))} />
        </Row>
        <Row>
          <Label className="labels-perso mt-3">Combien d'étages ? </Label>
          <input placeholder="Nombre d'étages" onChange={event => selectCakeStory(parseInt(event.target.value, 10))} />
        </Row>
      </Container>
    );
  }
}

CakeSizeSelection.propTypes = {
  size: PropTypes.number.isRequired,
  story: PropTypes.number.isRequired,
  selectCakeSize: PropTypes.func.isRequired,
  selectCakeStory: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  size: state.cakeCharacteristics.size,
  story: state.cakeCharacteristics.story,
});

const mapDispatchToProps = dispatch => ({
  selectCakeSize: amount => dispatch(changeCakeSize(amount)),
  selectCakeStory: amount => dispatch(changeCakeStory(amount)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CakeSizeSelection);
