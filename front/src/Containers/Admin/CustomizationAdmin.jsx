import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import axios from 'axios';
import { fetchFonts, fetchAdminFonts } from '../../Actions/customization_actions';
import '../../Assets/Styles/CustomizationAdmin.css';
import FontList from './FontList';

const CustomizationAdmin = (props) => {
  const { googleFonts } = props;

  const addFont = (name) => {
    const { selectedFonts, fetchAdminFontList } = props;
    if (!selectedFonts.includes(name)) {
      axios.post('/api/customization/addfonts', { name, availability: true })
        .then(function (response) {
          if (response.data === 'OK') fetchAdminFontList();
        });
    } else window.alert('Vous avez déjà ajouté cette police');
  };

  return (
    <div>
      {
        googleFonts.map(font => (
          <div key={font.family}>
            <link
              rel="stylesheet"
              href={`https://fonts.googleapis.com/css?family=${font.family}`}
            />
          </div>))
      }
      <FontList />
      <p style={{ textAlign: 'center' }}>
        Sélectionnez ci-dessous le(s) type(s) de police(s) que vous souhaitez mettre
        à disposition pour le message personnalisé 2D
      </p>
      <div style={{ height: '60vh' }}>
        <div className="FontList">
          {
            googleFonts.map(font => (
              <span
                onClick={() => addFont(font.family)}
                className="FontList"
                key={font.family}
                style={{
                  fontFamily: font.family,
                  border: 'none',
                  padding: '0',
                }}
              >
                {font.family}
              </span>
            ))
          }
        </div>
      </div>
    </div>
  );
};

CustomizationAdmin.propTypes = {
  fetchAdminFontList: PropTypes.func.isRequired,
  googleFonts: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  selectedFonts: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapStatetoProps = state => ({
  selectedFonts: state.customizationAdmin.selectedFonts,
  googleFonts: state.customizationAdmin.googleFonts,
});

const mapDispatchToProps = dispatch => ({
  fetchFontList: () => dispatch(fetchFonts()),
  fetchAdminFontList: () => dispatch(fetchAdminFonts()),
});

export default connect(mapStatetoProps, mapDispatchToProps)(CustomizationAdmin);
