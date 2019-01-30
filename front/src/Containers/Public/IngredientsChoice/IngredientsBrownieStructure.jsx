import React from 'react';
import { connect } from 'react-redux';
import { Col, Row } from 'reactstrap';
import PropTypes from 'prop-types';
import IngredientsDisplay from './IngredientsDisplay';

const IngredientsBrownieStructure = (props) => {
  const { bases } = props;
  return (
    <Row className="displayIngredient">
      <Col sm="12">
        <h1>{bases[0].type}</h1>
      </Col>
      <Col sm="12">
        <IngredientsDisplay elementToDisplay={bases} />
      </Col>
    </Row>
  );
};

IngredientsBrownieStructure.propTypes = {
  bases: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

const mapStateToProps = state => ({
  bases: state.ingredients.filter(ing => ing.type === 'Base brownie'),
});

export default connect(mapStateToProps)(IngredientsBrownieStructure);
