import speculoos from '../Assets/Images/speculoos.jpg';
import caramel from '../Assets/Images/caramel.jpg';

export default () => {
  return [
    {
      id: 3,
      name: 'Parfum speculoos',
      type: 'Parfum',
      size: 'S',
      price: 4,
      dispo: true,
      info: 'some info',
      img: speculoos,
      allerg: '',
      compatible: [],
    },
    {
      id: 4,
      name: 'Parfum caramel',
      type: 'Parfum',
      size: 'S',
      price: 4,
      dispo: true,
      info: 'some info',
      img: caramel,
      allerg: '',
      compatible: [],
    },
  ];
};
