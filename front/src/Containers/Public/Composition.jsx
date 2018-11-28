import React from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'reactstrap';

import IngredientsStrucure from './IngredientsStructure';
import IngredientsButtons from './IngredientsButtons';
import Price from './Price';

const allowDrop = (ev) => {
  ev.preventDefault();
};

const drop = (ev) => {
  ev.preventDefault();
  const data = ev.dataTransfer.getData('text');
  ev.target.appendChild(document.getElementById(data));
};

const Composition = (props) => {
  const { price, index } = props;

  return (
    <Row>
      <Col sm="8">
        <IngredientsStrucure />
        <IngredientsButtons index={index} />
      </Col>
      <Col sm="4" className="cakeAndPricDisplay" style={{backgroundColor:'blue'}}>
        <div className="cakeDisplay" id="drag2" onDrop={event => drop(event)} onDragOver={event => allowDrop(event)} />
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

export default connect(mapStateToProps)(Composition);
