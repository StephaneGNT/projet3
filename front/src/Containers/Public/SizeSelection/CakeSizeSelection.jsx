import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Row, Col, Container, Label } from 'reactstrap';
import changeCakeSize from '../../../Actions/cakeActions/changeCakeSize';
import changeCakeStory from '../../../Actions/cakeActions/changeCakeStory';

import '../../../Assets/Styles/CakeSizeSelection.css';

class CakeSizeSelection extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      size: 0,
      story: 0,
      chosenStory: [],
    };
  }

  addPieces = (value) => {
    const chosenStory = this.state.chosenStory;
    chosenStory.push(value);
    this.setState({
      size: this.state.size + value,
      story: this.state.story + 1,
      chosenStory,
    });
  }

  removePieces = (value) => {
    const chosenStory = this.state.chosenStory;
    if (chosenStory.indexOf(value) < 0) return;
    chosenStory.splice(chosenStory.indexOf(value), 1);
    this.setState({
      size: this.state.size - value,
      story: this.state.story - 1,
      chosenStory,
    });
  }

  sendCakeInfos = (size, story) => {
    this.props.selectCakeSize(size);
    this.props.selectCakestory(story);
  }

  renderCakeSizeChoice = () => {
    const storys = [5, 10, 20, 30, 50];
    const tailles = ['10 cm', '12 cm', '14 cm', '16 cm', '18 cm'];
    const render = [];
    for (let i = 0; i < storys.length; i += 1) {
      let width = `${storys[i] / 50 * 100}%`;
      let disabled = this.state.chosenStory.indexOf(storys[i]) === -1;
      render.push(
        <Container className="cakeSize">
          <Row>
            <Col sm="6">
              <div className="story" style={{ width }}>{storys[i]}</div>
            </Col>
            <Col sm="3"><div>{tailles[i]}</div></Col>
            <Col sm="3" className="buttonDisplay">
              <Button onClick={() => this.addPieces(storys[i])}>+</Button>
              <Button disabled={disabled} onClick={() => this.removePieces(storys[i])}>-</Button>
            </Col>
          </Row>
        </Container>,
      );
    }
    return render;
  }

  renderNombreDePersonnes = () => {
    if (this.state.size > 0) return (<p> Nombre de personnes : {this.state.size} </p>);
    return <div />
  }

  renderNombreDeStories = () => {
    if (this.state.size > 0) return (<p> Nombre d'étages : {this.state.story} </p>);
    return <div />
  }

  renderConfirmation = () => {
    if (this.state.size > 0) return (<Button onClick={e => this.sendCakeInfos(this.state.size, this.state.story)}> Confirmer </Button>)
    return <div />
  }


  render() {
    return (
      <Container style={{ minWidth: '100%' }}>
        <Label className="labels-perso mt-3">Choisissez la taille de votre gâteau</Label>
        <Row>
          <Col sm="6"> Nombre de personnes </Col>
          <Col sm="3"> Diamètre </Col>
          <Col sm="3" />
        </Row>
        {this.renderCakeSizeChoice()}
        <Row>
          {this.renderNombreDePersonnes()}
        </Row>
        <Row>
          {this.renderNombreDeStories()}
        </Row>
        <Row>
          {this.renderConfirmation()}
        </Row>
      </Container>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  selectCakeSize: size => dispatch(changeCakeSize(size)),
  selectCakestory: story => dispatch(changeCakeStory(story)),
});

export default connect(null, mapDispatchToProps)(CakeSizeSelection);
