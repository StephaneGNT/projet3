import React from 'react';

const getDescription = (type, typeResilient, customCharacteristics, customAdmin) => {
  if (type === 'message' || typeResilient === 'message') {
    return (
      <p>
        Choisissez la police du message, sa couleur et la couleur de fond !
        Coût supplémentaire : {customAdmin.price_customMessage.toFixed(2).replace(/[.,]00$/, '')}€
        Compatible avec une photo ou une sculpture`;
      </p>
    )
  }
  if (type === 'image' || typeResilient === 'image') {
    return (
      <p>
        Envoyez-nous la photo à imprimer !
      <br />
        <b>Coût supplémentaire:</b> {customAdmin.price_2D.toFixed(2).replace(/[.,]00$/, '')}€
        <br/>
        Compatible avec un message
      </p>
    );
  }
  if (type === 'sculpture' || typeResilient === 'sculpture') {
    return (
      <p>Envoyez nous une photo d’inspiration,
  <br />
  et/ou une description de votre souhait !
  <br />
  <b>Coût supplémentaire:</b> À déterminer selon votre demande
        <br/>
        Compatible avec un message
      </p>
    )
  }
  return '';
  // 'Ajoutez à votre gâteau un message, une image (imprimée sur feuille de sucre) ou une sculpture 3D !!';
};

export default getDescription;
