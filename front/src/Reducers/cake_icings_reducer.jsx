import creamCheese from '../Assets/Images/glacage_creamcheese.png';
import ganacheCaramel from '../Assets/Images/glacage_caramel.png';
import surcreGlace from '../Assets/Images/glacage_cream.png';
import glacageCitron from '../Assets/Images/glacage_citron.png';
import glacageChocolat from '../Assets/Images/glacage_chocolat.png';


export default () => {
  return [
    {
      id: 1,
      name: 'Cream cheese',
      type: 'Glaçage',
      size: 'S',
      price: 4,
      dispo: true,
      info: 'some info',
      img: creamCheese,
      allerg: '',
      compatible: ['Cream cheese', 'Sucre glace', 'Amandes caramélisées', 'Noix caramélisées', 'Noisettes caramélisées', 'Crumble'],
    },
    {
      id: 2,
      name: 'Ganache chocolat',
      type: 'Glaçage',
      size: 'M',
      price: 5,
      dispo: true,
      info: 'some info',
      img: glacageChocolat,
      allerg: '',
      compatible: ['Ganache chocolat', 'Ganache caramel', 'Noix caramélisées', 'Dentelles de chocolat', 'Crumble'],
    },
    {
      id: 3,
      name: 'Ganache caramel',
      type: 'Glaçage',
      size: 'XL',
      price: 6,
      dispo: true,
      info: 'some info',
      img: ganacheCaramel,
      allerg: '',
      compatible: ['Ganache chocolat', 'Ganache caramel', 'Dentelles de chocolat', 'Crumble'],
    },
    {
      id: 4,
      name: 'Sucre glace',
      type: 'Glaçage',
      size: 'S',
      price: 2,
      dispo: true,
      info: 'some info',
      img: surcreGlace,
      allerg: 'gluten',
      compatible: ['Noix caramélisées'],
    },
    {
      id: 5,
      name: 'Glaçage citron',
      type: 'Glaçage',
      size: 'M',
      price: 3,
      dispo: true,
      info: 'some info',
      img: glacageCitron,
      allerg: 'gluten',
      compatible: 'remplissage citron',
    },
    {
      id: 6,
      name: 'Glaçage chocolat',
      type: 'Glaçage',
      size: 'S',
      price: 2,
      dispo: true,
      info: 'some info',
      img: glacageChocolat,
      allerg: 'gluten',
      compatible: 'garniture orange',
    },
  ];
};
