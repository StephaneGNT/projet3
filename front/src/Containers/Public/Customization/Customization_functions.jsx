import React from 'react';

const getDescription = (type, typeResilient, customCharacteristics, customAdmin) => {
  if (type === 'message' || typeResilient === 'message') {
    return (
      <div className="descri-custom">
        Choisissez la police du message, sa couleur et la couleur de fond !
        Coût supplémentaire : 
        {customAdmin.price_customMessage.toFixed(2).replace(/[.,]00$/, '')}€
         Compatible avec une photo ou une sculpture.
      </div>
    )
  }
  if (type === 'image' || typeResilient === 'image') {
    return (
      <div className="descri-custom">
        Envoyez-nous la photo à imprimer ! 
        <b> Coût supplémentaire: </b> 
        {customAdmin.price_2D.toFixed(2).replace(/[.,]00$/, '')}€ 
        Compatible avec un message
      </div>
    );
  }
  if (type === 'sculpture' || typeResilient === 'sculpture') {
    return (
      <div className="descri-custom">
        Envoyez nous une photo d’inspiration, et/ou une description de votre souhait !
        <b>Coût supplémentaire:</b>
        À déterminer selon votre demande Compatible avec un message
      </div>
    );
  }
  return '';
  // 'Ajoutez à votre gâteau un message, une image (imprimée sur feuille de sucre) ou une sculpture 3D !!';
};

export default getDescription;
