import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Label, Input } from 'reactstrap';
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
    <div>
      <Label for="wantsCutomMessage"><u><b>Message personnalisé sur le gâteau?</b></u></Label>
      <br />
      <div className="messageYes">
        <div>
          <Input
            className="textdecocheckbox"
            type="checkbox"
            defaultChecked={wantsCustomMessage}
            onClick={wantsCustomMessage
              ? () => removeMessage()
              : () => allowCakeMessage(customMessage)
            }
          />
        </div>
        <div>
          <span>Cochez si vous souhaitez ajouter une message au gâteau: </span>
          <span>
            <b>
              {customMessage.price}
              €
            </b>
          </span>
        </div>
      </div>
    </div>
  );
};

CustomMessage.propTypes = {
  customMessage: PropTypes.shape({}).isRequired,
  allowCakeMessage: PropTypes.func.isRequired,
  removeMessage: PropTypes.func.isRequired,
  wantsCustomMessage: PropTypes.bool.isRequired,
};

const mapStatetoProps = state => ({
  customMessage: state.customization.customMessage,
  wantsCustomMessage: state.customization.wantsCustomMessage,
});

const mapDispatchToProps = dispatch => ({
  allowCakeMessage: m => dispatch(allowMessage(m)),
  removeMessage: () => dispatch(removeCakeMessage()),
});

export default connect(mapStatetoProps, mapDispatchToProps)(CustomMessage);
