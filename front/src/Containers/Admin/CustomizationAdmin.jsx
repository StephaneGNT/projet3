import React from 'react';
import { connect } from 'react-redux';
// import FontList from './FontList';
import { addFont, fetchFonts } from '../../Actions/customization_actions';

const CustomizationAdmin = (props) => {

  props.fetchFonts();

  const {
    addFont,
    googleFonts,
  } = props;

  return (
    <div>
      {
        googleFonts.map(index => (
          <div key={index.family}>
            <link
              rel="stylesheet"
              href={`https://fonts.googleapis.com/css?family=${index.family}`}
            />
          </div>))
      }
      <div className="FontList">
        {
          googleFonts.map(index =>
            <button onClick={() => addFont(index.family)} className="FontList" style={{ fontFamily: index.family }}> | {index.family} | </button>)
        }
      </div>
      <p>
        Veuillez sélectionner le/les types de police(s) que vous souhaitez mettre
        à disposition pour le message personnalisé 2D
      </p>
    </div>
  );
};


const mapStatetoProps = state => ({
  selectedFonts: state.customization.selectedFonts,
  googleFonts: state.customization.googleFonts,
});

const mapDispatchToProps = dispatch => ({
  addFont: font => dispatch(addFont(font)),
  fetchFonts: () => dispatch(fetchFonts()),
});

export default connect(mapStatetoProps, mapDispatchToProps)(CustomizationAdmin);
