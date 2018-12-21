import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';
import 'moment/locale/fr';
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
} from 'reactstrap';

import '../../../Assets/Styles/OrderDetail.css';
import '../../../Assets/Styles/Confirmation.css';


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
      story,
      deliveryDate,
    } = this.props;

    // let message = '';

    // if (occasion) message += `Occasion: ${occasion}`;
    // message += `Commande: ${quantity} ${type}`;
    // if (typeof (size) === 'number') message += ` pour ${size} personnes`;
    // else message += ` de taille ${size}`;
    // if (decoration || customMessage) message += `Personnalisation : ${decoration} ${customMessage}`;
    // message += `Composition : ${(ingredients.map(item => item.name))}`;
    // if (deliveryDate) message += `Date de retrait : ${moment(deliveryDate).format('Do MMMM YYYY')}`;

    // return message;

    if (type === 'brownie' || type === 'cookie') {
      return (
        <p>
          Occasion:
          {' '}
          {occasion}
          <br />
      Votre commande:
          {' '}
          {quantity}
          {' '}
          {type}
          {' '}
          de taille
          {' '}
          {size}
          <br />
          <br />
          Personnalisation:
          <br />
          {decoration}
          {' '}
          {' '}
          {customMessage}
          {' '}
          <br />
          <br />
      Composition:
          {' '}
          {(ingredients.map(item => <div>{item.name}</div>))}
          {' '}
          <br />
          Date de retrait :
          {' '}
          {' '}
          {!deliveryDate ? 'non choisie' : moment(deliveryDate).format('Do MMMM YYYY')}
        </p>
      );
    }
    if (type === 'cheesecake') {
      return (
        <p>
        Occasion :
          {' '}
          {occasion}
          {' '}
          <br />
        Votre commande :
          {' '}
          {type}
          {' '}
          <br />
          <br />
        Personnalisation:
          <br />
          {decoration}
          {' '}
          {' '}
          {customMessage}
          {' '}
          <br />
          <br />
        La composition de votre cheesecake:
          {(ingredients.map(item => <div>{item.name}</div>))}
          <br />
          <br />
          Date de retrait :
          {' '}
          {' '}
          {!deliveryDate ? 'non choisie' : moment(deliveryDate).format('Do MMMM YYYY')}
        </p>
      );
    }
    if (type === 'macaron') {
      return (
        <p>
         Occasion:
          {' '}
          {occasion}
          <br />
      Votre commande:
          {' '}
          {quantity}
          {' '}
          {type}
          {' '}
        de taille
          {' '}
          {size}
          {' '}
          <br />
          <br />
          Personnalisation:
          <br />
          {decoration}
          {' '}
          {' '}
          {customMessage}
          {' '}
          <br />
          <br />
          Parfum de vos macarons:
          <br />
          {' '}
          {(ingredients.map(item => item.name.includes('Parfum') && <div>{item.name}</div>))}
          <br />
          Couleur de vos macarons:
          {(ingredients.map(item => !item.name.includes('Parfum') && <div>{item.name}</div>))}
          Date de retrait :
          {' '}
          {' '}
          {!deliveryDate ? 'non choisie' : moment(deliveryDate).format('Do MMMM YYYY')}
          <br />
        </p>
      );
    }
    return (
      <p>
      Occasion:
        {' '}
        {occasion}
        <br />
      Votre commande:
        {' '}
        {type}
        {' '}
       de
        {' '}
        {story}
        {' '}
        étage(s) pour
        {' '}
        {size}
        {' '}
         personnes
        <br />
        <br />
      Personnalisation:
        <br />
        {decoration}
        {' '}
        {' '}
        {customMessage}
        {' '}
        <br />
        <br />
        Composition de votre cake:
        {' '}
        {(ingredients.map(item => <div>{item.name}</div>))}
        <br />
        Date de retrait :
        {' '}
        {' '}
        {!deliveryDate ? 'non choisie' : moment(deliveryDate).format('Do MMMM YYYY')}
      </p>
    );
  }

  render() {
    const { price } = this.props;
    return (
      <div>
        <Card id="Card">
          <CardBody>
            <CardTitle>Résumé de votre commande :</CardTitle>
            <CardText>
              {this.changeConfirmation()}
            </CardText>
          </CardBody>
        </Card>
        <br />

        <div>
          <p>
          Montant de votre commande :
            {' '}
            {price}
        €
          </p>
        </div>

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
  deliveryDate: PropTypes.string.isRequired,

};

const mapStateToProps = (state) => {
  return (
    {
      deliveryDate: state.orderCharacteristics.delivery_date,
      story: state.cakeCharacteristics.story,
      price: state.cakeCharacteristics.price,
      customMessage: state.cakeCharacteristics.customization.customMessage.choice,
      decoration: state.cakeCharacteristics.customization.decoration.choice, 
      ingredients: state.cakeCharacteristics.ingredients,
      quantity: state.cakeCharacteristics.quantity,
      occasion: state.cakeCharacteristics.occasion,
      size: state.cakeCharacteristics.size,
      type: state.cakeCharacteristics.type,
      cake: state.cakeCharacteristics,
      index: state.pageIndex,
    }
  );
};
export default connect(mapStateToProps)(Confirmation);
