import baseBanane from '../Assets/Images/base_banane2.png';
import baseVanille from '../Assets/Images/base_vanille2.png';
import baseChocolat from '../Assets/Images/base_chocolat2.png';
import baseCookieChip from '../Assets/Images/base_cookiechip.png';
import baseMarbre from '../Assets/Images/base_marbre_choco_vanille.png';
import baseCarotte from '../Assets/Images/base_carrotte2.png';


export default () => { 
  return [
    {
      id: 1,
      name: 'Base carotte',
      type: 'Base',
      size: 'M',
      price: 12,
      dispo: true,
      info: 'Une délicieuse base de carottes fraîche et de canelle',
      img: baseCarotte,
      allerg: 'gluten',
      compatible: ['Cream cheese', 'Sucre glace', 'Amandes caramélisées', 'Noix caramélisées', 'Noisettes caramélisées', 'Crumble'],
      isCompatibe: true,
    },
    {
      id: 2,
      name: 'Base banane',
      type: 'Base',
      size: 'S',
      price: 10,
      dispo: true,
      info: 'Une délicieuse base de bananes fraîches',
      img: baseBanane,
      allerg: 'gluten',
      compatible: ['Cream cheese', 'Ganache chocolat', 'Ganache caramel', 'Dentelles chocolat', 'Noix', 'Amandes'],
      isCompatibe: true,
    },
    {
      id: 3,
      name: 'Base chocolat',
      type: 'Base',
      size: 'S',
      price: 10,
      dispo: true,
      info: "Parce que le chocolat, c'est la vie",
      img: baseChocolat,
      allerg: 'gluten',
      compatible: ['Crème chocolat', 'Ganache chocolat orange', 'Framboise', 'Fraise', 'Crème mousseline chocolat', 'Noisettes caramélisées, Framboise', 'Dentelle de chocolat', 'Fraise', 'Clémentine'],
      isCompatibe: true,
    },
    {
      id: 4,
      name: 'Base vanille',
      type: 'Base',
      size: 'S',
      price: 10,
      dispo: true,
      info: 'De la vanille de Madagascar',
      img: baseVanille,
      allerg: 'gluten',
      compatible: ['Crème chocolat', 'Ganache chocolat orange', 'Framboise', 'Fraise', 'Crème mousseline chocolat', 'Noisettes caramélisées, Framboise', 'Dentelle de chocolat', 'Fraise', 'Clémentine'],
      isCompatibe: true,
    },
    {
      id: 5,
      name: 'Base cookie-chip',
      type: 'Base',
      size: 'S',
      price: 10,
      dispo: true,
      info: "Parce qu'il n'y a jamais trop de cookie",
      img: baseCookieChip,
      allerg: 'gluten',
      compatible: ['Crème chocolat', 'Ganache chocolat orange', 'Framboise', 'Fraise', 'Crème mousseline chocolat', 'Noisettes caramélisées, Framboise', 'Dentelle de chocolat', 'Fraise', 'Clémentine'],
      isCompatibe: true,
    },
    {
      id: 6,
      name: 'Base marbré',
      type: 'Base',
      size: 'S',
      price: 10,
      dispo: true,
      info: 'Un mélange onctueux de vanille et de chocolat',
      img: baseMarbre,
      allerg: 'gluten',
      compatible: ['Crème chocolat', 'Ganache chocolat orange', 'Framboise', 'Fraise', 'Crème mousseline chocolat', 'Noisettes caramélisées, Framboise', 'Dentelle de chocolat', 'Fraise', 'Clémentine'],
      isCompatibe: true,
    },
  ];
};
