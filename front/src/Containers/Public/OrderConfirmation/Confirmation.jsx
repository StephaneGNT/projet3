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
    const {
      customSummary, type, size, occasion, quantity, ingredients, customMessage, decoration, deliveryDate,
    } = this.props;

    // if (occasion) description += `Occasion : ${occasion}`;

    // description += `Commande : ${quantity} ${type} `;
    // if (type === 'cake') description += `de ${story} étage(s) pour ${size} personnes`;
    // else description += `de taille ${size}`;

    // description += 'Composition : ';
    // if (type === 'macarons') {
    //   const flavor = ingredients.map(ingredient => ingredient.type === 'Parfum' && ingredient.name);
    //   const shell = ingredients.map(ingredient => ingredient.type === 'Coquille' && ingredient.name);
    //   description += `Parfum ${flavor} et couleur ${shell}`;
    // } else {
    //   ingredients.map((ingredient) => { description += ingredient.name; });
    // }

    // if (decoration && customMessage) description += `Décoration : ${decoration} et ${customMessage}`;
    // else if (decoration || customMessage) {
    //   if (decoration) description += `Décoration : ${decoration}`;
    //   else description += `Décoration : ${customMessage}`;
    // }

    // if (deliveryDate) description += `Date de retrait : ${deliveryDate}`;
    // return description;

    if (type === 'brownie' || type === 'cookie') {
      return (
        <div>
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
          {customSummary.deco1}
          {' '}
          {' '}
          {customSummary.deco2}
          {' '}
          <br />
          <br />
          Composition:
          {' '}
          {(ingredients.map(item => <p>{item.name}</p>))}
          {' '}
          <br />
          Date de retrait :
          {' '}
          {' '}
          {!deliveryDate ? 'non choisie' : moment(deliveryDate).format('Do MMMM YYYY')}
        </div>
      );
    }
    if (type === 'cheesecake' || type === 'cake') {
      return (
        <div>
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
          {customSummary.deco1}
          {' '}
          {' '}
          {customSummary.deco2}
          {' '}
          <br />
          <br />
          Composition:
          {(ingredients.map(item => <p>{item.name}</p>))}
          <br />
          <br />
          Date de retrait :
          {' '}
          {' '}
          {!deliveryDate ? 'non choisie' : moment(deliveryDate).format('Do MMMM YYYY')}
        </div>
      );
    }
    if (type === 'macaron') {
      return (
        <div>
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
          {customSummary.deco1}
          {' '}
          {' '}
          {customSummary.deco2}
          {' '}
          <br />
          <br />
          Parfum de vos macarons:
          <br />
          {' '}
          {(ingredients.map(item => item.name.includes('Parfum') && <p>{item.name}</p>))}
          <br />
          Couleur de vos macarons:
          {(ingredients.map(item => !item.name.includes('Parfum') && <p>{item.name}</p>))}
          Date de retrait :
          {' '}
          {' '}
          {!deliveryDate ? 'non choisie' : moment(deliveryDate).format('Do MMMM YYYY')}
          <br />
        </div>
      );
    }
  }

  render() {
    const { price } = this.props;
    const priceMessage = `Montant de votre commande : ${price} €`;
    return (
      <div>
        <Card id="Card" style={{ width: "100%" }}>
          <CardBody>
            <CardTitle>Votre commande</CardTitle>
            <CardText style={{ whiteSpace: 'pre' }}>
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
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  occasion: PropTypes.string.isRequired,
  ingredients: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  quantity: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  customMessage: PropTypes.string.isRequired,
  decoration: PropTypes.string.isRequired,
  // story: PropTypes.number.isRequired,
  deliveryDate: PropTypes.string.isRequired,

};

const mapStateToProps = (state) => {
  return (
    {
      deliveryDate: state.orderCharacteristics.delivery_date,
      story: state.cakeCharacteristics.story,
      price: state.cakeCharacteristics.price,
      customSummary: state.customizationCustomer,
      // decoration: state.customizationCustomer.decoration.choice,
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
