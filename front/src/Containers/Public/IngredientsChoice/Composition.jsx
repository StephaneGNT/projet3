import React from 'react';
import { connect } from 'react-redux';
import { Row, Col, Container } from 'reactstrap';

import IngredientsCakeStructure from './IngredientsCakeStructure';
import IngredientsMacaronStructure from './IngredientsMacaronStructure';
import IngredientsCookieStructure from './IngredientsCookieStructure';
import IngredientsButtons from './IngredientsButtons';
import Price from '../Price';
import CakeInProgress from '../CakeInProgress';

const Composition = (props) => {
  const { index, cake } = props;

  const renderComposition = (cakeType) => {
    let render;
    switch (cakeType) {
      case 'macaron': render = (<IngredientsMacaronStructure />); break;
      case 'cookie': render = (<IngredientsCookieStructure />); break;
      default: render = (
        <Row sm="12" style={{ height: '70vh' }}>
          <Col sm="8">
            <IngredientsCakeStructure />
          </Col>
          <Col sm="4" className="cakeAndPriceDisplay">
            <div className="cakeDisplay" />
            <CakeInProgress />
          </Col>
        </Row>
      );
    }
    return render;
  };

  return (
    <Container style={{ height: '80vh' }}>
      {renderComposition(cake.type)}
      <Row sm="12" style={{ height: '10vh' }}>
        <Price />
        <IngredientsButtons index={index} />
      </Row>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return (
    {
      cake: state.cakeCharacteristics,
      price: state.price,
      index: state.pageIndex,
    }
  );
};

export default connect(mapStateToProps)(Composition);
