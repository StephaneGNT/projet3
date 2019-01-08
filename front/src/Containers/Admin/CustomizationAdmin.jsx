import React, { Component } from 'react';
import { connect } from 'react-redux';
// import FontList from './FontList';
import { Button, ButtonGroup } from 'reactstrap';
import { addFont, fetchFonts } from '../../Actions/customization_actions';
import '../../Assets/Styles/CustomizationAdmin.css';


class CustomizationAdmin extends Component {
  constructor(props) {
    super(props);
    this.fontsAtATime = 80;
    this.state = {
      range: this.fontsAtATime,
    };
  }

  componentWillMount() {
    const { fetchFonts } = this.props;
    fetchFonts();
  }

  changePage = (index) => {
    this.setState({ range: index * this.fontsAtATime + this.fontsAtATime });
  }

  generatePagination = () => {
    const { googleFonts } = this.props;
    const array = [];
    const pages = Math.ceil(googleFonts.length / this.fontsAtATime);
    for (let i = 1; i <= pages; i++) {
      array.push(i)
    }
    return array;
  }

  render() {
    const { addFonts, googleFonts } = this.props;
    const { range } = this.state;
    const sliceArray = googleFonts.slice(range - this.fontsAtATime, range);
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
        <p>
          Veuillez sélectionner le(s) type(s) de police(s) que vous souhaitez mettre
          à disposition pour le message personnalisé 2D
        </p>
        <div className="FontList">
          {
            sliceArray.map(index => (
              <span
                onClick={() => addFont(index.family)}
                className="FontList"
                style={{ fontFamily: index.family }}> {index.family}
              </span>
            ))
          }
        </div>
        <ButtonGroup>
          {this.generatePagination().map((button, i) => (
            <Button onClick={() => this.changePage(i)}>
              {button}
            </Button>
          ))}
        </ButtonGroup>
      </div>
    );
  }
}

const mapStatetoProps = state => ({
  selectedFonts: state.customizationAdmin.selectedFonts,
  googleFonts: state.customizationAdmin.googleFonts,
});

const mapDispatchToProps = dispatch => ({
  addFonts: font => dispatch(addFont(font)),
  fetchFonts: () => dispatch(fetchFonts()),
});

export default connect(mapStatetoProps, mapDispatchToProps)(CustomizationAdmin);
