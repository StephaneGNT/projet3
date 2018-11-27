import React from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'reactstrap';
import IngredientsDisplay from './IngredientsDisplay';

import '../../Assets/Styles/IngredientsStructure.css';

const IngredientsStrucure = (props) => {
  const renderStructure = (index, bases, icings, fillings, toppings) => {
    let render;
    if (index === 2) {
      render = (
        <Row className="displayIngredient" style={{ height: '80vh', overflowY: 'scroll' }}>
          <Row>
            <h1>{bases[0].type}</h1>
          </Row>
          <Row>
            <IngredientsDisplay elementToDisplay={bases} />
          </Row>
        </Row>
      );
    } else if (index === 3) {
      render = (
        <Row className="displayIngredient">
          <Col sm="6" style={{ height: '80vh', overflowY: 'scroll' }}>
            <Row>
              <h1>{icings[0].type}</h1>
            </Row>
            <Row>
              <IngredientsDisplay elementToDisplay={icings} />
            </Row>
          </Col>
          <Col sm="6" style={{ height: '80vh', overflowY: 'scroll' }}>
            <Row>
              <h1>{fillings[0].type}</h1>
            </Row>
            <Row>
              <IngredientsDisplay elementToDisplay={fillings} />
            </Row>
          </Col>
        </Row>
      );
    } else {
      render = (
        <Row className="displayIngredient" style={{ height: '80vh', overflowY: 'scroll' }}>
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
  };

  return (
    renderStructure(props.index, props.bases, props.icings, props.fillings, props.toppings, props.cake)
  );
};

const mapStateToProps = (state) => {
  return (
    {
      bases: state.cakeBases,
      icings: state.cakeIcings,
      fillings: state.cakeFillings,
      toppings: state.cakeToppings,
      index: state.pageIndex,
      cake: state.cakeCharacteristics,
    }
  );
};

export default connect(
  mapStateToProps,
)(IngredientsStrucure);
