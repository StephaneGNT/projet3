import React from 'react';
import { connect } from 'react-redux';
import { Col, Row } from 'reactstrap';
import IngredientsDisplay from './IngredientsDisplay';

const IngredientsBrownieStructure = (props) => {
  const { bases } = props;
  return (
    <Row style={{ height: '70vh', overflowY: 'scroll' }}>
      <Col sm="12">
        <h1 style={{ textAlign: 'center' }}>{bases[0].type}</h1>
      </Col>
      <Col sm="12" style={{ display: 'flex', flexDirection: 'row' }}>
        <IngredientsDisplay elementToDisplay={bases} />
      </Col>
    </Row>
  );
};

const mapStateToProps = state => ({
  bases: state.browniesBases,
});

export default connect(mapStateToProps)(IngredientsBrownieStructure);
