import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { SketchPicker } from 'react-color';
import {
  Button,
  ButtonGroup,
  Row,
  Col,
} from 'reactstrap';
import FontPicker from './FontPicker';
// import { changeBgColor, changeFontColor } from '../../../Actions/customization_actions';
import '../../../Assets/Styles/Customization.css';

const Beautify = (props) => {
  const { customSummary, configState } = props;

  const modifyBgColor = (color) => {
    const { modify } = props;
    const type = 'CHANGE_BACKGROUND_COLOR';
    modify(type, color.hex);
  };

  const modifyFontColor = (color) => {
    const { modify } = props;
    const type = 'CHANGE_FONT_COLOR';
    modify(type, color.hex);
  };

  const modifyFontFamily = (font) => {
    const { modify } = props;
    const type = 'CHOOSE_FONT_FAMILY';
    modify(type, font);
  };


  return (
    <div>
      <Row>
        {(() => {
          switch (configState) {
            case 'fontStyle':
              return <FontPicker sendFontChoice={modifyFontFamily} />;
            case 'fontColor':
              return (
                <SketchPicker
                  disableAlpha
                  color={customSummary.msgColor}
                  className="palette"
                  name="fontColor"
                  onChange={modifyFontColor}
                />
              );
            case 'backgroundColor':
              return (
                <SketchPicker
                  disableAlpha
                  color={customSummary.msgBgColor}
                  className="palette"
                  name="backgroundColor"
                  onChange={modifyBgColor}
                />
              );
            default:
              return null;
          }
        })()}
      </Row>
    </div>
  );
};

Beautify.propTypes = {
  modify: PropTypes.func.isRequired,
  configState: PropTypes.string.isRequired,
  customSummary: PropTypes.shape({}).isRequired,
};

export default Beautify;
