import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Input } from 'reactstrap';
import { updateCustomMessage } from '../../../Actions/customization_actions';
import '../../../Assets/Styles/Personalisation.css';

const CustomMessageInput = (props) => {
  const {
    bgColor,
    chosenFont,
    chosenBackgroundColor,
    chosenFontColor,
    font,
    fontColor,
    message,
    placeholder,
    updateMessage,
    wantsCustomMessage,
  } = props;
  const defaultStyle = {
    fontFamily: font,
    color: fontColor,
    backgroundColor: bgColor,
  };

  return (
    <div>
      <link
        rel="stylesheet"
        href={`https://fonts.googleapis.com/css?family=${font}`}
      />
      <Input
        type="textarea"
        style={
          wantsCustomMessage
            ? {
              fontFamily: chosenFont,
              fontSize: '1.2em',
              backgroundColor: chosenBackgroundColor,
              color: chosenFontColor,
            }
            : defaultStyle
        }
        name="text"
        id="wantsCustomMessage"
        maxLength="40"
        disabled={!wantsCustomMessage}
        onChange={updateMessage}
        value={wantsCustomMessage ? message : placeholder}
      />
    </div>
  );
};

CustomMessageInput.propTypes = {
  bgColor: PropTypes.string.isRequired,
  // chosenFont: PropTypes.string,
  // chosenBackgroundColor: PropTypes.string.isRequired,
  // chosenFontColor: PropTypes.string.isRequired,
  font: PropTypes.string.isRequired,
  fontColor: PropTypes.string.isRequired,
  // message: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  updateMessage: PropTypes.func.isRequired,
  wantsCustomMessage: PropTypes.bool.isRequired,
};

const mapStatetoProps = state => ({
  font: state.customization.customMessage.font,
  chosenFont: state.cakeCharacteristics.customization.customMessage.font,
  chosenFontColor: state.cakeCharacteristics.customization.customMessage.fontColor,
  chosenBackgroundColor: state.cakeCharacteristics.customization.customMessage.backgroundColor,
  placeholder: state.customization.customMessage_placeHolder,
  bgColor: state.customization.customMessage.backgroundColor,
  fontColor: state.customization.customMessage.fontColor,
  message: state.cakeCharacteristics.customization.customMessage.message,
  wantsCustomMessage: state.customization.wantsCustomMessage,
});

const mapDispatchToProps = dispatch => ({
  updateMessage: e => dispatch(updateCustomMessage(e)),
});

export default connect(mapStatetoProps, mapDispatchToProps)(CustomMessageInput);
