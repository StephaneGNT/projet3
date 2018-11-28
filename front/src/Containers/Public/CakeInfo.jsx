
import '../../Assets/Styles/CakeInfo.css';
import { Label, Input, Button, Container, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import ToggleDisplay from 'react-toggle-display';
import NavArrowsLayout from './NavArrowsLayout';
import changeCakeType from '../../Actions/changeCakeType';

class CakeInfo extends Component {

  selectedCakeType = (selectedCake) => {
    this.setState({
      selectedCakeType: selectedCake,
    });
  }

  render() {
    return (
      <Container style={{ height: '80vh' }}>
        <Row className="justify-content-around">
          <Col sm="5">
            <h3 className="mt-3">Choississez votre type de douceur :</h3>
          </Col>
        </Row>
        <Row className="mt-3 justify-content-around">
          <Col sm="2" className="text-center">
            <Button className="btn" color="info" onClick={() => this.props.changeCakeType('cookie')}>
              cookie
            </Button>
          </Col>
          <Col sm="2" className="text-center">
            <Button className="btn-marg" color="info" onClick={() => this.props.changeCakeType('cake')}>
              cake
            </Button>
          </Col>
          <Col sm="2" className="text-center">
            <Button className="btn-marg" color="info" onClick={() => this.props.changeCakeType('cheesecake')}>
              cheesecake
            </Button>
          </Col>
          <Col sm="2" className="text-center">
            <Button className="btn-marg" color="info" onClick={() => this.props.changeCakeType('macaron')}>
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
    
            <ToggleDisplay show={this.props.selectedCakeType.type === 'cake'}>
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
            <div className="bg-light p-2">
              <h5>Tips:</h5>
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

const mapStateToProps = (state) => { 
  return {
    dispatch: state.dispatch,
    selectedCakeType: state.cakeCharacteristics,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeCakeType: cakeType => dispatch(changeCakeType(cakeType)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeInfo);;