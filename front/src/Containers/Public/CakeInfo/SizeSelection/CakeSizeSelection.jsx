import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Row,
  Col,
  Container,
  Label,
} from 'reactstrap';
import CakeSizeDisplay from './CakeSizeDisplay';

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
    return (
      <Container style={{ minWidth: '100%' }}>
        <Label className="labels-perso mt-3">Choisissez la taille de votre gâteau</Label>
        <Row>
          <Col sm="6" className="text-center table-head"> Nombre de personnes </Col>
          <Col sm="3" className="text-center table-head"> Diamètre </Col>
          <Col sm="3" />
        </Row>
        <CakeSizeDisplay />
        <Row className="cakeDetail mt-5">
          {this.renderCakeDetails()}
        </Row>
      </Container>
    );
  }
}

CakeSizeSelection.propTypes = {
  size: PropTypes.number.isRequired,
  story: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  size: state.cakeCharacteristics.size,
  story: state.cakeCharacteristics.story,
});

export default connect(mapStateToProps)(CakeSizeSelection);
