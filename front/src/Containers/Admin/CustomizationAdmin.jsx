import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Button, ButtonGroup } from 'reactstrap';
import axios from 'axios';
import alert from '../../Actions/alert';
import { fetchFonts, fetchAdminFonts, getCustomPrices } from '../../Actions/customization_actions';
import '../../Assets/Styles/CustomizationAdmin.css';
import FontList from './FontList';

class CustomizationAdmin extends Component {
  constructor(props) {
    super(props);
    this.fontsAtATime = 150;
    this.state = {
      message: '',
      D2: '',
      range: this.fontsAtATime,
      clickedPage: 0,
    };
  }

  componentWillMount() {
    const { sendPrices } = this.props;
    sendPrices(); // recup prix customization
  }

  generatePagination = () => {
    const { customAdmin } = this.props;
    const array = [];
    const pages = Math.ceil(customAdmin.googleFonts.length / this.fontsAtATime);
    let i = 0;
    while (i < pages) {
      i += 1;
      array.push(i);
    }
    return array;
  }

  changePage = (index) => {
    this.setState({
      range: index * this.fontsAtATime + this.fontsAtATime,
      clickedPage: index,
    });
  }

  addFont = (name) => {
    const { customAdmin, fetchAdminFontList, alertAction } = this.props;
    if (!customAdmin.selectedFonts.includes(name)) {
      axios.post('/api/customization/addfonts', { name, availability: true })
        .then((response) => {
          if (response.data === 'OK') fetchAdminFontList();
        }); 
    } else {
      alertAction('Vous avez déjà ajouté cette police');
    }
  };

  updateCustomPrices = (deco) => {
    const { message, D2 } = this.state;
    const { sendPrices, alertAction } = this.props;
    const price = deco === 'message' ? message : D2;
    const id = deco === 'message' ? 1 : 2;
    const numberCheck = /^\s*-?\d+(\.\d{1,2})?\s*$/;
    if (numberCheck.test(price)) {
      axios.put('/api/customization/updatecustomprices', { price: parseFloat(price, 10), id })
        .then((response) => {
          if (response.data === 'OK') {
            sendPrices();
            this.setState({ [deco]: '' });
          }
        });
    } else {
      alertAction('Entrée non valide');
      this.setState({ [deco]: '' });
    }
  }

  upDatePrices = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { message, D2, range, clickedPage } = this.state;
    const { customAdmin } = this.props;
    const limitedFontList = customAdmin.googleFonts.slice(range - this.fontsAtATime, range);
    return (
      <div>
        {
          customAdmin.googleFonts.map(font => (
            <div key={font.family}>
              <link
                rel="stylesheet"
                href={`https://fonts.googleapis.com/css?family=${font.family}`}
              />
            </div>))
        }
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginBottom: '3vh' }}>
          <table className="customPricesTable">
            <tr>
              <th>Type de décoration</th>
              <th>Prix actuel</th>
              <th>Modifier prix</th>
            </tr>
            <tr>
              <td><b>Message personnalisé</b></td>
              <td>
                {customAdmin.price_customMessage.toFixed(2)} €
              </td>
              <td>
                <input
                  name="message"
                  value={message}
                  type="text"
                  onChange={this.upDatePrices}
                  onKeyPress={(event) => {
                    if (event.key === 'Enter') {
                      this.updateCustomPrices('message');
                    }
                  }}
                /> €
                <div>
                  <button
                    type="submit"
                    onClick={() => this.updateCustomPrices('message')}
                    onKeyPress={(event) => {
                      if (event.key === 'Enter') {
                        this.updateCustomPrices('message');
                      }
                    }}
                  >
                    Valider changement
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td><b>2 dimensions</b></td>
              <td>
                {customAdmin.price_2D.toFixed(2)} €
              </td>
              <td>
                <input
                  name="D2"
                  value={D2}
                  type="text"
                  onChange={this.upDatePrices}
                  onKeyPress={(event) => {
                    if (event.key === 'Enter') {
                      this.updateCustomPrices('D2');
                    }
                  }}
                /> €
                <div>
                  <button
                    type="submit"
                    onClick={() => this.updateCustomPrices('D2')}
                    onKeyPress={(event) => {
                      if (event.key === 'Enter') {
                        this.updateCustomPrices('D2');
                      }
                    }}
                  >
                    Valider changement
                  </button>
                </div>
              </td>
            </tr>
          </table>
          <br />
        </div>
        <FontList />
        <p style={{ textAlign: 'center' }}>
          Sélectionnez ci-dessous le(s) type(s) de police(s) que vous souhaitez mettre
          à disposition pour le message personnalisé 2D
        </p>
        <div>
          <div className="FontList">
            {
              limitedFontList.map(font => (
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
        </div>
        <ButtonGroup>
          {this.generatePagination().map((pageNumber, i) => (
            <Button
              style={i === clickedPage ? { backgroundColor: 'black' } : {}}
              onClick={() => this.changePage(i)}
            >
              {pageNumber}
            </Button>
          ))}
        </ButtonGroup>
      </div>
    );
  }
}

CustomizationAdmin.propTypes = {
  fetchAdminFontList: PropTypes.func.isRequired,
  customAdmin: PropTypes.shape({}).isRequired,
  sendPrices: PropTypes.func.isRequired,
  alertAction: PropTypes.func.isRequired,
};

const mapStatetoProps = state => ({
  customAdmin: state.customizationAdmin,
});

const mapDispatchToProps = dispatch => ({
  fetchFontList: () => dispatch(fetchFonts()),
  fetchAdminFontList: () => dispatch(fetchAdminFonts()),
  sendPrices: prices => dispatch(getCustomPrices(prices)),
  alertAction: message => dispatch(alert(message)),
});

export default connect(mapStatetoProps, mapDispatchToProps)(CustomizationAdmin);
