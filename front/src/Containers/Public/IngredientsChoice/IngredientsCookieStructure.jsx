import React from 'react';
import { connect } from 'react-redux';
import { Col, Row } from 'reactstrap';
import PropTypes from 'prop-types';
import IngredientsDisplay from './IngredientsDisplay';

const IngredientsCookieStructure = (props) => {
  const { bases } = props;
  return (
    <Row>
      <Col sm="12">
        <h1 style={{ textAlign: 'center', position: 'sticky', top: '0' }}>{bases[0].type}</h1>
      </Col>
      <Col sm="12" style={{ display: 'flex', flexDirection: 'row' }}>
        <IngredientsDisplay elementToDisplay={bases} />
      </Col>
    </Row>
  );
};

IngredientsCookieStructure.propTypes = {
  bases: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

const mapStateToProps = state => ({
  bases: state.cookiesBases,
});

export default connect(mapStateToProps)(IngredientsCookieStructure);
