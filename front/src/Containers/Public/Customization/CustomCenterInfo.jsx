import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CustomMessageInput from './CustomMessageInput';
import ColorPicker from './ColorPicker';
import Decoration from './Decoration';
import getDescription from './Customization_functions';
import { submitDecorationChoice, allowMessage, fetchAdminFonts } from '../../../Actions/customization_actions';
import { changePrice } from '../../../Actions/cakeActions/changeCakePrice';

class CustomCenterInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
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

  renderInfo = () => {
    const render = [];
    const {
      message, messageResilient, image, imageResilient,
      sculpture, sculptureResilient, type, typeResilient,
    } = this.state;
    const { cake, custom, customAdmin } = this.props;
    const description = getDescription(type, typeResilient, custom, customAdmin);
    if ((message || messageResilient) && (type === 'message' || typeResilient === 'message')) {
      if (cake.type === 'cake' || cake.type === 'cheesecake' || cake.type === '') {
        render.push(
          <div>
            <p style={{ whiteSpace: 'pre' }}>{description}</p>
            <CustomMessageInput />
            <ColorPicker />
          </div>,
        );
      } else {
        render.push(
          <p>Il n'est pas possible d'ajouter un message personnalisé sur votre pâtisserie (brownie, cookie ou macaron)</p>,
        );
      }
    } else if (image || imageResilient || sculpture || sculptureResilient) {
      render.push(
        <div>
          <p style={{ whiteSpace: 'pre' }}>{description}</p>
          <Decoration />
        </div>,
      );
    } else {
      render.push(
        <p style={{ whiteSpace: 'pre' }}>{description}</p>,
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
      case ('message'): {
        const message = customAdmin.customMessage;
        addMessage(message);
      } break;
      case ('image'): {
        const deco2D = customAdmin.print2D;
        submitDecoChoice(deco2D);
      } break;
      default: {
        const deco3D = customAdmin.print2D;
        submitDecoChoice(deco3D);
      } break;
    }
  }

  addDecoration = () => {
    return true;
  }

  render() {
    const { typeResilient } = this.state;
    const { custom } = this.props;

    return (
      <Col>
        <Row className="decorationRow">
          <h1>Choisissez votre décoration</h1>
        </Row>
        <Row className="decorationRow" style={{ justifyContent: 'space-around' }}>
          <button
            type="button"
            id="message"
            onMouseEnter={() => this.toggle('message', 'on')}
            onMouseLeave={() => this.toggle('message', 'off')}
            onClick={() => this.open('message', 'on')}
          >
            Message
          </button>
          <button
            type="button"
            id="image"
            onMouseEnter={() => this.toggle('image', 'on')}
            onMouseLeave={() => this.toggle('image', 'off')}
            onClick={() => this.open('image', 'on')}
          >
            Photo
          </button>
          <button
            type="button"
            id="sculpture"
            onMouseEnter={() => this.toggle('sculpture', 'on')}
            onMouseLeave={() => this.toggle('sculpture', 'off')}
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
              disabled={custom.customMessage.message === '' && custom.decoration.image === ''}
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
});

export default connect(mapStatetoProps, mapDispatchToProps)(CustomCenterInfo);
