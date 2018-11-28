import React, { Component } from 'react';
import '../../Assets/Styles/CakeInfo.css';
import {
  Label, Input, Button, Container, Row, Col,
} from 'reactstrap';
import ToggleDisplay from 'react-toggle-display';
import NavArrowsLayout from './NavArrowsLayout';

class CakeInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSelected: '',
    };
    this.selectedCakeType = this.selectedCakeType.bind(this);
  }

  selectedCakeType = (selectedCake) => {
    this.setState({
      isSelected: selectedCake,
    });
  }


  render() {
    return (
      <Container className="h-100">
        <Row className="justify-content-around">
          <Col sm="5">
            <h3 className="mt-3">Choississez votre type de douceur :</h3>
          </Col>
        </Row>
        <Row className="mt-3 justify-content-around">
          <Col sm="2" className="text-center">
            <Button className="btn" color="info" onClick={() => this.selectedCakeType('cookie')}>
              cookie
            </Button>
          </Col>
          <Col sm="2" className="text-center">
            <Button className="btn-marg" color="info" onClick={() => this.selectedCakeType('cake')}>
              cake
            </Button>
          </Col>
          <Col sm="2" className="text-center">
            <Button className="btn-marg" color="info" onClick={() => this.selectedCakeType('cheesecake')}>
              cheesecake
            </Button>
          </Col>
          <Col sm="2" className="text-center">
            <Button className="btn-marg" color="info" onClick={() => this.selectedCakeType('macarons')}>
              macarons
            </Button>
          </Col>
        </Row>
        <Row className="mt-5 justify-content-around">
          <Col sm="5">
            <Label for="choix_occasion" className="labels-perso mt-3">Pour quelle occasion voulez-vous votre gâteau ?</Label>
            <Input type="select" name="select">
              <option>Anniversaire d'Adulte</option>
              <option>Anniversaire d'Enfant</option>
              <option>Apéro</option>
              <option>Baptême</option>
              <option>Babyshower, naissance</option>
              <option>Brunch</option>
              <option>Disney</option>
              <option>Fête des Mères</option>
              <option>Fête des Pères</option>
              <option>Halloween</option>
              <option>Mariage</option>
              <option>Sport</option>
              <option>Pot de départ</option>
              <option>Noel</option>
              <option>Pâques</option>
              <option>Remerciements</option>
              <option>Enterrement de vie de Fille/Garçon</option>
            </Input>
            <Label for="taille" className="labels-perso mt-3">Sélectionnez la taille souhaitée :</Label>
            <Input type="select" name="select">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Input>
    
            <ToggleDisplay show={this.state.isSelected === 'cake'}>
              <Label for="nbrEtages" className="labels-perso mt-3">Sélectionnez le nombre d'étages souhaité :</Label>
              <Input type="select" name="select">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Input>
            </ToggleDisplay>
          </Col>
          <Col sm="5">
            <div className="bg-light p-5">
              <h4>Tips:</h4>
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center mt-3">
          <NavArrowsLayout />
        </Row>
      </Container>
    );
  }
}

export default CakeInfo;
