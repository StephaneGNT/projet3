import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col, Row } from 'reactstrap';
import IngredientsDisplay from './IngredientsDisplay';

class MacaronsIngredientsStructure extends Component {

  // Choix de la "base" des cookies ou des macarons
  renderStructure = (cake, perfumes, coquilles, bases) => {
    let render;

    // Choix du parfum et de la coquille du macaron
    if (cake.type === 'macaron') {
      render = (
        <Row className="displayIngredient">
          <Col sm="6" style={{ overflowY: 'scroll', backgroundColor: 'red' }}>
            <Row>
              <h1>{perfumes[0].type}</h1>
            </Row>
            <Row>
              <IngredientsDisplay elementToDisplay={perfumes} />
            </Row>
          </Col>
          <Col sm="6" style={{ overflowY: 'scroll' }}>
            <Row>
              <h1>{coquilles[0].type}</h1>
            </Row>
            <Row>
              <IngredientsDisplay elementToDisplay={coquilles} />
            </Row>
          </Col>
        </Row>
      );
    }
    // ou choix du type de cookie
    else {
      render = (
        <Row className="displayIngredient" style={{ overflowY: 'scroll', backgroundColor: 'red' }}>
          <Col sm="12">
            <h1>{bases[0].type}</h1>
          </Col>
          <Col sm="12" style={{ display: 'flex', flexDirection: 'row'}}>
            <IngredientsDisplay elementToDisplay={bases} />
          </Col>
        </Row>
      );
    }
    return render;
  }

  render() {
    return (
      this.renderStructure(this.props.cake, this.props.perfumes, this.props.coquilles, this.props.bases)
    );
  }
}

const mapStateToProps = (state) => {
  return ({
    cake: state.cakeCharacteristics,
    perfumes: state.macaronsPerfumes,
    coquilles: state.macaronsCoquilles,
    bases: state.cookiesBases,
  });
};

export default connect(mapStateToProps)(MacaronsIngredientsStructure);
