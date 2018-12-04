// Ce réducer sert, lors de la construction d'un cake,
// à s'assurer qu'on ne puisse retirer que des étages déjà ajoutés ;
// ainsi, on ne peut pas retirer un étage de 10 si l'on a mis que des étages de 5, ou de 20...

export default function (state = [], action) {
  const newStories = state;
  switch (action.type) {
    case 'ADD_PIECES': {
      newStories.push(action.payload);
      console.log(newStories);
      return newStories;
    }
    case 'REMOVE_PIECES': {
      if (newStories.indexOf(action.payload) === -1) return state;
      newStories.splice(newStories.indexOf(action.payload), 1);
      console.log(newStories);
      return newStories;
    }
    default:
      return state;
  }
}
