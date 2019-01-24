import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  ButtonGroup,
  Row,
  Col,
} from 'reactstrap';
import '../../../Assets/Styles/Customization.css';

const BeautifyButtons = (props) => {
  const buttonStyle = { backgroundColor: 'rgb(129, 38, 38)' };
  const { configState } = props;

  const changeConfigurator = (configType) => {
    const { sendConfigState } = props;
    sendConfigState(configType);
  };

  return (
    <ButtonGroup className="buttonGroup">
      <Button
        onClick={() => changeConfigurator('fontStyle')}
        style={configState === 'fontStyle' ? buttonStyle : {}}
      >
        Style de l’écriture
      </Button>

      <Button
        onClick={() => changeConfigurator('fontColor')}
        style={configState === 'fontColor' ? buttonStyle : {}}
      >
        Couleur de l’écriture
      </Button>
      <Button
        onClick={() => changeConfigurator('backgroundColor')}
        style={configState === 'backgroundColor' ? buttonStyle : {}}
      >
        Couleur de fond
      </Button>
    </ButtonGroup>
  );
};

BeautifyButtons.propTypes = {
  sendConfigState: PropTypes.func.isRequired,
  configState: PropTypes.string.isRequired,
};

export default BeautifyButtons;
