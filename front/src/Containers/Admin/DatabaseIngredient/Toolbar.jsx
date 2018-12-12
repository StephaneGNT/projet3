import React from 'react';
import {
  Row, Col, InputGroup, Input, InputGroupAddon, Button,
} from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import displaySearched from '../../../Actions/databaseActions/displaySearched';
import toggleFormNew from '../../../Actions/databaseActions/toggleFormNew';

const Toolbar = (props) => {
  const { searchElement, toggleForm } = props;

  return (
    <Row>
      <Col>
        <InputGroup>
          <Input placeholder="Chercher" onChange={e => searchElement(e.target.value)} />
          <InputGroupAddon addonType="append"><span role="img" aria-label="image recherche">&#128270;</span></InputGroupAddon>
        </InputGroup>
      </Col>
      <Col>
        <Button onClick={() => toggleForm(true)}>Nouveau</Button>
      </Col>
    </Row>
  );
};

Toolbar.propTypes = {
  searchElement: PropTypes.func.isRequired,
  toggleForm: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  searchElement: category => dispatch(displaySearched(category)),
  toggleForm: display => dispatch(toggleFormNew(display)),
});

export default connect(null, mapDispatchToProps)(Toolbar);
