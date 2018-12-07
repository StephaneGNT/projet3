import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Button,
  Row,
  Col,
  Container,
  Label,
} from 'reactstrap';
import CakeSizeDisplay from './CakeSizeDisplay';

import '../../../Assets/Styles/CakeSizeSelection.css';

class CakeSizeSelection extends Component {

  renderNombreDePersonnes = () => {
    const { size } = this.props;
    if (size > 0) {
      return (
        <p>
          Nombre de personnes :
          {size}
        </p>);
    }
    return <div />;
  }

  renderNombreDeStories = () => {
    const { size, story } = this.props;
    if (size > 0) {
      return (
        <p>
          Nombre d
          {"'"}
          étages :
          {story}
        </p>
      );
    }
    return <div />;
  }

  // renderConfirmation = () => {
  //   const { size, story } = this.props;
  //   if (size > 0) return (<Button onClick={() => this.sendCakeInfos(size, story)}> Confirmer </Button>);
  //   return <div />;
  // }

  render() {
    return (
      <Container style={{ minWidth: '100%' }}>
        <Label className="labels-perso mt-3">Choisissez la taille de votre gâteau</Label>
        <Row>
          <Col sm="6"> Nombre de personnes </Col>
          <Col sm="3"> Diamètre </Col>
          <Col sm="3" />
        </Row>
        <CakeSizeDisplay />
        <Row>
          {this.renderNombreDePersonnes()}
        </Row>
        <Row>
          {this.renderNombreDeStories()}
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  size: state.cakeCharacteristics.size,
  story: state.cakeCharacteristics.story,
});

export default connect(mapStateToProps)(CakeSizeSelection);
