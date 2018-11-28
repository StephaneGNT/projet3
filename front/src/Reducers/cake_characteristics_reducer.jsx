export default () => {
  return {
    type: '', // cake, cheesecake, cookie ou macaron
    size: 'S',
    occasion: '', // mariage, anniversaire...
    ingredients: [
      {
        id: 1,
        name: 'base banane',
        type: 'base',
        size: 'S',
        price: 10,
        dispo: true,
        info: 'some info',
        img: 'https://via.placeholder.com/150',
        allerg: 'gluten',
        compatible: ['Glaçage citron', 'Glaçage framboise'],
      },
      {
        id: 2,
        name: 'Glaçage framboise',
        type: 'Glaçage',
        size: 'M',
        price: 5,
        dispo: true,
        info: 'some info',
        img: 'https://via.placeholder.com/150',
        allerg: '',
        compatible: ['Glaçage framboise', 'Glaçage orange'],
      },
    ],
    customization: '', // aucune, message, photo 2D, photo 3D
    comments: '',
    price: 0,
  };
};
