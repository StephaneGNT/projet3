import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { fetchAdminFonts } from '../../Actions/customization_actions';

class FontList extends Component {
  componentWillMount() {
    const { fetchAdminFontList } = this.props;
    fetchAdminFontList();
  }

  deleteFonts = (name) => {
    const { fetchAdminFontList } = this.props;
    axios.delete(`/customization/deletefonts/${name}`)
    .then(function (response) {
      response.data === 'OK' && fetchAdminFontList();
    })
    // .catch(function (error) {
    //   console.log(error);
    // });
  }

  render() {
    const { selectedFonts } = this.props;
    return (
      <div style={{ marginBottom: '3vh' }} className="chosenFontList">
        <h4>Votre séléction de polices:</h4>
        <p style={{ fontSize: '1em', textAlign: 'center' }} >Cliquez sur une police pour la retirer da la liste</p>
        {
          selectedFonts.map((font => (
            <span
              key={font}
              style={{ fontFamily: font, marginRight: '4vh' }}
              onClick={() => this.deleteFonts(font)}
            >
              {font}
            </span>
          )))
        }
      </div>
    );
  }
}

const mapStatetoProps = state => ({
  selectedFonts: JSON.parse(JSON.stringify(state.customizationAdmin.selectedFonts)),
});

const mapDispatchToProps = dispatch => ({
  fetchAdminFontList: () => dispatch(fetchAdminFonts()),
});


export default connect(mapStatetoProps, mapDispatchToProps)(FontList);
