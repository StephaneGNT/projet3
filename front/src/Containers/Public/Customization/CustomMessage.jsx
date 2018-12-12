import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Label, Input } from 'reactstrap';
import { allowMessage, removeCakeMessage } from '../../../Actions/customization_actions';
import '../../../Assets/Styles/Personalisation.css';

class CustomMessage extends Component {
  constructor(props) {
    super(props);
    this.state = { toggle: false };
  }

  handleChange = () => {
    const { toggle } = this.state;
    const { allowCakeMessage, removeMessage, customMessage } = this.props;
    this.setState(prevState => ({ toggle: !prevState.toggle }));
    if (toggle) removeMessage();
    else allowCakeMessage(customMessage);
  }

  render() {
    return (
      <div>
        <Label for="wantsCutomMessage"><u><b>Message personnalisé sur le gâteau?</b></u></Label>
        <br />
        <div className="messageYes">
          <div>
            <Input
              className="textdecocheckbox"
              type="checkbox"
              onChange={this.handleChange}
            />
          </div>
          <div>
            <p>Cochez si vous souhaitez ajouter une message au gâteau</p>
          </div>
        </div>
      </div>
    );
  }
}

const mapStatetoProps = state => ({
  customMessage: state.customization.customMessage,
  wantsCustomMessage: state.customization.wantsCutomMessage,
});

const mapDispatchToProps = dispatch => ({
  allowCakeMessage: m => dispatch(allowMessage(m)),
  removeMessage: () => dispatch(removeCakeMessage()),
});

export default connect(mapStatetoProps, mapDispatchToProps)(CustomMessage);