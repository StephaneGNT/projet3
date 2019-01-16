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
      type, size, occasion, quantity, ingredients, customMessage, decoration, deliveryDate,
    } = this.props;

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
    if (type === 'cheesecake' || type === 'cake') {
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
        Composition:
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
  size: PropTypes.string.isRequired,
  occasion: PropTypes.string.isRequired,
  ingredients: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
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
