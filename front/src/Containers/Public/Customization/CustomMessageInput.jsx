import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Input } from 'reactstrap';
import { updateCustomMessage } from '../../../Actions/customization_actions';
import '../../../Assets/Styles/Customization.css';

const CustomMessageInput = (props) => {
  const {
    // bgColor,
    // chosenFont,
    // chosenBackgroundColor,
    // chosenFontColor,
    // font,
    // fontColor,
    // message,
    placeholder,
    // updateMessage,
    wantsCustomMessage,
    message,
  } = props;
  // const defaultStyle = {
  //   fontFamily: font,
  //   color: fontColor,
  //   backgroundColor: bgColor,
  // };

  const updateMessage = (e) => {
    const { modify } = props;
    const type = 'UPDATE_CUSTOM_MESSAGE';
    modify(type, e.target.value);
  };

  return (
    <div>
      <link
        rel="stylesheet"
        href={`https://fonts.googleapis.com/css?family=${message.msgFontId}`}
      />
      <Input
        type="textarea"
        style={
          wantsCustomMessage
            ? {
              fontFamily: message.msgFontId,
              fontSize: '1.2em',
              backgroundColor: message.msgBgColor,
              color: message.msgColor,
            }
            : {}
        }
        name="text"
        id="wantsCustomMessage"
        maxLength="40"
        placeholder={placeholder}
        onChange={updateMessage}
        // onClick={updateMessage}
        value={message.msgContent}
        resize="none"
      />
    </div>
  );
};

// CustomMessageInput.propTypes = {
//   bgColor: PropTypes.string.isRequired,
//   chosenFont: PropTypes.string.isRequired,
//   chosenBackgroundColor: PropTypes.string.isRequired,
//   chosenFontColor: PropTypes.string.isRequired,
//   font: PropTypes.string.isRequired,
//   fontColor: PropTypes.string.isRequired,
//   message: PropTypes.string.isRequired,
//   placeholder: PropTypes.string.isRequired,
//   updateMessage: PropTypes.func.isRequired,
//   wantsCustomMessage: PropTypes.bool.isRequired,
// };

const mapStatetoProps = state => ({
  // font: state.customizationAdmin.customMessage.fontFamily,
  // chosenFont: state.customizationCustomer.customMessage.fontFamily,
  // chosenFontColor: state.customizationCustomer.customMessage.fontColor,
  // chosenBackgroundColor: state.customizationCustomer.customMessage.backgroundColor,
  placeholder: state.customizationAdmin.customMessage_placeHolder,
  // bgColor: state.customizationAdmin.customMessage.backgroundColor,
  // fontColor: state.customizationAdmin.customMessage.fontColor,
  // message: state.customizationCustomer.customMessage.message,
  wantsCustomMessage: state.customizationAdmin.wantsCustomMessage,
});

const mapDispatchToProps = dispatch => ({
  updateMessage: e => dispatch(updateCustomMessage(e)),
});

export default connect(mapStatetoProps, mapDispatchToProps)(CustomMessageInput);
