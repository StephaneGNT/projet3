import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import HorizontalNavBar from './HorizontalNavBar';
import Toolbar from './Toolbar';
import AddIngredients from './AddIngredients';
// import TableBD from '../Incredients-Components/Bases/TableBD';

class DataBase extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  displayIngredients = () => {
    const {
      display, cake, cookie, toppings, fillings, icings, macaronFlavor, macaronShell, chessecakeFlavor,
    } = this.props;
    let elementToDisplay;
    switch (display) {
      case ('Cake'): elementToDisplay = cake; break;
      case ('Cookie'): elementToDisplay = cookie; break;
      case ('Toppings'): elementToDisplay = toppings; break;
      case ('Remplissage'): elementToDisplay = fillings; break;
      case ('Glaçage'): elementToDisplay = icings; break;
      case ('Parfum macaron'): elementToDisplay = macaronFlavor; break;
      case ('Couleur macaron'): elementToDisplay = macaronShell; break;
      case ('Cheesecake'): elementToDisplay = chessecakeFlavor; break;
      default: return <div />;
    }
    // return <TableBD type={elementToDisplay} />
  }

  renderFormAddIngredient = () => {
    const { formVisible } = this.props;
    return formVisible ? <AddIngredients /> : <div />;
  }

  render() {
    return (
      <Container>
        <Row>
          <HorizontalNavBar />
        </Row>
        <Toolbar />
        {this.renderFormAddIngredient()}
        {this.displayIngredients()}
      </Container>
    );
  }
}

DataBase.propTypes = {
  display: PropTypes.string.isRequired,
  formVisible: PropTypes.bool.isRequired,
  cake: PropTypes.shape({}).isRequired,
  cookie: PropTypes.shape({}).isRequired,
  toppings: PropTypes.shape({}).isRequired,
  fillings: PropTypes.shape({}).isRequired,
  icings: PropTypes.shape({}).isRequired,
  macaronFlavor: PropTypes.shape({}).isRequired,
  macaronShell: PropTypes.shape({}).isRequired,
  chessecakeFlavor: PropTypes.shape({}).isRequired,
};

const mapStateToProps = state => ({
  display: state.databaseDisplay,
  formVisible: state.databaseNewIngredientDisplay,
  cakes: state.cakeBases,
  fillings: state.cakeFillings,
  icings: state.cakeIcings,
  chessecakeFlavor: state.cheesecakeFlavors,
  macaronFlavor: state.macaronsFlavors,
  toppings: state.cakeToppings,
  macaronShell: state.macaronsShells,
  cookie: state.cookiesBases,
  brownie: state.browniesBases,
});

export default connect(mapStateToProps, null)(DataBase);
