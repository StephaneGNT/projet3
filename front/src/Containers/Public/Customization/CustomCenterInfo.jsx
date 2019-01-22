import React, { Component } from 'react';
import { Button, Row, Container, Col } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Checkbox from 'react-simple-checkbox';
import CustomMessageInput from './CustomMessageInput';
import Beautify from './Beautify';
import Decoration from './Decoration';
import getDescription from './Customization_functions';
import CakeMessagePhotoExample1 from '../../../Assets/Images/IMG_2729.JPG';
import CakeMessagePhotoExample2 from '../../../Assets/Images/IMG-2403.JPG';
import {
  allowMessage,
  fetchAdminFonts,
  updateSummaryInfo,
  calculateCustomizationPrice,
} from '../../../Actions/customization_actions';

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
        msgFont: custom.msgFont,
      },
      defaultFont: '',
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
    const { updateSummary } = this.props; const { customSummary, defaultFont } = this.state;
    updateSummary(customSummary);
  }

  getDefaultFont = (font) => {
    this.setState(prevState => ({ prevState, customSummary: { ...prevState.customSummary, msgFont: font } }));
  }
  
  removeDeco = (type) => {
    // const { customSummary } = this.state;
    const { calculatePrice, customAdmin } = this.props;
    let { deco1, deco2 } = this.state.customSummary;
    if (type === 'message') calculatePrice(-customAdmin.price_customMessage);
    if (type === '2D') calculatePrice(-customAdmin.price_2D);
    if (deco1.includes(type)) deco1 = '';
    if (deco2.includes(type)) deco2 = '';
    if (deco1 === '' && deco2) deco1 = deco2;
    deco2 = '';
    this.setState(prevState => ({
      customSummary: {
        ...prevState.customSummary,
        deco1,
        deco2,
      },
    }));
  };

  updateSummary = (type, content) => {
    const { customSummary } = this.state;
    const { calculatePrice, customAdmin } = this.props;
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
      case 'ADD_DECORATION':
        if (content === '2D') calculatePrice(customAdmin.price_2D);
        if (content === 'message') calculatePrice(customAdmin.price_customMessage);
        if (!customSummary.deco1) return modifySummary('deco1');
        return modifySummary('deco2');
      case 'GET_PHOTO_URL': if (!customSummary.photo1) modifySummary('photo1');
      else modifySummary('photo2'); break;
      case 'UPDATE_CUSTOM_MESSAGE': return modifySummary('msgContent');
      case 'CHOOSE_FONT_FAMILY': return modifySummary('msgFont');
      case 'CHANGE_FONT_COLOR': return modifySummary('msgColor');
      case 'CHANGE_BACKGROUND_COLOR': return modifySummary('msgBgColor');

      default: return this.state;
    }
  }

  toggle = (deco, status) => {
    this.setState({
      [deco]: !this.state[deco],
      type: status === 'on' ? deco : '',
      typeResilient: status === 'on' ? '' : this.state.typeResilient,
    });
  }

  open = (deco) => {
    const setToUpdate = `${deco}Resilient`;
    this.setState({
      messageResilient: false,
      imageResilient: false,
      sculptureResilient: false,
      [setToUpdate]: true,
      typeResilient: deco,
    });
  }

  disableButton = (type) => {
    const { customSummary } = this.state;
    return customSummary.deco1 && customSummary.deco2
      && ![customSummary.deco1, customSummary.deco2].includes(type);
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
          <div>
            <Row>
              <p>{description}</p>
            </Row>
            <Row key={type}>
              <Col xs="12" md="6">
                <img src={CakeMessagePhotoExample1} alt="Gâteau avec un message" />
              </Col>
              <Col xs="12" md="6">
                <CustomMessageInput modify={this.updateSummary} message={customSummary} sendDefaultFont={this.getDefaultFont} />
                <Beautify modify={this.updateSummary} />
              </Col>
            </Row>
            <Row>
              <Button
                style={{ width: '100%' }}
                onClick={() => this.updateSummary('ADD_DECORATION', 'message')}
                disabled={[customSummary.deco1, customSummary.deco2].includes('message')}
              >
                Confirmer l’ajout du message personnalisé
              </Button>
            </Row>
          </div>,
        );
      } else {
        render.push(
          <p key={cake.type}>
            Il n’est pas possible d’ajouter un message personnalisé
            sur votre pâtisserie (brownie, cookie ou macaron)
          </p>,
        );
      }
    } else if (image || imageResilient || sculpture || sculptureResilient) {
      render.push(
        <div>
          <Row key={type}>
            <Col md="6">
              <p>{description}</p>
              <img src={CakeMessagePhotoExample2} alt="Gâteau avec un message" />
            </Col>
            <Col md="6">
              <Decoration modify={this.updateSummary} photography={customSummary.photo1} />
            </Col>
          </Row>
          <Row>
            <Button
              style={{ width: '100%' }}
              onClick={typeResilient === 'image' ? () => this.updateSummary('ADD_DECORATION', '2D')
                : () => this.updateSummary('ADD_DECORATION', '3D')}
              disabled={typeResilient === 'image'
                ? [customSummary.deco1, customSummary.deco2].includes('2D')
                : [customSummary.deco1, customSummary.deco2].includes('3D')
              }
            >
              {
                typeResilient === 'image' ? <p>Confirmer l’ajout de l’image en pate sucrée</p>
                  : <p>Confirmer votre demande de sculpture</p>
              }
            </Button>
          </Row>
        </div>,
      );
    } else {
      render.push(
        <p key={type} style={{ whiteSpace: 'pre' }}>{description}</p>,
      );
    }
    return render;
  }

  render() {
    const {
      customSummary,
      messageResilient,
      imageResilient,
      sculptureResilient,
    } = this.state;
    const buttonStyle = { backgroundColor: 'rgb(129, 38, 38)' };
    console.log(this.state)
    return (
      <Container>
        <Row className="decorationRow">
          <h1>Choisissez votre décoration</h1>
        </Row>
        <Row className="decorationRow" style={{ justifyContent: 'space-around' }}>
          <Button
            type="button"
            id="message"
            style={messageResilient ? buttonStyle : {}}
            onMouseEnter={() => this.toggle('message', 'on')}
            onMouseLeave={() => this.toggle('message', 'off')}
            onClick={() => this.open('message', 'on')}
            disabled={this.disableButton('message')}
          >
            Message
          </Button>
          <Checkbox
            tickSize="3"
            size="3"
            borderThickness="0"
            disabled="disabled"
            onChange={() => this.removeDeco('message')}
            checked={[customSummary.deco1, customSummary.deco2].includes('message')}
            color={{ backgroundColor: 'none', tickColor: '#ffffff' }}
          />
          <Button
            type="button"
            id="image"
            style={imageResilient ? buttonStyle : {}}
            onMouseEnter={() => this.toggle('image', 'on')}
            onMouseLeave={() => this.toggle('image', 'off')}
            onClick={() => this.open('image', 'on')}
            disabled={this.disableButton('2D')}
          >
            Photo
          </Button>
          <Checkbox
            tickSize="3"
            size="3"
            borderThickness="0"
            disabled="disabled"
            onChange={() => this.removeDeco('2D')}
            checked={[customSummary.deco1, customSummary.deco2].includes('2D')}
            color={{ backgroundColor: 'none', tickColor: '#ffffff' }}
          />
          <Button
            type="button"
            id="sculpture"
            style={sculptureResilient ? buttonStyle : {}}
            onMouseEnter={() => this.toggle('sculpture', 'on')}
            onMouseLeave={() => this.toggle('sculpture', 'off')}
            onClick={() => this.open('sculpture', 'on')}
            disabled={this.disableButton('3D')}
          >
            Sculpture
          </Button>
          <Checkbox
            tickSize="3"
            size="3"
            borderThickness="0"
            disabled="disabled"
            onChange={() => this.removeDeco('3D')}
            checked={[customSummary.deco1, customSummary.deco2].includes('3D')}
            color={{ backgroundColor: 'none', tickColor: '#ffffff' }}
          />
        </Row>
        <div className="decorationRow">
          {this.renderInfo()}
        </div>
        {/* <Row className="decorationRow">
          {typeResilient !== ''
            && (
              <button
                type="button"
                disabled={customSummary.deco1}
                onClick={() => this.addDecoration()}
              >
                Ajouter une autre décoration
              </button>)}
        </Row> */}
      </Container>
    );
  }
}

CustomCenterInfo.propTypes = {
  cake: PropTypes.shape({}).isRequired,
  custom: PropTypes.shape({}).isRequired,
  customAdmin: PropTypes.shape({}).isRequired,
  // addMessage: PropTypes.func.isRequired,
  fetchAdminFontList: PropTypes.func.isRequired,
  updateSummary: PropTypes.func.isRequired,
  calculatePrice: PropTypes.func.isRequired,
};

const mapStatetoProps = state => ({
  cake: state.cakeCharacteristics,
  custom: state.customizationCustomer,
  customAdmin: state.customizationAdmin,
});

const mapDispatchToProps = dispatch => ({
  addMessage: choice => dispatch(allowMessage(choice)),
  // updatePrice: price => dispatch(changePrice(price)),
  fetchAdminFontList: () => dispatch(fetchAdminFonts()),
  updateSummary: data => dispatch(updateSummaryInfo(data)),
  calculatePrice: data => dispatch(calculateCustomizationPrice(data)),

});

export default connect(mapStatetoProps, mapDispatchToProps)(CustomCenterInfo);
