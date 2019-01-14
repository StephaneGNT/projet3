import speculoos from '../Assets/Images/speculoos.jpg';
import caramel from '../Assets/Images/caramel.jpg';

export default () => {
  return [
    {
      id: 1,
      name: 'Parfum speculoos',
      type: 'Parfum',
      size: 'S',
      price: 4,
      dispo: true,
      info: 'some info',
      img: speculoos,
      allerg: '',
      compatible: ['Cream cheese', 'Sucre glace', 'Amandes caramélisées', 'Noix caramélisées', 'Noisettes caramélisées', 'Crumble'],
    },
    {
      id: 2,
      name: 'Parfum caramel',
      type: 'Parfum',
      size: 'S',
      price: 4,
      dispo: true,
      info: 'some info',
      img: caramel,
      allerg: '',
      compatible: ['Cream cheese', 'Sucre glace', 'Amandes caramélisées', 'Noix caramélisées', 'Noisettes caramélisées', 'Crumble'],
    },
  ];
};
