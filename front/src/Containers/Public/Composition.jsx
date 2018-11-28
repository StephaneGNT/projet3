import React from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'reactstrap';

import CakeIngredientsStructure from './CakeIngredientsStructure';
import MacaronsIngredientsStructure from './MacaronsIngredientsStructure';
import IngredientsButtons from './IngredientsButtons';
import Price from './Price';

const Composition = (props) => {
  const { price, index } = props;

  const renderComposition = (cakeType) => {
    
    let render;
    if (cakeType === 'cake' || cakeType === 'cheesecake') {
      render = (
        <Row style={{ height: '80vh' }}>
          <Col sm="8">
            <CakeIngredientsStructure />
            <IngredientsButtons index={index} />
          </Col>
          <Col sm="4" className="cakeAndPricDisplay" style={{backgroundColor:'blue'}}>
            <div className="cakeDisplay" />
            <Price amount={price} />
          </Col>
        </Row>
      );
    } else {
      render = (
        <Row style={{ height: '80vh' }}>
          <Col sm="12" style={{ height: '70vh' }}>
            <MacaronsIngredientsStructure />
          </Col>
          <Col sm="12" style={{ height: '10vh' }}>
            <Price amount={price} style={{ height: '5vh' }} />
            <IngredientsButtons index={index} />
          </Col>
        </Row>
      );
    }
    return render;
  };
  
  return (  
    renderComposition(props.cake.type)
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

export default connect(
  mapStateToProps,
  // mapDispatchToProps,
)(Composition);
