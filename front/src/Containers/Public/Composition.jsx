import React from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'reactstrap';

import IngredientsStrucure from './IngredientsStructure';
import IngredientsButtons from './IngredientsButtons';
import Price from './Price';
import CakeInProgress from './CakeInProgress'


const Composition = (props) => {
  const { price, index } = props;
  return (
    <Row>
      <Col sm="8">
        <IngredientsStrucure />
        <IngredientsButtons index={index} />
      </Col>
      <Col sm="4" className="cakeAndPricDisplay" style={{ backgroundColor: 'blue' }}>
        <CakeInProgress />
        <Price amount={price} />
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

export default connect(
  mapStateToProps,
  // mapDispatchToProps,
)(Composition);
