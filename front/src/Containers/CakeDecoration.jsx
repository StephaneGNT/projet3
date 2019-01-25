import React from 'react';

const CakeDecoration = (cake, user) => {
  const render = [];
  let description = '';
  if (cake.type === 'cake') description = `1 ${cake.type} de ${cake.story} étage(s) pour ${cake.size} personnes`;
  else if (cake.type === 'cheesecake') description = `1 ${cake.type} pour 8 à 10 personnes`;
  else description = `${cake.quantity} ${cake.type} en taille ${cake.size}`;

  let decoration = '';
  if (cake.deco1 === '' && cake.deco2 === '') decoration = 'Aucune décoration';
  if (cake.deco1 === 'Message' || cake.deco2 === 'Message') {
    decoration = (
      <div>
        Message :
        <span
          style={{ color: cake.msgColor, backgroundColor: cake.msgBgColor, fontFamily: cake.font }}
        >
          {cake.msgContent}
        </span>
      </div>
    );
  }
  if (cake.deco1 === '2D' || cake.deco1 === '3D') {
    decoration += (
      <div>
        Décoration
        {cake.deco1}
      </div>);
  }
  if (cake.deco2 === '2D' || cake.deco2 === '3D') {
    decoration += (
      <div>
        Décoration
        {cake.deco2}
      </div>);
  }

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
      <td>Occasion</td>
      <td>{cake.occasion ? cake.occasion : 'Non précisée'}</td>
    </tr>,
    
    <tr>
      <td>Caractéristiques : </td>
      <td>{description}</td>
    </tr>,
    <tr>
      <td>Ingrédients : </td>
      <td>{cake.ingredients}</td>
    </tr>,
    <tr>
      <td>Décoration : </td>
      <td>{decoration}</td>
    </tr>,
    <tr>
      <td>Montant</td>
      <td style={{ fontWeight: 'bold' }}>{cake.price.toFixed(2).replace(/[.,]00$/, '')} €</td>
    </tr>,
  );
  return render;
};

export default CakeDecoration;
