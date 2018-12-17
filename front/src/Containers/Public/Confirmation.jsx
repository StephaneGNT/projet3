import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  Card,
  CardText,
  CardBody,
  CardTitle,
} from 'reactstrap';

import '../../Assets/Styles/OrderDetail.css';
import '../../Assets/Styles/Confirmation.css';


class Confirmation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  changeConfirmation = () => {
    const {
      type,
      size,
      occasion,
      quantity,
      ingredients,
      customMessage,
      decoration,
      price,
      story,
    } = this.props;
    if (type === 'brownie' || type === 'cookie') {
      return (
        <p>
          A l’occasion d’un(e)
          {occasion}
          ,
          <br />
          vous avez commandé
          {quantity}
          {type}
          de taille
          {size}
          <br />
          votre personnalisation:
          {decoration}
          {customMessage}
          <br />
      La composition de votre
          {type}
      :
          {(ingredients.map(item => <div>{item.name}</div>))}
          <br />
          Montant de votre commande :
          {price}
          €
        </p>
      );
    }
    if (type === 'cheesecake') {
      return (
        <p>
        A l’occasion d’un(e)
          {occasion}
        vous avez commandé un
          {type}
          <br />
        Personnalisation:
          {decoration}
          {customMessage}
          <br />
          <br />
        La composition de votre cheesecake:
          {(ingredients.map(item => <div>{item.name}</div>))}
          <br />
          <br />
        Montant de votre commande :
          {price}
        €
        </p>
      );
    }
    if (type === 'macaron') {
      return (
        <p>
          A l’occasion d’un(e)
          {occasion}
          vous avez commandé
          {quantity}
          {type}
        de taille
          {size}
          <br />
          Personnalisation:
          {decoration}
          {customMessage}
          <br />
          La composition de vos macarrons:
          {(ingredients.map(item => <div>{item.name}</div>))}
          <br />
          Montant de votre commande :
          {price}
          €
        </p>
      );
    }
    return (
      <p>
      A l’occasion d’un(e)
        {occasion}
      ,
        <br />
      votre commande est un
        {type}
       de
        {story}
        étage(s) pour
        {size}
         personnes qui a une décoration
        {decoration}
        {customMessage}
        <br />
        {(ingredients.map(item => <div>{item.name}</div>))}
        <br />
        Montant de votre commande :
        {price}
        €
      </p>
    );
  }

  render() {
    return (

      <div>
        <Card id="Card">
          <CardBody>
            <CardTitle>Votre commande :</CardTitle>
            <CardText>
              {this.changeConfirmation()}
            </CardText>
          </CardBody>
        </Card>
        <br />

        <p> Conditions générales de vente</p>

      </div>

    );
  }
}
Confirmation.propTypes = {
  type: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  occasion: PropTypes.string.isRequired,
  ingredients: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  customMessage: PropTypes.string.isRequired,
  decoration: PropTypes.string.isRequired,
  story: PropTypes.number.isRequired,

};

const mapStateToProps = (state) => {
  return (
    {
      story: state.cakeCharacteristics.story,
      price: state.cakeCharacteristics.price,
      // customization: state.cakeCharacteristics.customization,
      ingredients: state.cakeCharacteristics.ingredients,
      quantity: state.cakeCharacteristics.quantity,
      occasion: state.cakeCharacteristics.occasion,
      size: state.cakeCharacteristics.size,
      type: state.cakeCharacteristics.type,
      cake: state.cakeCharacteristics,
      index: state.pageIndex,
      customMessage: state.cakeCharacteristics.customization.customMessage.choice,
      decoration: state.cakeCharacteristics.customization.decoration.choice, 
    }
  );
};
export default connect(mapStateToProps)(Confirmation);
