import React, { Component } from 'react';
import axios from 'axios';
import {
  Container,
  Row,
  Col,
  FormGroup,
  Label,
  Input,
  FormText,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import Price from './Price';
import NavArrowsLayout from './Navigation/NavArrowsLayout';
import Progressbar from './Progressbar';
import '../../Assets/Styles/Personalisation.css';

class Personalisation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      font: 'Sedgwick Ave',
      dropdownOpen: false,
      selectedFonts: [79, 693, 39, 431, 510, 802, 555, 123, 489, 402, 901],
      googleFonts: [],
      decorationChoice: null,
    };
  }

  componentWillMount() {
    axios.get('https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyBvHfWdKdPsFRaVwwh8z5lNIto2Ct9xzaA')
      .then((res) => {
        const fonts = res.data.items;
        this.setState({ googleFonts: fonts });
      });
  }

  toggle = () => {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen,
    }));
  }

  chooseDecorationType = (dimension) => {
    this.setState(({ decorationChoice: dimension }));
  }

  chooseFont = (choice) => {
    this.setState({ font: choice });
  }

  render() {
    const {
      font,
      selectedFonts,
      googleFonts,
      dropdownOpen,
      decorationChoice
    } = this.state;

    if (googleFonts[0] === undefined) {
      return <div />;
    }

    return (
      <div class="bloc-personnalisation">
        <link
          rel="stylesheet"
          href={`https://fonts.googleapis.com/css?family=${font}`}
        />
        {
          selectedFonts.map(index => (
            <div key={index}>
              <link
                rel="stylesheet"
                href={`https://fonts.googleapis.com/css?family=${googleFonts[index].family}`}
              />
            </div>))
        }
        <Container className="container">
          <Row className="text-center">
            <Progressbar />
          </Row>
          <Row className="title">
            <h1>Personnalisation</h1>
          </Row>
          <Row>
            <Col sm="6" lg="6" className="column">
              <FormGroup>
                <Label for="customMessage"><u><b>Message personnalisé sur le gâteau?</b></u></Label>
                <Input
                  type="textarea"
                  style={{
                    fontFamily: font,
                    fontSize: '3.5vmin',
                  }}
                  name="text"
                  id="customMessage"
                  maxLength="40"
                  placeholder="♥ Joyeux anniversaire chéri! ♥"
                />
                <Dropdown isOpen={dropdownOpen} toggle={this.toggle}>
                  <DropdownToggle caret>
                    Choisissez la police du message:
                  </DropdownToggle>
                  <DropdownMenu>
                    {
                      selectedFonts.map(index => (
                        <div key={index}>
                          <DropdownItem
                            style={{
                              fontFamily: googleFonts[index].family,
                              fontSize: '2.5vmin',
                            }}
                            onClick={() => this.chooseFont(googleFonts[index].family)}
                          >
                            Pimp my Cake
                          </DropdownItem>
                          <DropdownItem divider />
                        </div>))
                    }
                  </DropdownMenu>
                </Dropdown>
              </FormGroup>
              <FormGroup>
                <Label for="exampleText"><u><b>Demande supplémentaire?</b></u></Label>
                <Input type="textarea" name="text" id="exampleText" />
              </FormGroup>
            </Col>
            <Col sm="6" lg="6" className="column">
              <FormGroup tag="fieldset">
                <legend>Décoration</legend>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="radio1" onClick={() => this.chooseDecorationType(null)} />
                    {' '}
                    Pas de décoration personnalisée sur le gâteau
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="radio1" onClick={() => this.chooseDecorationType('2D')} />
                    {' '}
                    Décoration 2D (image en sucre sur le gâteau)
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="radio1" onClick={() => this.chooseDecorationType('3D')} />
                    {' '}
                    Décoration 3D (sculpture personnalisée)
                  </Label>
                </FormGroup>
              </FormGroup>
              {
                decorationChoice === null ? <div className="emptyDiv"><br></br><br></br><br></br></div> : decorationChoice === "2D" ?
                  <FormGroup className="uploadImage justify-content">
                    <Label for="file2D"><u><b>Votre image 2D</b></u></Label>
                    <Input type="file" name="file" id="file2D" />
                    <FormText color="muted">
                      Veuillez télécharger l’image à imprimer en 2D
                </FormText>
                  </FormGroup>
                  :
                  <FormGroup className="uploadImage justify-content">
                    <Label for="file3D"><u><b>Décoration 3D</b></u></Label>
                    <Input type="file" name="file" id="file3D" />
                    <FormText color="muted">
                      Vous pouvez télécharger une image d’exemple
                </FormText>
                  </FormGroup>
              }
              <div className="images">
                <figure>
                  <img className="examplePics" src="https://static.wixstatic.com/media/2c2605_3f4ad0ee36324517a09747604cb1c6df~mv2_d_1200_1600_s_2.jpg/v1/fill/w_431,h_574,al_c,q_90,usm_0.66_1.00_0.01/2c2605_3f4ad0ee36324517a09747604cb1c6df~mv2_d_1200_1600_s_2.jpg" alt="Gâteau 2D" />
                  <figcaption>Exemple image 2D</figcaption>
                </figure>
                <figure>
                  <img className="examplePics" src="https://static.wixstatic.com/media/2c2605_e4c78208027b4b27803b9076aaf5beec~mv2.jpg/v1/fill/w_387,h_574,al_c,q_90,usm_0.66_1.00_0.01/2c2605_e4c78208027b4b27803b9076aaf5beec~mv2.jpg" alt="Gâteau 3D" />
                  <figcaption>Exemple image 3D</figcaption>
                </figure>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="btn-group2">
          <Price />
          <NavArrowsLayout />
        </div>
      </div>
    );
  }
}

export default Personalisation;
