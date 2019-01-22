import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import axios from 'axios';
import { fetchFonts, fetchAdminFonts } from '../../Actions/customization_actions';
import '../../Assets/Styles/CustomizationAdmin.css';
import FontList from './FontList';

class CustomizationAdmin extends Component {
  // constructor(props) {
  //   super(props);
  //   this.fontsAtATime = 1000;
  //   this.state = {
  //     range: this.fontsAtATime,
  //     clickedPage: 0,
  //   };
  // }

  componentWillMount() {
    const { fetchFontList } = this.props;
    fetchFontList();
  }

  // generatePagination = () => {
  //   const { googleFonts } = this.props;
  //   const array = [];
  //   const pages = Math.ceil(googleFonts.length / this.fontsAtATime);
  //   let i = 0;
  //   while (i < pages) {
  //     i += 1;
  //     array.push(i);
  //   }
  //   return array;
  // }

  // changePage = (index) => {
  //   this.setState({
  //     range: index * this.fontsAtATime + this.fontsAtATime,
  //     clickedPage: index,
  //   });
  // }

  addFont = (name) => {
    const { selectedFonts, fetchAdminFontList } = this.props;
    if (!selectedFonts.includes(name)) {
      axios.post('/customization/addfonts', { name, availability: true })
        .then(function (response) {
          if (response.data === 'OK') fetchAdminFontList();
        });
    } else window.alert('Vous avez déjà ajouté cette police');
  }

  render() {
    const { googleFonts } = this.props;
    // const { range, clickedPage } = this.state;
    // const limitedFontList = googleFonts.slice(range - this.fontsAtATime, range);
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
                  onClick={() => this.addFont(font.family)}
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
          {/* </div > */}
          {/* <ButtonGroup>
          {this.generatePagination().map((pageNumber, i) => (
            <Button
              style={i === clickedPage ? { backgroundColor: 'black' } : {}}
              onClick={() => this.changePage(i)}
            >
              {pageNumber}
            </Button>
          ))}
        </ButtonGroup> */}
        </div>
      </div>
    );
  }
}

CustomizationAdmin.propTypes = {
  fetchAdminFontList: PropTypes.func.isRequired,
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
