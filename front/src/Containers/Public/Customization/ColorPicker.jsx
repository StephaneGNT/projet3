import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { GithubPicker } from 'react-color';
import { Row, Col } from 'reactstrap';
import { changeBgColor, changeFontColor } from '../../../Actions/customization_actions';
import '../../../Assets/Styles/Personalisation.css';

const ColorPicker = (props) => {
  const { changeBackgroundColor, changeFontColour } = props;
  return (
    <Row>
      <Col xs="12" lg="6">
        <p>Couleur de fond</p>
        <GithubPicker name="backgroundColor" onChange={changeBackgroundColor} />
      </Col>
      <Col xs="12" lg="6">
        <p>Couleur de l’écriture</p>
        <GithubPicker name="fontColor" onChange={changeFontColour} />
      </Col>
    </Row>
  );
};

ColorPicker.propTypes = {
  changeBackgroundColor: PropTypes.func.isRequired,
  changeFontColour: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  changeBackgroundColor: color => dispatch(changeBgColor(color)),
  changeFontColour: color => dispatch(changeFontColor(color)),
});

export default connect(null, mapDispatchToProps)(ColorPicker);
