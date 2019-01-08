const initialState = [
  {
    id: 1,
    name: 'Rouge',
    colorCode: 'rgba(255,0,0,1)',
    type: 'Coquille',
    size: 'S',
    price: 4,
    dispo: true,
    info: 'some info',
    img: '',
    allerg: '',
    compatible: ['macaron'],
  },
  {
    id: 2,
    name: 'Vert',
    colorCode: 'rgba(0,255,0,1)',
    type: 'Coquille',
    size: 'S',
    price: 4,
    dispo: true,
    info: 'some info',
    img: '',
    allerg: '',
    compatible: ['macaron'],
  },
  {
    id: 3,
    name: 'Bleu',
    colorCode: 'rgba(0,0,255,1)',
    type: 'Coquille',
    size: 'S',
    price: 4,
    dispo: true,
    info: 'some info',
    img: '',
    allerg: '',
    compatible: ['macaron'],
  },
];

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_MACARON_SHELLS':
      return action.payload;
    default:
      return state;
  }
};
