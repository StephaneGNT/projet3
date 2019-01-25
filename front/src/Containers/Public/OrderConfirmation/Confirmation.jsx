import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import moment from 'moment';
import 'moment/locale/fr';
import { Table, Container } from 'reactstrap';

import '../../../Assets/Styles/OrderDetail.css';
import '../../../Assets/Styles/Confirmation.css';
import CakeDecoration from '../../CakeDecoration';


const Confirmation = (props) => {
  const { cake } = props;
  console.log("cake", cake);
  return (
    <Container>
      <Table>
        <tbody>
          {CakeDecoration(cake, '')}
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
};

const mapStateToProps = state => ({
  cake: state.cakeCharacteristics,
});

export default connect(mapStateToProps)(Confirmation);
