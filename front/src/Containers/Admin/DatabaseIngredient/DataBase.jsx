import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import HorizontalNavBar from './HorizontalNavBar';
import Toolbar from './Toolbar';
import AddIngredients from './AddIngredients';
import TableDB from '../Incredients-Components/Table_DB/TableDB';

class DataBase extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  displayIngredients = () => {
    const {
      display, cake, cookie, topping, filling, icing, macaronFlavor, macaronShell, chessecakeFlavor,
    } = this.props;
    let elementToDisplay;
    switch (display) {
      case ('Cookie'): elementToDisplay = cookie; break;
      case ('Toppings'): elementToDisplay = topping; break;
      case ('Remplissage'): elementToDisplay = filling; break;
      case ('Glaçage'): elementToDisplay = icing; break;
      case ('Parfum macaron'): elementToDisplay = macaronFlavor; break;
      case ('Couleur macaron'): elementToDisplay = macaronShell; break;
      case ('Cheesecake'): elementToDisplay = chessecakeFlavor; break;
      default: elementToDisplay = cake;
    }
    return TableDB(elementToDisplay);
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
  cake: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  cookie: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  topping: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  filling: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  icing: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  macaronFlavor: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  macaronShell: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  chessecakeFlavor: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

const mapStateToProps = state => ({
  display: state.databaseDisplay,
  formVisible: state.databaseNewIngredientDisplay,
  cake: state.cakeBases,
  filling: state.cakeFillings,
  icing: state.cakeIcings,
  chessecakeFlavor: state.cheesecakeFlavors,
  macaronFlavor: state.macaronsFlavors,
  topping: state.cakeToppings,
  macaronShell: state.macaronsShells,
  cookie: state.cookiesBases,
  brownie: state.browniesBases,
});

export default connect(mapStateToProps, null)(DataBase);
