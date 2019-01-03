import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';
import 'moment/locale/fr';
import {
  Card, CardText, CardBody, CardTitle,
} from 'reactstrap';

import '../../../Assets/Styles/OrderDetail.css';
import '../../../Assets/Styles/Confirmation.css';


class Confirmation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderConfirmation = () => {
    let description = '';
    const {
      type, size, occasion, quantity, ingredients, customMessage, decoration, story, deliveryDate,
    } = this.props;

    if (occasion) description += `Occasion : ${occasion}`;
    description += `Commande : ${quantity} ${type} `;
    if (type === 'cake') description += `de ${story} étage(s) pour ${size} personnes`;
    else description += `de taille ${size}`;

    if (decoration && customMessage) description += `Décoration : ${decoration} et ${customMessage}`;
    else if (decoration || customMessage) {
      if (decoration) description += `Décoration : ${decoration}`;
      else description += `Décoration : ${customMessage}`;
    }

    if (type === 'macarons') {
      const flavor = ingredients.map((ingredient) => {
        if (ingredient.type === 'Parfum') return ingredient.name;
      });
      const color = ingredients.map((ingredient) => {
        if (ingredient.type === 'Coquille') return ingredient.name;
      });
      description += `Parfum : ${flavor} - Couleur : ${color}`;
    } else description += `${ingredients.map(item => item.name)} `;

    if (deliveryDate) description += `Date de retrait : ${moment(deliveryDate).format('Do MMMM YYYY')}`;

    return description;
  }

  render() {
    const { price } = this.props;
    const priceMessage = `Montant de votre commande : ${price} €`;
    return (
      <div>
        <Card id="Card">
          <CardBody>
            <CardTitle>Votre commande</CardTitle>
            <CardText>
              {this.renderConfirmation()}
            </CardText>
          </CardBody>
        </Card>
        <br />

        <div>
          {priceMessage}
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
      customMessage: state.customizationCustomer.customMessage.choice,
      decoration: state.customizationCustomer.decoration.choice,
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
