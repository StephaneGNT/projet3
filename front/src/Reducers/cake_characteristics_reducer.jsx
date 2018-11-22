export default () => {
  return {
    id: 1,
    type: '', // cake, cheesecake, cookie ou macaron
    ingredients: [
      // {
      //   id: 1,
      //   name: 'base banane',
      //   type: 'base',
      //   size: 'S',
      //   price: 10,
      //   dispo: true,
      //   info: 'some info',
      //   img: '',
      //   allerg: 'gluten',
      //   compatible: ['garniture citron', 'glacage citron'],
      // },
      // {
      //   id: 2,
      //   name: 'glacage framboise',
      //   type: 'glacage',
      //   size: 'M',
      //   price: 5,
      //   dispo: true,
      //   info: 'some info',
      //   img: 'https://via.placeholder.com/150',
      //   allerg: '',
      //   compatible: ['garniture citron', 'glacage citron'],
      // },
    ],
    size: 'S',
    customization: '', // aucune, message, photo 2D, photo 3D
    comments: '',
    price: 0,
  };
};
