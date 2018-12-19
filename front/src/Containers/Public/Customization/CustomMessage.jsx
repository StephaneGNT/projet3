import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Label, Input, Row } from 'reactstrap';
import { allowMessage, removeCakeMessage } from '../../../Actions/customization_actions';
import '../../../Assets/Styles/Personalisation.css';

const CustomMessage = (props) => {
  const {
    wantsCustomMessage,
    removeMessage,
    allowCakeMessage,
    customMessage,
  } = props;
  return (
    <Row>
      <span sm="2" className="messageYes">
        <Input
          className="textdecocheckbox"
          type="checkbox"
          defaultChecked={wantsCustomMessage}
          onClick={wantsCustomMessage
            ? () => removeMessage()
            : () => allowCakeMessage(customMessage)
          }
        />
      </span>
      <span sm="10">
        <Label for="wantsCutomMessage"><b>Message personnalisé sur le gâteau?</b></Label>
        <b>
          {' '}
          {customMessage.price}
          €
        </b>
        <br />
      </span>
    </Row>
  );
};

CustomMessage.propTypes = {
  customMessage: PropTypes.shape({}).isRequired,
  allowCakeMessage: PropTypes.func.isRequired,
  removeMessage: PropTypes.func.isRequired,
  wantsCustomMessage: PropTypes.bool.isRequired,
};

const mapStatetoProps = state => ({
  customMessage: state.customizationAdmin.customMessage,
  wantsCustomMessage: state.customizationAdmin.wantsCustomMessage,
});

const mapDispatchToProps = dispatch => ({
  allowCakeMessage: m => dispatch(allowMessage(m)),
  removeMessage: () => dispatch(removeCakeMessage()),
});

export default connect(mapStatetoProps, mapDispatchToProps)(CustomMessage);
