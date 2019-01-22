import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';
import 'moment/locale/fr';
import {
  Card, Table, Container,
} from 'reactstrap';

import '../../../Assets/Styles/OrderDetail.css';
import '../../../Assets/Styles/Confirmation.css';
import CakeDecoration from '../../CakeDecoration';


const Confirmation = (props) => {
  const { cake } = props;
  return (
    <Container>
      <Table>
        <tbody>
          {/* {CakeDecoration(cake, '')} */}
        </tbody>
      </Table>
      <p> Conditions générales de vente : Paiement par carte, chèque ou espace, en boutique. Une avance de 40% du montant sera demandée.</p>
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
