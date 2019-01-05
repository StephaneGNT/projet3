import React from 'react';
import { connect } from 'react-redux';
import { Col, Row } from 'reactstrap';
import PropTypes from 'prop-types';
import IngredientsDisplay from './IngredientsDisplay';

const IngredientsMacaronStructure = (props) => {
  const { flavor, shell } = props;

  return (
    <Row>
      <Col sm="6" style={{ height: 'auto' }}>
        <Row style={{ position: 'sticky', top: '0' }}>
          <h1>{flavor[0].type}</h1>
        </Row>
        <Row>
          <IngredientsDisplay elementToDisplay={flavor} />
        </Row>
      </Col>
      <Col sm="6" style={{ height: 'auto' }}>
        <Row>
          <h1>{shell[0].type}</h1>
        </Row>
        <Row>
          <IngredientsDisplay elementToDisplay={shell} />
        </Row>
      </Col>
    </Row>
  );
};

IngredientsMacaronStructure.propTypes = {
  flavor: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  shell: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

const mapStateToProps = state => ({
  flavor: state.macaronsFlavors,
  shell: state.macaronsShells,
});

export default connect(mapStateToProps)(IngredientsMacaronStructure);
