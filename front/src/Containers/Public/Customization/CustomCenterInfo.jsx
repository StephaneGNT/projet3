import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CustomMessageInput from './CustomMessageInput';
import ColorPicker from './ColorPicker';
import Decoration from './Decoration';
import getDescription from './Customization_functions';
import {
  submitDecorationChoice,
  allowMessage,
  fetchAdminFonts,
  updateSummaryInfo,
} from '../../../Actions/customization_actions';
import { changePrice } from '../../../Actions/cakeActions/changeCakePrice';

class CustomCenterInfo extends Component {
  constructor(props) {
    super(props);
    const { custom } = props;
    this.state = {
      customSummary: {
        deco1: custom.deco1,
        deco2: custom.deco2,
        photo1: custom.photo1,
        photo2: custom.photo2,
        msgContent: custom.msgContent,
        msgColor: custom.msgColor,
        msgBgColor: custom.msgBgColor,
        msgFontId: custom.msgFontId,
      },
      message: false,
      messageResilient: false,
      image: false,
      imageResilient: false,
      sculpture: false,
      sculptureResilient: false,
      type: '',
      typeResilient: '',
      decoSelected: {
        quantity: 0,
        type: '',
      },
    };
  }

  componentWillMount() {
    const { fetchAdminFontList, customAdmin } = this.props;
    if (customAdmin.selectedFonts.length === 0) fetchAdminFontList();
  }

  componentWillUnmount() {
    const { updateSummary } = this.props;
    const { customSummary } = this.state;
    updateSummary(customSummary);
  }

  updateSummary = (type, content) => {
    const { customSummary } = this.state;
    const modifySummary = (item) => {
      this.setState(prevState => ({
        prevState,
        customSummary: {
          ...prevState.customSummary,
          [item]: content,
        },
      }));
    };
    switch (type) {
      case 'ADD_DECORATION': if (!customSummary.deco1) return modifySummary('deco1');
        return modifySummary('deco2');
      case 'GET_PHOTO_URL': if (!customSummary.photo1) modifySummary('photo1');
      else modifySummary('photo2'); break;
      case 'UPDATE_CUSTOM_MESSAGE': return modifySummary('msgContent');
      case 'CHOOSE_FONT_FAMILY': return modifySummary('msgFontId');
      case 'CHANGE_FONT_COLOR': return modifySummary('msgColor');
      case 'CHANGE_BACKGROUND_COLOR': return modifySummary('msgBgColor');

      default: return this.state;
    }
  }

  renderInfo = () => {
    const render = [];
    const {
      message, messageResilient, image, imageResilient,
      sculpture, sculptureResilient, type, typeResilient, customSummary,
    } = this.state;
    const { cake, custom, customAdmin } = this.props;
    const description = getDescription(type, typeResilient, custom, customAdmin);
    if ((message || messageResilient) && (type === 'message' || typeResilient === 'message')) {
      if (cake.type === 'cake' || cake.type === 'cheesecake' || cake.type === '') {
        render.push(
          <div key={type}>
            <p style={{ whiteSpace: 'pre' }}>{description}</p>
            <CustomMessageInput modify={this.updateSummary} message={customSummary} />
            <ColorPicker modify={this.updateSummary} />
          </div>,
        );
      } else {
        render.push(
          <p key={cake.type}>Il n’est pas possible d’ajouter un message personnalisé sur votre pâtisserie (brownie, cookie ou macaron)</p>,
        );
      }
    } else if (image || imageResilient || sculpture || sculptureResilient) {
      render.push(
        <div key={type}>
          <p style={{ whiteSpace: 'pre' }}>{description}</p>
          <Decoration modify={this.updateSummary} />
        </div>,
      );
    } else {
      render.push(
        <p key={type} style={{ whiteSpace: 'pre' }}>{description}</p>,
      );
    }
    return render;
  }

  toggle = (deco, status) => {
    this.setState({
      [deco]: !this.state[deco],
      type: status === 'on' ? deco : '',
      // typeResilient: status === 'on' ? '' : this.state.typeResilient,
    });
  }

  open = (deco) => {
    const { submitDecoChoice, addMessage, customAdmin } = this.props;
    const setToUpdate = `${deco}Resilient`;
    this.setState({
      messageResilient: false,
      imageResilient: false,
      sculptureResilient: false,
      [setToUpdate]: true,
      typeResilient: deco,
    });
    switch (deco) {
      case ('message'): this.updateSummary('ADD_DECORATION', 'message');
        break;
      case ('image'): this.updateSummary('ADD_DECORATION', '2D');
        break;
      case ('sculpture'): this.updateSummary('ADD_DECORATION', '3D');
        break;
      default: return this.state;
    }
  }

  addDecoration = () => {
    return true;
  }

  render() {
    const { typeResilient, customSummary } = this.state;
    const { custom } = this.props;
    console.log("Custom summary: ", this.state.customSummary)
    return (
      <Col>
        <Row className="decorationRow">
          <h1>Choisissez votre décoration</h1>
        </Row>
        <Row className="decorationRow" style={{ justifyContent: 'space-around' }}>
          <button
            type="button"
            id="message"
            disabled={customSummary.deco1 && customSummary.deco2}
            // onMouseEnter={() => this.toggle('message', 'on')}
            // onMouseLeave={() => this.toggle('message', 'off')}
            onClick={() => this.open('message', 'on')}
          >
            Message
          </button>
          <button
            type="button"
            id="image"
            disabled={customSummary.deco1 && customSummary.deco2}
            // onMouseEnter={() => this.toggle('image', 'on')}
            // onMouseLeave={() => this.toggle('image', 'off')}
            onClick={() => this.open('image', 'on')}
          >
            Photo
          </button>
          <button
            type="button"
            id="sculpture"
            disabled={customSummary.deco1 && customSummary.deco2}
            // onMouseEnter={() => this.toggle('sculpture', 'on')}
            // onMouseLeave={() => this.toggle('sculpture', 'off')}
            onClick={() => this.open('sculpture', 'on')}
          >
            Sculpture
          </button>
        </Row>
        <Row className="decorationRow">
          {this.renderInfo()}
        </Row>
        <Row className="decorationRow">
          {typeResilient !== ''
            && (
              <button
                type="button"
                disabled={customSummary.deco1}
                onClick={() => this.addDecoration()}
              >
                Ajouter une autre décoration
              </button>)}
        </Row>
      </Col>
    );
  }
}

CustomCenterInfo.propTypes = {
  cake: PropTypes.shape({}).isRequired,
  custom: PropTypes.shape({}).isRequired,
  customAdmin: PropTypes.shape({}).isRequired,
  submitDecoChoice: PropTypes.func.isRequired,
  addMessage: PropTypes.func.isRequired,
  fetchAdminFontList: PropTypes.func.isRequired,
  updateSummary: PropTypes.func.isRequired,
};

const mapStatetoProps = state => ({
  cake: state.cakeCharacteristics,
  custom: state.customizationCustomer,
  customAdmin: state.customizationAdmin,
});

const mapDispatchToProps = dispatch => ({
  submitDecoChoice: choice => dispatch(submitDecorationChoice(choice)),
  addMessage: choice => dispatch(allowMessage(choice)),
  updatePrice: price => dispatch(changePrice(price)),
  fetchAdminFontList: () => dispatch(fetchAdminFonts()),
  updateSummary: data => dispatch(updateSummaryInfo(data)),
});

export default connect(mapStatetoProps, mapDispatchToProps)(CustomCenterInfo);
