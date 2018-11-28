import React from 'react';
import { connect } from 'react-redux';
import { Col, Row } from 'reactstrap';
import IngredientsDisplay from './IngredientsDisplay';

const IngredientsMacaronStructure = (props) => {
  return (
    <Row className="displayIngredient" style={{ overflowY: 'scroll' }}>
      <Col sm="6" style={{ overflowY: 'scroll', backgroundColor: 'red' }}>
        <Row>
          <h1>{props.perfumes[0].type}</h1>
        </Row>
        <Row>
          <IngredientsDisplay elementToDisplay={props.perfumes} />
        </Row>
      </Col>
      <Col sm="6" style={{ overflowY: 'scroll' }}>
        <Row>
          <h1>{props.coquilles[0].type}</h1>
        </Row>
        <Row>
          <IngredientsDisplay elementToDisplay={props.coquilles} />
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
