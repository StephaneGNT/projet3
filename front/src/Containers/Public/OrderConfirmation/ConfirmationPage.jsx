import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Button,
} from 'reactstrap';
import '../../../Assets/Styles/ConfirmationPage.css';

const ConfirmationPage = (props) => {
  const { customer, history, location } = props;


  window.scrollTo(0, 0);


  return (
    <div className="main-container">
      <div className="order-text">
        <b>
          Merci d’avoir passé commande chez Pimp my Cake! Votre numéro de commande est le
          {' '}
          {/* <u>{location.state.customer}</u> */}
          .
        </b>
        <br />
        <br />
        Un mail de récapitulatif de votre commande a été envoyé à
        {` ${customer.email}`}
        .
        Si vous ne le recevez pas, vérifier le dossier spam de votre messagerie.
        <br />
        L’équipe de Pimp My Cake reprendra contact avec vous
        très prochainement pour finaliser les détails de la commande.
        <br />
        Si vous avez des questions, n’hésitez pas à nous
        contacter en vous rendant sur notre page de contact.
        <br />
        <br />
        Toute l’équipe de Pimp My Cake vous remercie et vous souhaite une agréable journée!
        <br />
        <br />
        A très bientôt.
      </div>
      <div className="button-group">
        <a href={`${process.env.PUBLIC_URL}/`}>
          <Button
            className="buttons"
            // onClick={() => history.push(`${process.env.PUBLIC_URL}/`)}
          >
            ACCUEIL
          </Button>
        </a>
        <Button className="buttons">CONTACT</Button>
      </div>
    </div>
  );
};

ConfirmationPage.propTypes = {
  selectDeliveryDate: PropTypes.func.isRequired,
  getDatesInDB: PropTypes.func.isRequired,
  cake: PropTypes.shape({}).isRequired,
  order: PropTypes.shape({}).isRequired,
  calendar: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

const StateToProps = state => ({
  customer: state.customerInfo,
});

const DispatchToProps = dispatch => ({
  // getDatesInDB: () => dispatch(fetchDatesInDB()),
  // selectDeliveryDate: date => dispatch(setDeliveryDate(date)),
});

export default connect(StateToProps, DispatchToProps)(ConfirmationPage);
