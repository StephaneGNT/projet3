import React from 'react';
import {
  getCakeDescription, getCakeIngredientsList, getCakeDecoration, getCakePrice,
} from './cake_description_functions';

const CakeDescription = (cake, customWishes, user) => {
  const render = [];
  let cakeDeco;
  if (customWishes) cakeDeco = customWishes;
  else cakeDeco = cake;

  const description = getCakeDescription(cake);
  const ingredientsList = getCakeIngredientsList(cake);
  const decoration = getCakeDecoration(cakeDeco);
  const price = getCakePrice(cake, customWishes, user);

  if (user === 'admin') {
    render.push(
      <tr>
        <td>N°</td>
        <td>{cake.id}</td>
      </tr>,
    );
  }

  render.push(
    <tr>
      <td>Occasion : </td>
      <td>{cake.occasion ? cake.occasion : 'Non précisée'}</td>
    </tr>,
    
    <tr>
      <td>Caractéristiques : </td>
      <td>{description}</td>
    </tr>,
    <tr>
      <td>Ingrédients : </td>
      <td><pre style={{ fontFamily: 'Arial', fontSize: '16px' }}>{ingredientsList}</pre></td>
    </tr>,
    <tr>
      <td>Décoration : </td>
      <td>{decoration}</td>
    </tr>,
    <tr>
      <td>Montant : </td>
      <td>{price}</td>
    </tr>,
  );

  return render;
};

export default CakeDescription;
