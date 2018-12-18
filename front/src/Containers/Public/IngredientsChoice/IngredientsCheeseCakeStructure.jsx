import React from 'react';
import { connect } from 'react-redux';
import { Col, Row } from 'reactstrap';
import PropTypes from 'prop-types';
import IngredientsDisplay from './IngredientsDisplay';

const IngredientsCheeseCakeStructure = (props) => {
  const { flavor } = props;
  return (
    <Row style={{ height: '70vh', overflowY: 'scroll' }}>
      <Col sm="12">
        <h1 style={{ textAlign: 'center' }}>{flavor[0].type}</h1>
      </Col>
      <Col sm="12" style={{ display: 'flex', flexDirection: 'row' }}>
        <IngredientsDisplay elementToDisplay={flavor} />
      </Col>
    </Row>
  );
};

IngredientsCheeseCakeStructure.propTypes = {
  flavor: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

const mapStateToProps = state => ({
  flavor: state.cheesecakeFlavors,
});

export default connect(mapStateToProps)(IngredientsCheeseCakeStructure);
