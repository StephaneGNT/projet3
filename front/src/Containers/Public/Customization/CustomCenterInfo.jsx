import React, { Component } from 'react';
import { Button, Row, Container, Col } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Carousel } from 'react-responsive-carousel';
import CustomMessageInput from './CustomMessageInput';
import Beautify from './Beautify';
import BeautifyButtons from './BeautifyButtons';
import Decoration from './Decoration';
import getDescription from './Customization_functions';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import CakeMessagePhotoExample1 from '../../../Assets/Images/selectionGallerie/IMG_0987.JPG';
import CakeMessagePhotoExample2 from '../../../Assets/Images/selectionGallerie/IMG_2222.JPG';
import CakeMessagePhotoExample3 from '../../../Assets/Images/selectionGallerie/IMG_2247.jpg';
import CakeMessagePhotoExample4 from '../../../Assets/Images/selectionGallerie/IMG_2459.JPG';
import CakeMessagePhotoExample5 from '../../../Assets/Images/selectionGallerie/IMG_5546.JPG';
import CakeMessagePhotoExample6 from '../../../Assets/Images/selectionGallerie/IMG-9746.JPG';
import {
  // allowMessage,
  fetchAdminFonts,
  updateSummaryInfo,
  calculateCustomizationPrice,
} from '../../../Actions/customization_actions';

class CustomCenterInfo extends Component {
  constructor(props) {
    super(props);
    const { custom } = props;
    this.decoration = React.createRef();
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
        description3D: custom.description3D,
      },
      message: false,
      messageResilient: false,
      image: false,
      imageResilient: false,
      sculpture: false,
      sculptureResilient: false,
      type: '',
      typeResilient: '',
      config: 'fontStyle',
      confirmButtonContent: '',
      fileEvent1: '',
      fileEvent2: '',
    };
  }

  componentWillMount() {
    const { fetchAdminFontList, customAdmin } = this.props;
    if (customAdmin.selectedFonts.length === 0) fetchAdminFontList();
  }

  componentWillUnmount() {
    const { updateReducerSummary } = this.props; const { customSummary } = this.state;
    return updateReducerSummary(customSummary);
  }

  getConfigState = (config) => {
    this.setState({ config });
  }

  getDefaultFont = (font) => {
    this.setState(prevState => (
      { prevState, customSummary: { ...prevState.customSummary, msgFont: font } }
    ));
  }

  removeDeco = (type) => {
    const { customSummary } = this.state;
    const { calculatePrice, customAdmin } = this.props;
    let { deco1, deco2 } = customSummary;
    if (type === 'message') calculatePrice(-customAdmin.price_customMessage);
    if (type === '2D') {
      calculatePrice(-customAdmin.price_2D);
      this.decoration.current.resetUrl('2D');
      this.setState(prevState => ({
        customSummary: {
          ...prevState.customSummary,
          photo1: '',
        },
      }));
    }
    if (type === '3D') {
      this.decoration.current.resetUrl('3D');
      this.setState(prevState => ({
        customSummary: {
          ...prevState.customSummary,
          photo2: '',
        },
      }));
    }
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
    const { customSummary, typeResilient, fileEvent1, fileEvent2 } = this.state;
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
        if (content === 'message' && !customSummary.msgContent) return alert('Pour confirmer, veuillez entrer un message')
        if (content === '2D' && (!fileEvent1)) return alert('Pour confirmer, veuillez chargez une image');
        if (content === '3D' && (!fileEvent2 && !customSummary.description3D)) return alert('Pour confirmer, veuillez chargez une image ou fournir une description');
        if (content === '2D') calculatePrice(customAdmin.price_2D);
        if (content === 'message') calculatePrice(customAdmin.price_customMessage);
        if (content === '2D') this.decoration.current.submitFile(fileEvent1);
        if (content === '3D') this.decoration.current.submitFile(fileEvent2);
        if (!customSummary.deco1) return modifySummary('deco1');
        return modifySummary('deco2');
      case 'GET_PHOTO_URL': if (typeResilient === 'image') modifySummary('photo1');
      else modifySummary('photo2'); break;
      case 'UPDATE_CUSTOM_MESSAGE': return modifySummary('msgContent');
      case 'UPDATE_3D_DESCRIPTION': return modifySummary('description3D');
      case 'CHOOSE_FONT_FAMILY': return modifySummary('msgFont');
      case 'CHANGE_FONT_COLOR': return modifySummary('msgColor');
      case 'CHANGE_BACKGROUND_COLOR': return modifySummary('msgBgColor');

      default: return this.state;
    }
  }

  // toggle = (deco, status) => {
  //   this.setState({
  //     [deco]: !this.state[deco],
  //     type: status === 'on' ? deco : '',
  //     typeResilient: status === 'on' ? '' : this.state.typeResilient,
  //   });
  // }

  open = (deco) => {
    const setToUpdate = `${deco}Resilient`;
    const { customSummary } = this.state;
    const type = deco === 'message' ? 'message' : deco === 'image' ? '2D' : '3D';
    if (customSummary.deco1 && customSummary.deco2
      && ![customSummary.deco1, customSummary.deco2].includes(type)) {
      switch (type) {
        case 'message': alert('Seulement deux choix sont possibles. Veuillez déselectionner l’option image ou sculpture pour accéder au message');
          break;
        case '2D': alert('Seulement deux choix sont possibles. Veuillez déselectionner l’option message ou sculpture pour accéder à l’ajout de photo');
          break;
        case '3D': alert('Seulement deux choix sont possibles. Veuillez déselectionner l’option message ou sculpture pour accéder à la sculpture');
          break;
        default: return null;
      }
    } else {
      this.setState({
        messageResilient: false,
        imageResilient: false,
        sculptureResilient: false,
        [setToUpdate]: true,
        typeResilient: deco,
      });
    }
  }

  // disableButton = (type) => {
  //   const { customSummary } = this.state;
  //   return customSummary.deco1 && customSummary.deco2
  //     && ![customSummary.deco1, customSummary.deco2].includes(type);
  // }

  setButtonOutline = (type) => {
    const { customSummary } = this.state;
    if ([customSummary.deco1, customSummary.deco2].includes(type)) return 'chosen';
    if (customSummary.deco1 && customSummary.deco2 && ![customSummary.deco1, customSummary.deco2].includes(type)) return 'notChosen';
    return null;
  }

  showAdded = (type) => {
    const { customSummary } = this.state;
    if ([customSummary.deco1, customSummary.deco2].includes(type)) {
      return (
        <div>
          <span style={{ color: 'green', fontSize: '0.7em' }}>Décoration ajoutée</span>
          <span
            onClick={() => this.removeDeco(type)}
            style={{ color: 'red', fontSize: '0.7em', paddingBottom: '-0.7vh' }}
            className="removeCross"><b>  X</b></span>
        </div>
      );
    }
    return <div />;
  }

  getFileEvent = (e, t) => {
    if (t === '2D') this.setState({ fileEvent1: e });
    if (t === '3D') this.setState({ fileEvent2: e });
  }

  renderInfo = () => {
    const render = [];
    const {
      message, messageResilient, image, imageResilient,
      sculpture, sculptureResilient, type, typeResilient, customSummary, config, confirmButtonContent
    } = this.state;
    const { cake, custom, customAdmin } = this.props;
    const description = getDescription(type, typeResilient, custom, customAdmin);
    const center = { display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' };
    if ((message || messageResilient) && (type === 'message' || typeResilient === 'message')) {
      if (cake.type === 'cake' || cake.type === 'cheesecake' || cake.type === '') {
        render.push(
          <div>
            <div style={{ minHeight: '50vh' }}>
              <Row className="decoRow">
                {description}
              </Row>
              <Row key={type} style={{ marginTop: '10vh' }}>
                <Col xs="12" md="4" style={center}>
                  {this.carousel('inDeco')}
                </Col>
                <Col xs="12" md="4" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
                  <BeautifyButtons configState={config} sendConfigState={this.getConfigState} />
                  <CustomMessageInput modify={this.updateSummary} message={customSummary} sendDefaultFont={this.getDefaultFont} />
                </Col>
                <Col xs="1" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', fontSize: '5em' }}>
                  <p>→</p>
                  <p>←</p>
                </Col>
                <Col xs="12" md="3">
                  <Beautify modify={this.updateSummary} customSummary={customSummary} configState={config} />
                </Col>
              </Row>
            </div>
            <Row>
              <Button
                style={{ width: '100%' }}
                onClick={[customSummary.deco1, customSummary.deco2].includes('message')
                  ? () => this.removeDeco('message')
                  : () => this.updateSummary('ADD_DECORATION', 'message')
                }
              >
                {![customSummary.deco1, customSummary.deco2].includes('message') ? `Confirmer l’ajout du message personnalisé (${customAdmin.price_customMessage.toFixed(2).replace(/[.,]00$/, '')}€)`
                  : 'Supprimer l’ajout du message personnalisé'}
              </Button>
            </Row>
          </div>,
        );
      } else {
        render.push(
          <p key={cake.type} style={center}>
            Il n’est pas possible d’ajouter un message personnalisé
            sur votre pâtisserie (brownie, cookie ou macaron)
          </p>,
        );
      }
    } else if (image || imageResilient || sculpture || sculptureResilient) {
      render.push(
        <div>
          <div style={{ minHeight: '50vh' }}>
            <Row key={type} style={{ maxHeight: '100%' }}>
              <Col md="6" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <p>{description}</p>
                {this.carousel('inDeco')}
              </Col>
              <Col md="6" style={center}>
                <Decoration
                  ref={this.decoration}
                  modify={this.updateSummary}
                  photography={typeResilient === 'image' ? customSummary.photo1 : customSummary.photo2}
                  customSummary={customSummary}
                  decoType={typeResilient === 'image' ? '2D' : '3D'}
                  sendFileEvent={this.getFileEvent}
                />
              </Col>
            </Row>
          </div>
          <Row>
            {
              typeResilient === 'image' ? (
                <Button
                  style={{ width: '100%' }}
                  name="2D"
                  onClick={[customSummary.deco1, customSummary.deco2].includes('2D')
                    ? () => this.removeDeco('2D')
                    : () => this.updateSummary('ADD_DECORATION', '2D')}
                >
                  {![customSummary.deco1, customSummary.deco2].includes('2D')
                    ? `Confirmer l’ajout de l’image en pate sucrée (${customAdmin.price_2D.toFixed(2).replace(/[.,]00$/, '')}€)`
                    : 'Supprimer l’image en pate sucrée'}
                </Button>
              )
                : (
                  <Button
                    style={{ width: '100%' }}
                    name="3D"
                    onClick={[customSummary.deco1, customSummary.deco2].includes('3D')
                      ? () => this.removeDeco('3D')
                      : () => this.updateSummary('ADD_DECORATION', '3D')}
                  >
                    {![customSummary.deco1, customSummary.deco2].includes('3D')
                      ? 'Confirmer votre demande de sculpture (prix à définir en fonction de la demande)'
                      : 'Annuler votre demande de sculpture'}
                  </Button>
                )
            }
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

  carousel = (where) => {
    const carouselStyle = where === 'inWelcome' ? 'carousel' : 'carousel-small';
    const imageStyle = where === 'inWelcome' ? 'carousel-images' : 'smaller-c-images';
    return (
      <Carousel className={carouselStyle} autoPlay={true} interval={1000} infiniteLoop={true} dynamicHeight="true" showIndicators={false} showThumbs={false} interval={4000}>
        <div>
          <img className={imageStyle} src={CakeMessagePhotoExample1} />
        </div>
        <div>
          <img className={imageStyle} src={CakeMessagePhotoExample2} />
        </div>
        <div>
          <img className={imageStyle} src={CakeMessagePhotoExample3} />
        </div>
        <div>
          <img className={imageStyle} src={CakeMessagePhotoExample4} />
        </div>
        <div>
          <img className={imageStyle} src={CakeMessagePhotoExample5} />
        </div>
        <div>
          <img className={imageStyle} src={CakeMessagePhotoExample6} />
        </div>
      </Carousel>
    );
  }

  render() {
    const {
      customSummary,
      messageResilient,
      imageResilient,
      sculptureResilient,
    } = this.state;
    console.log(customSummary)
    const buttonStyle = { backgroundColor: 'rgb(129, 38, 38)' };
    const center = { display: 'flex', flexDirection: 'column', alignItems: 'center' }
    return (
      <Container>
        <Row className="decorationRow">
          <h1 style={{ cursor: 'pointer' }} onClick={() => this.open('', 'on')}>Choisissez votre décoration</h1>
        </Row>
        <Row style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
          <Col xs="4" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center' }}>
            <Button
              type="button"
              id="message"
              style={messageResilient ? buttonStyle : {}}
              // onMouseEnter={() => this.toggle('message', 'on')}
              // onMouseLeave={() => this.toggle('message', 'off')}
              onClick={() => this.open('message', 'on')}
              className={this.setButtonOutline('message')}
            >
              Message
          </Button>
            {this.showAdded('message')}
          </Col>
          <Col xs="4" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center' }}>
            <Button
              type="button"
              id="image"
              style={imageResilient ? buttonStyle : {}}
              // onMouseEnter={() => this.toggle('image', 'on')}
              // onMouseLeave={() => this.toggle('image', 'off')}
              onClick={() => this.open('image', 'on')}
              className={this.setButtonOutline('2D')}
            >
              Photo
          </Button>
            {this.showAdded('2D')}
          </Col>
          <Col xs="4" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center' }}>
            <Button
              type="button"
              id="sculpture"
              style={sculptureResilient ? buttonStyle : {}}
              // onMouseEnter={() => this.toggle('sculpture', 'on')}
              // onMouseLeave={() => this.toggle('sculpture', 'off')}
              onClick={() => this.open('sculpture', 'on')}
              className={this.setButtonOutline('3D')}
            >
              Sculpture
          </Button>
            {this.showAdded('3D')}
          </Col>
        </Row>
        <div className="decorationRow"
          style={!imageResilient && !messageResilient && !sculptureResilient
            ? center : {}}
        >
          {!imageResilient && !messageResilient && !sculptureResilient
            ? (
              <div style={{ ...center, marginTop: '-4vh' }}>
                <h3 style={{ textAlign: 'center' }}>
                  Donnez vie à votre gourmandise en y ajoutant
                  <br />
                  un message, une image ou une sculpture!
                </h3>
                {this.carousel('inWelcome')}
              </div>
            )
            : this.renderInfo()
          }
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
      </Container >
    );
  }
}

CustomCenterInfo.propTypes = {
  cake: PropTypes.shape({}).isRequired,
  custom: PropTypes.shape({}).isRequired,
  customAdmin: PropTypes.shape({}).isRequired,
  // addMessage: PropTypes.func.isRequired,
  fetchAdminFontList: PropTypes.func.isRequired,
  updateReducerSummary: PropTypes.func.isRequired,
  calculatePrice: PropTypes.func.isRequired,
};

const mapStatetoProps = state => ({
  cake: state.cakeCharacteristics,
  custom: state.customizationCustomer,
  customAdmin: state.customizationAdmin,
});

const mapDispatchToProps = dispatch => ({
  // addMessage: choice => dispatch(allowMessage(choice)),
  // updatePrice: price => dispatch(changePrice(price)),
  fetchAdminFontList: () => dispatch(fetchAdminFonts()),
  updateReducerSummary: data => dispatch(updateSummaryInfo(data)),
  calculatePrice: data => dispatch(calculateCustomizationPrice(data)),

});

export default connect(mapStatetoProps, mapDispatchToProps)(CustomCenterInfo);
