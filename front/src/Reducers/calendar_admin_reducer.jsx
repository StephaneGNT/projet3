export default (state = { masterCalendar: [] }, action) => {
  let tempArray = [];
  switch (action.type) {
    case 'POPULATE_DATE_ARRAY':
      tempArray = [];
      action.data.map(one => tempArray.push(one));
      return {
        masterCalendar: tempArray,
      };
    default: return state;
  }
};
