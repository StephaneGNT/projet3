import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Table, Container } from 'reactstrap';

import '../../../Assets/Styles/OrderDetail.css';
import '../../../Assets/Styles/Confirmation.css';
import CakeDescription from '../../CakeDescription';


const Confirmation = (props) => {
  const { cake, customWishes } = props;
  return (
    <Container>
      <Table>
        <tbody>
          {CakeDescription(cake, customWishes, 'user')}
        </tbody>
      </Table>
      <br />
      <p> Conditions générales de vente : Paiement par carte, chèque ou espace.</p>
      <p> Récupération de la commande en boutique.</p>
    </Container>

  );

}
Confirmation.propTypes = {
  cake: PropTypes.shape({}).isRequired,
  customWishes: PropTypes.shape({}).isRequired,
};

const mapStateToProps = state => ({
  cake: state.cakeCharacteristics,
  customWishes: state.customizationCustomer,
});

export default connect(mapStateToProps)(Confirmation);
