import axios from 'axios';

export const populateDateArrays = data => ({
  type: 'POPULATE_DATE_ARRAY',
  data,
});

export const fetchDatesInDB = () => {
  return (dispatch) => {
    return axios.get('/api/calendar/getdates')
      .then((res) => {
        const dates = res.data;
        dispatch(populateDateArrays(dates));
      });
  };
};
