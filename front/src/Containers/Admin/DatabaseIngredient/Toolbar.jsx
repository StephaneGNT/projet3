import React from 'react';
import {
  Row, Col, InputGroup, Input, InputGroupAddon, Button,
} from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import displaySearched from '../../../Actions/databaseActions/displaySearched';
import toggleFormNew from '../../../Actions/databaseActions/toggleFormNew';
import '../../../Assets/Styles/Toolbar.css';

const Toolbar = (props) => {
  const { searchElement, toggleForm } = props;

  return (
    <Row className="mt-3 toolbar">
      <Col className="sm-4">
        <InputGroup>
          <Input placeholder="Chercher" onChange={e => searchElement(e.target.value)} />
          <InputGroupAddon addonType="append"><span role="img" aria-label="image recherche">&#128270;</span></InputGroupAddon>
        </InputGroup>
      </Col>
      <Col className="sm-8 text-right">
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
