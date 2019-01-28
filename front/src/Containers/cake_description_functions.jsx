import React from 'react';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import { getAllOrders, getAllCakes } from '../Actions/adminsActions/getAllOrdersCakesCustomers';

export const getCakeDescription = (cake) => {
  if (cake.type === 'cake') return (`1 ${cake.type} de ${cake.story} étage(s) pour ${cake.size} personnes`);
  if (cake.type === 'cheesecake') return (`1 ${cake.type} pour 16 personnes`);
  return (`${cake.quantity} ${cake.type} en taille ${cake.size}`);
};

export const getCakeIngredientsList = (cake) => {
  let ingredientsList = '';
  if (Array.isArray(cake.ingredients)) {
    cake.ingredients.map((ingredient) => {
      if (ingredient.type === 'Base') {
        ingredientsList += `${ingredient.name}
`;
      } else {
        ingredientsList += `${ingredient.type}: ${ingredient.name}
`;
      }
    });
  } else ingredientsList = cake.ingredients;
  return ingredientsList;
};

export const getCakeDecoration = (cake, customWishes) => {
  let cakeDeco = {};
  if (customWishes) cakeDeco = customWishes;
  else cakeDeco = cake;

  if (cakeDeco.deco1 === '' && cakeDeco.deco2 === '') return ('Aucune décoration');
  let message = null;
  let deco2D = null;
  let deco3D = null;
  if (cakeDeco.deco1 === 'message' || cakeDeco.deco2 === 'message') {
    message = (
      <div>
        <p>Message imprimé sur feuille de sucre : </p>
        <span
          style={{
            color: cakeDeco.msgColor,
            backgroundColor: cakeDeco.msgBgColor,
            fontFamily: cakeDeco.font,
          }}
        >
          {cakeDeco.msgContent}
        </span>
      </div>
    );
  }
  if (cakeDeco.deco1 === '2D' || cakeDeco.deco2 === '2D') {
    let photo;
    if (cakeDeco.photo1) photo = (`../../../back/tmp/${cakeDeco.photo1}`);
    else photo = (`../../../back/tmp/${cakeDeco.photo2}`);
    deco2D = (
      <div>
        <p>Photo imprimée sur feuille de sucre : </p>
        <img src={photo} alt="Déco gâteau" />
      </div>);
  }
  if (cakeDeco.deco1 === '3D' || cakeDeco.deco2 === '3D') {
    let photo = null;
    let decoDescription = null;
    if (cakeDeco.photo1) photo = (`../../../back/tmp/${cakeDeco.photo1}`);
    else if (cakeDeco.photo2) photo = (`../../../back/tmp/${cakeDeco.photo2}`);
    else decoDescription = cakeDeco.description3D;
    deco3D = (
      <div>
        <p>Décoration en 3D </p>
        {photo && <img src={photo} alt="Déco gâteau" />}
        {decoDescription && <p>{decoDescription}</p>}
      </div>
    );
  }

  return (
    <div>
      {message}
      <br />
      {deco2D}
      <br />
      {deco3D}
    </div>
  );
};

const changePrice = (newCake, cakeID) => {
  axios.put(`/api/cakes/${cakeID}`, newCake).then((res) => {
    if (res.status === 200) {
      window.alert("Prix mis à jour");
    }
  });
};

export const getCakePrice = (cake, customWishes, user) => {
  let cakeDeco;
  if (customWishes) cakeDeco = customWishes;
  else cakeDeco = cake;

  const newCake = {
    type: cake.type,
    size: cake.size,
    quantity: cake.quantity,
    story: cake.story,
    occasion: cake.occasion,
    price: 0,
    customWishes: cake.customWishes,
  };

  if (cakeDeco.deco1 === '3D' || cakeDeco.deco2 === '3D') {
    if (user === 'admin') {
      return (
        <div>
          <TextField
            placeholder={cake.price.toFixed(2).replace(/[.,]00$/, '')}
            onChange={(e) => { newCake.price = e.target.value; }}
            InputProps={{
              endAdornment: <InputAdornment position="end">€</InputAdornment>,
            }}
          />
          <p>Prix à confirmer en fonction de la sculpture 3D</p>
          <button type="button" onClick={() => changePrice(newCake, cake.id)}>Valider</button>
        </div>
      );
    }
    return (
      <div>
        <p>
          {cake.price.toFixed(2).replace(/[.,]00$/, '')}
           €
        </p>
        <p>Nous reviendrons vers vous pour vous confirmer le supplément de la décoration 3D</p>
      </div>
    );
  }
  // return `${cake.price.toFixed(2).replace(/[.,]00$/, '')} €`;
  return `${cake.price.toFixed(2).replace(/[.,]00$/, '')} €`;
};
