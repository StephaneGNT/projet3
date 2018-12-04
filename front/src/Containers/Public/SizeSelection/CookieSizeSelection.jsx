import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Row, Container, Label } from 'reactstrap';
import changeCakeSize from '../../../Actions/cakeActions/changeCakeSize';
import changeCakeAmount from '../../../Actions/cakeActions/changeCakeAmount';

import '../../../Assets/Styles/CakeSizeSelection.css';

class CakeSizeSelection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      size: 0,
      amount: 0,
    };
  }

  chooseSize = (value) => {
    this.setState({
      ...this.state,
      size: value,
    });
  }

  changeAmount = (event) => {
    this.setState({
      ...this.state,
      amount: event.target.value,
    });
  }

  sendCakeInfos = (size, amount) => {
    const { selectCakeSize, selectQuantity } = this.props;
    selectCakeSize(size);
    selectQuantity(amount);
  }

  renderConfirmation = () => {
    const { size, amount } = this.state;
    if (size !== 0) return (<Button onClick={() => this.sendCakeInfos(size, amount)}> Confirmer </Button>);
    return <div />;
  }

  render() {
    return (
      <Container style={{ minWidth: '100%' }}>
        <Label className="labels-perso mt-3">Choisissez la taille de vos cookies</Label>
        <Row>
          <Button onClick={() => this.chooseSize('S')}>Petit</Button>
          <Button onClick={() => this.chooseSize('M')}>Moyen</Button>
          <Button onClick={() => this.chooseSize('L')}>Gros</Button>
        </Row>
        <Row>
          <Label className="labels-perso mt-3">Choisissez le nombre de cookies que vous voulez </Label>
          <input placeholder="Quantité de cookies" onChange={event => this.changeAmount(event)} />
        </Row>
        <Row>
          {this.renderConfirmation()}
        </Row>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  selectCakeSize: size => dispatch(changeCakeSize(size)),
  selectQuantity: amount => dispatch(changeCakeAmount(amount)),
});

export default connect(null, mapDispatchToProps)(CakeSizeSelection);
