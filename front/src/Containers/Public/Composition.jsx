import React from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'reactstrap';

import IngredientsCakeStructure from './IngredientsCakeStructure';
import IngredientsMacaronStructure from './IngredientsMacaronStructure';
import IngredientsCookieStructure from './IngredientsCookieStructure';
import IngredientsButtons from './IngredientsButtons';
import Price from './Price';

const Composition = (props) => {
  const { price, index } = props;

  const renderComposition = (cakeType) => {
    
    let render;
    if (cakeType === 'cake' || cakeType === 'cheesecake') {
      render = (
        <Row style={{ height: '70vh' }}>
          <Col sm="8">
            <IngredientsCakeStructure />
          </Col>
          <Col sm="4" className="cakeAndPriceDisplay" style={{backgroundColor:'blue'}}>
            <div className="cakeDisplay" />
          </Col>
        </Row>
      );
    } else if (cakeType === 'macaron') {
      render = (
        <Row style={{ height: '70vh' }}>
          <Col sm="12">
            <IngredientsMacaronStructure />
          </Col>
        </Row>
      );
    } else {
      render = (
        <Row style={{ height: '70vh' }}>
          <Col sm="12">
            <IngredientsCookieStructure />
          </Col>
        </Row>
      );
    }
    return render;
  };
  
  return (
    <Row>
      {renderComposition(props.cake.type)}
      <Col style={{ height: '10vh' }}>
        <Price amount={price} />
        <IngredientsButtons index={index} />
      </Col>
    </Row>
    
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
