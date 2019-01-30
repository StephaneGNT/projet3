import React from 'react';
import PropTypes from 'prop-types';
import {
  getCakeDescription, getCakeIngredientsList, getCakeDecoration, getCakePrice,
} from './cake_description_functions_admin_side';

const CakeDescription = (props) => {
  const {
    cake, user, photo2D, photo3D, description3D,
  } = props;

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
        <td>{getCakeDecoration(cake, photo2D, photo3D, description3D)}</td>
      </tr>
      <tr>
        <td>Montant : </td>
        <td>{getCakePrice(cake)}</td>
      </tr>
    </tbody>
  );
};

CakeDescription.propTypes = {
  cake: PropTypes.shape({}).isRequired,
  user: PropTypes.shape({}).isRequired,
  photo2D: PropTypes.string.isRequired,
  photo3D: PropTypes.string.isRequired,
  description3D: PropTypes.string.isRequired,
}

export default CakeDescription;
