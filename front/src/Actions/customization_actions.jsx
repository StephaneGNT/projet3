import axios from 'axios';

export const allowMessage = item => ({
  type: 'ALLOW_MESSAGE',
  item,
});

export const removeCakeMessage = blank => ({
  type: 'REMOVE_CUSTOM_MESSAGE',
  blank,
});

export const getFonts = fonts => ({
  type: 'UPDATE_FONTS',
  fonts,
});

export const populateFonts = fonts => ({
  type: 'POPULATE_FONTS',
  fonts,
});

export const updateSummaryInfo = data => ({
  type: 'UPDATE_CUSTOM_SUMMARY',
  data,
});

export const calculateCustomizationPrice = data => ({
  type: 'UPDATE_CUSTOMIZATION_PRICE',
  data,
});

export const fetchFonts = () => {
  return (dispatch) => {
    return axios.get('https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyBvHfWdKdPsFRaVwwh8z5lNIto2Ct9xzaA')
      .then((res) => {
        const fonts = res.data.items;
        localStorage.setItem('googleFonts', JSON.stringify(fonts));
        dispatch(getFonts(fonts));
      });
  };
};

export const fetchAdminFonts = () => {
  return (dispatch) => {
    return axios.get('/customization/getfonts')
      .then((res) => {
        const fonts = res.data;
        dispatch(populateFonts(fonts));
      });
  };
};
