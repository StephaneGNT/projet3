import React from 'react';
import { connect } from 'react-redux';
import { Col, Row } from 'reactstrap';
import IngredientsDisplay from './IngredientsDisplay';

const IngredientsMacaronStructure = (props) => {
  const { perfumes, coquilles } = props;

  return (
    <Row style={{ height: '70vh' }}>
      <Col sm="6" style={{ overflowY: 'scroll', height: '100%' }}>
        <Row>
          <h1>{perfumes[0].type}</h1>
        </Row>
        <Row>
          <IngredientsDisplay elementToDisplay={perfumes} />
        </Row>
      </Col>
      <Col sm="6" style={{ overflowY: 'scroll', height: '100%' }}>
        <Row>
          <h1>{coquilles[0].type}</h1>
        </Row>
        <Row>
          <IngredientsDisplay elementToDisplay={coquilles} />
        </Row>
      </Col>
    </Row>
  );
};

const mapStateToProps = (state) => {
  return ({
    perfumes: state.macaronsPerfumes,
    coquilles: state.macaronsCoquilles,
  });
};

export default connect(mapStateToProps)(IngredientsMacaronStructure);
