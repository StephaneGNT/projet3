import React from 'react';
import { connect } from 'react-redux';
import { Input } from 'reactstrap';
import { changeBgColor, changeFontColor, updateCustomMessage } from '../../../Actions/customization_actions';
import '../../../Assets/Styles/Personalisation.css';

const CustomMessageInput = (props) => {
  const {
    font,
    bgColor,
    fontColor,
    textDisabled,
    customMessage, 
    updateMessage,
  } = props;

  return (
    <div>
      <link
        rel="stylesheet"
        href={`https://fonts.googleapis.com/css?family=${font}`}
      />
      <Input
        type="textarea"
        style={{
          fontFamily: font,
          fontSize: '1.2em',
          backgroundColor: bgColor,
          color: fontColor,
        }}
        name="text"
        id="wantsCustomMessage"
        maxLength="40"
        disabled={textDisabled}
        onChange={updateMessage}
        value={customMessage}
      />
    </div>
  );
};

const mapStatetoProps = state => ({
  font: state.customization.font,
  selectedFonts: state.customization.selectedFonts,
  textDisabled: state.customization.textDisabled,
  customMessage: state.customization.customMessage,
  bgColor: state.customization.bgColor,
  fontColor: state.customization.fontColor,
});

const mapDispatchToProps = dispatch => ({
  changeBgColor: color => dispatch(changeBgColor(color)),
  changeFontColor: color => dispatch(changeFontColor(color)),
  updateMessage: e => dispatch(updateCustomMessage(e)),
});

export default connect(mapStatetoProps, mapDispatchToProps)(CustomMessageInput);
