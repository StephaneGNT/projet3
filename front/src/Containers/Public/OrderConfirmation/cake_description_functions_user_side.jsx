import React from 'react';

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

export const getCakeDecoration = (cakeDeco, photo2D, photo3D, description3D) => {
  let message;
  let deco2D;
  let deco3D;

  if (cakeDeco.deco1 === '' && cakeDeco.deco2 === '') return (('Aucune décoration'));
  if (cakeDeco.deco1 === 'message' || cakeDeco.deco2 === 'message') {
    message = (
      <div>
        <div>
          <link
            rel="stylesheet"
            href={`https://fonts.googleapis.com/css?family=${cakeDeco.msgFont}`}
          />
        </div>
        <p>Message imprimé sur feuille de sucre : </p>
        <span
          style={{
            color: cakeDeco.msgColor,
            backgroundColor: cakeDeco.msgBgColor,
            fontFamily: cakeDeco.msgFont,
          }}
        >
          {cakeDeco.msgContent}
        </span>
      </div>
    );
  }
  if (cakeDeco.deco1 === '2D' || cakeDeco.deco2 === '2D') {
    deco2D = (
      <div>
        <p>Photo imprimée sur feuille de sucre : </p>
        <img src={photo2D} alt="Déco gâteau" />
      </div>);
  }
  if (cakeDeco.deco1 === '3D' || cakeDeco.deco2 === '3D') {
    deco3D = (
      <div>
        <p>Décoration en 3D </p>
        {photo3D && <img src={photo3D} alt="Déco gâteau" />}
        {description3D && <p>{description3D}</p>}
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

export const getCakePrice = (cake, customWishes, user) => {
  let cakeDeco;
  if (customWishes) cakeDeco = customWishes;
  else cakeDeco = cake;

  if (cakeDeco.deco1 === '3D' || cakeDeco.deco2 === '3D') {
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
  return `${cake.price.toFixed(2).replace(/[.,]00$/, '')} €`;
};
