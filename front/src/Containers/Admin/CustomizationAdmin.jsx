import React, { Component } from 'react';
import { connect } from 'react-redux';
// import FontList from './FontList';
import { addFont, fetchFonts } from '../../Actions/customization_actions';

class CustomizationAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chosenFont: '',
    };
  }

  componentWillMount() {
    this.props.fetchFonts()
  }

  updateFontChoice = (e) => {
    this.setState({ chosenFont: e.target.value });
  }

  render() {
    const {
      addFont,
      googleFonts,
    } = this.props;
    return (
      <div>
        {
          this.props.googleFonts.map(index => (
            <div key={index.family}>
              <link
                rel="stylesheet"
                href={`https://fonts.googleapis.com/css?family=${index.family}`}
              />
            </div>))
        }
        <div className="FontList">
          {
            this.props.googleFonts.map(index =>
              <button onClick={() => addFont(index.family)} className="FontList" style={{ fontFamily: index.family }}> | {index.family} | </button>)
          }
        </div>
        <p>
          Veuillez sélectionner le/les types de police(s) que vous souhaitez mettre
          à disposition pour le message personnalisé 2D
        </p>
        {/* <input value={this.state.chosenFont} onChange={this.updateFontChoice} />
        <input type="submit" value="Ajouter" onClick={() => addFont(this.state.chosenFont)} /> */}
      </div>
    );
  }
}

const mapStatetoProps = state => ({
  selectedFonts: state.customization.selectedFonts,
  googleFonts: state.customization.googleFonts,
});

const mapDispatchToProps = dispatch => ({
  addFont: font => dispatch(addFont(font)),
  fetchFonts: () => dispatch(fetchFonts()),
});

export default connect(mapStatetoProps, mapDispatchToProps)(CustomizationAdmin);
