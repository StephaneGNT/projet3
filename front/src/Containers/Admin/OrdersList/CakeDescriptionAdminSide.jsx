import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  getCakeDescription, getCakeIngredientsList, getCakeDecoration, getCakePrice,
} from './cake_description_functions_admin_side';

const CakeDescription = (props) => {
  const { cake, user, photo2D, photo3D, description3D } = props;
  console.log("cake", cake)

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

export default CakeDescription;
