import React from 'react';

const CakeDecoration = (cake, customWishes, user) => {
  const render = [];
  let description = '';
  if (cake.type === 'cake') description = `1 ${cake.type} de ${cake.story} étage(s) pour ${cake.size} personnes`;
  else if (cake.type === 'cheesecake') description = `1 ${cake.type} pour 16 personnes`;
  else description = `${cake.quantity} ${cake.type} en taille ${cake.size}`;

  let decoration = '';
  let cakeDeco = {};
  if (customWishes) cakeDeco = customWishes;
  else cakeDeco = cake;
  if (cakeDeco.deco1 === '' && cakeDeco.deco2 === '') decoration = 'Aucune décoration';
  if (cakeDeco.deco1 === 'message' || cakeDeco.deco2 === 'message') {
    decoration = (
      <div>
        Message :
        {' '}
        <span
          style={{ color: cakeDeco.msgColor, backgroundColor: cakeDeco.msgBgColor, fontFamily: cakeDeco.font }}
        >
          {cakeDeco.msgContent}
        </span>
      </div>
    );
  }
  if (cakeDeco.deco1 === '2D' || cakeDeco.deco1 === '3D') {
    decoration += (
      <div>
        Décoration
        {cake.deco1}
      </div>);
  }
  if (cakeDeco.deco2 === '2D' || cakeDeco.deco2 === '3D') {
    decoration += (
      <div>
        Décoration
        {cake.deco2}
      </div>);
  }
  console.log("decoration", decoration)

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
      {/* <td>{ingredients}</td> */}
      <td>{cake.ingredients.map(ingredient => `${ingredient.name} `)}</td>
    </tr>,
    <tr>
      <td>Décoration : </td>
      <td>{decoration}</td>
    </tr>,
    <tr>
      <td>Montant : </td>
      <td style={{ fontWeight: 'bold' }}>{cake.price.toFixed(2).replace(/[.,]00$/, '')} €</td>
    </tr>,
  );
  return render;
};

export default CakeDecoration;
