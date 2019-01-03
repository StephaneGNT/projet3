import React from 'react';
import { connect } from 'react-redux';
import { Col, Row } from 'reactstrap';
import PropTypes from 'prop-types';
import IngredientsDisplay from './IngredientsDisplay';
import '../../../Assets/Styles/Ingredient.css';

const IngredientsCheeseCakeStructure = (props) => {
  const { flavor } = props;
  return (
    <Row style={{ height: '40vh', overflowY: 'scroll' }}>
      <Col md="12">
        <h1 style={{ textAlign: 'center' }}>{flavor[0].type}</h1>
      </Col>
      <Col md="12" style={{ display: 'flex', flexDirection: 'row' }}>
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
