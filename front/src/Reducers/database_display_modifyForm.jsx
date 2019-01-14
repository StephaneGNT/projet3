export default function (state = '', action) {
  switch (action.type) {
    case 'SET_INDEX':
      return action.index;
    default:
      return state;
  }
}

// set an index from the ButtonModify component,
// and use it in ModifyIngredient to display the relevant form