import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col, Row } from 'reactstrap';
import IngredientsDisplay from './IngredientsDisplay';

class IngredientsCakeStructure extends Component {

  // Choix des ingrédients des cakes et cheesecakes
  renderStructure = (cake, bases, icings, fillings, toppings, perfumes, index) => {
    let render;
    let elementToDisplay;

    // Premier écran : Choix de la base du cake, ou du parfum du cheesecake
    if (index === 2) {
      if (cake.type === 'cheesecake') elementToDisplay = perfumes;
      else elementToDisplay = bases;

      render = (
        <Row className="displayIngredient" style={{ overflowY: 'scroll', height: '100%' }}>
          <Row style={{ width: '100%' }}>
            <h1>{elementToDisplay[0].type}</h1>
          </Row>
          <Row style={{ width: '100%' }}>
            <IngredientsDisplay elementToDisplay={elementToDisplay} />
          </Row>
        </Row>
      );
    }
    // Deuxième écran : Choix du glaçage et filling du cake,
    else if (index === 3) {
      if (cake.type === 'cake') {
        render = (
          <Row className="displayIngredient" style={{ height: '100%' }}>
            <Col sm="6" style={{ overflowY: 'scroll' }}>
              <Row>
                <h1>{icings[0].type}</h1>
              </Row>
              <Row>
                <IngredientsDisplay elementToDisplay={icings} />
              </Row>
            </Col>
            <Col sm="6" style={{ overflowY: 'scroll' }}>
              <Row>
                <h1>{fillings[0].type}</h1>
              </Row>
              <Row>
                <IngredientsDisplay elementToDisplay={fillings} />
              </Row>
            </Col>
          </Row>
        );
      }
      // ou choix du glaçage du cheesecake
      else {
        render = (
          <Row className="displayIngredient" style={{ overflowY: 'scroll', height: '100%' }}>
            <Row>
              <h1>{icings[0].type}</h1>
            </Row>
            <Row>
              <IngredientsDisplay elementToDisplay={icings} />
            </Row>
          </Row>
        );
      }
    // Troisième écran : Choix des toppings
    } else if (index === 4) {
      render = (
        <Row className="displayIngredient" style={{ overflowY: 'scroll', height: '100%' }}>
          <Row>
            <h1>{toppings[0].type}</h1>
          </Row>
          <Row>
            <IngredientsDisplay elementToDisplay={toppings} />
          </Row>
        </Row>
      );
    }
    return render;
  }

  render() {
    const
      {
        cake,
        bases,
        icings,
        fillings,
        toppings,
        perfumes,
        index,
      } = this.props;

    return (
      this.renderStructure(cake, bases, icings, fillings, toppings, perfumes, index)
    );
  }
}

const mapStateToProps = (state) => {
  return ({
    cake: state.cakeCharacteristics,
    bases: state.cakeBases,
    fillings: state.cakeFillings,
    icings: state.cakeIcings,
    perfumes: state.cheesecakePerfumes,
    toppings: state.cakeToppings,
    index: state.pageIndex,
  });
};

export default connect(mapStateToProps)(IngredientsCakeStructure);
