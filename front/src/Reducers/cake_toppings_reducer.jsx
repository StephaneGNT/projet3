import topping_cerise from '../Assets/Images/topping_cerise.png'
import topping_noisettes from '../Assets/Images/topping_noisettes.png'
import topping_billechocolat from '../Assets/Images/topping_billechocolat.png'

export default () => {
  return [
    {
      id: 1,
      name: 'noisettes',
      type: 'Toppings',
      size: 'S',
      price: 4,
      dispo: true,
      info: 'some info',
      img: topping_noisettes,
      allerg: '',
      compatible: 'tout',
      portion: '250g',
    },
    {
      id: 2,
      name: 'noisettes',
      type: 'Toppings',
      size: 'M',
      price: 5,
      dispo: true,
      info: 'some info',
      img: topping_noisettes,
      allerg: '',
      compatible: 'tout',
      portion: '350g',
    },
    {
      id: 3,
      name: 'noisettes',
      type: 'Toppings',
      size: 'XL',
      price: 6,
      dispo: true,
      info: 'some info',
      img: topping_noisettes,
      allerg: '',
      compatible: 'tout',
      portion: '400g',
    },
    {
      id: 4,
      name: 'cerise',
      type: 'Toppings',
      size: 'S',
      price: 2,
      dispo: true,
      info: 'some info',
      img: topping_cerise,
      allerg: 'gluten',
      compatible: 'tout',
      portion: '100g',
    },
    {
      id: 4,
      name: 'cerise',
      type: 'Toppings',
      size: 'M',
      price: 3,
      dispo: true,
      info: 'some info',
      img: topping_cerise,
      allerg: 'gluten',
      compatible: 'tout',
      portion: '200g',
    },
    {
      id: 6,
      name: 'cerise',
      type: 'Toppings',
      size: 'XL',
      price: 4,
      dispo: true,
      info: 'some info',
      img: topping_cerise,
      allerg: 'gluten',
      compatible: 'tout',
      portion: '300g',
    },
    {
      id: 7,
      name: 'chocolat',
      type: 'Toppings',
      size: 'S',
      price: 2,
      dispo: true,
      info: 'some info',
      img: topping_billechocolat,
      allerg: 'gluten',
      compatible: 'tout',
      portion: '250g',
    },
    {
      id: 8,
      name: 'chocolat',
      type: 'Toppings',
      size: 'M',
      price: 3,
      dispo: true,
      info: 'some info',
      img: topping_billechocolat,
      allerg: 'gluten',
      compatible: 'tout',
      portion: '250g',
    },
    {
      id: 9,
      name: 'chocolat',
      type: 'Toppings',
      size: 'XL',
      price: 5,
      dispo: true,
      info: 'some info',
      img: topping_billechocolat,
      allerg: 'gluten',
      compatible: 'tout',
      portion: '250g',
    },
  ];
};
