const getDescription = (type, typeResilient, customCharacteristics, customAdmin) => {
  if (type === 'message' || typeResilient === 'message') {
    return `Choisissez la police du message, sa couleur et la couleur de fond !
Coût supplémentaire : ${customAdmin.price_customMessage}€
Compatible avec une photo ou une sculpture`;
  }
  if (type === 'image' || typeResilient === 'image') {
    return `Envoyez-nous la photo à imprimer !
Coût supplémentaire : ${customAdmin.price_2D}€
Compatible avec un message`;
  }
  if (type === 'sculpture' || typeResilient === 'sculpture') {
    return `Envoyez nous la photo de la sculpture !
Coût supplémentaire : À déterminer selon la sculpture
Compatible avec un message`;
  }
  return 'Ajoutez à votre gâteau un message, une image (imprimée sur feuille de sucre) ou une sculpture 3D !!';
};

export default getDescription;
