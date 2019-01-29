import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  getCakeDescription, getCakeIngredientsList, getCakeDecoration, getCakePrice,
} from './cake_description_functions_user_side';

const CakeDescriptionUserSide = (props) => {
  const {
    cake, user, customWishes, photo2D, photo3D, description3D,
  } = props;
  console.log("cake", cake);
  return (
    <tbody>
      {user === 'admin'
      && (
      <tr>
        <td>N°</td>
        <td>{cake.id}</td>
      </tr>)}
      <tr>
        <td>Occasion : </td>
        <td>{cake.occasion ? cake.occasion : 'Non précisée'}</td>
      </tr>
      <tr>
        <td>Caractéristiques : </td>
        <td>{getCakeDescription(cake, photo2D, photo3D, description3D)}</td>
      </tr>
      <tr>
        <td>Ingrédients : </td>
        <td><pre style={{ fontFamily: 'Arial', fontSize: '16px' }}>{getCakeIngredientsList(cake)}</pre></td>
      </tr>
      <tr>
        <td>Décoration : </td>
        <td>{getCakeDecoration(customWishes, photo2D, photo3D, description3D)}</td>
      </tr>
      <tr>
        <td>Montant : </td>
        <td>{getCakePrice(cake, customWishes, user)}</td>
      </tr>
    </tbody>
  );
};

CakeDescriptionUserSide.propTypes = {
  cake: PropTypes.shape({}).isRequired,
  user: PropTypes.shape({}).isRequired,
  customWishes: PropTypes.shape({}).isRequired,
  photo2D: PropTypes.string.isRequired,
  photo3D: PropTypes.string.isRequired,
  description3D: PropTypes.string.isRequired,
}

const mapStateToProps = state => ({
  customWishes: state.customizationCustomer,
  cake: state.cakeCharacteristics,
});

export default connect(mapStateToProps)(CakeDescriptionUserSide);
