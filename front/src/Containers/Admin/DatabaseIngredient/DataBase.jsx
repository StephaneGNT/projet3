import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import HorizontalNavBar from './HorizontalNavBar';
import Toolbar from './Toolbar';
import AddIngredients from './AddIngredients';
import ModifyIngredient from './ModifyIngredient';
import TableDB from '../Incredients-Components/Table_DB/TableDB';

class DataBase extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  displayIngredients = (token) => {
    const {
      display, cake, cookie, topping, filling, icing, macaronFlavor, macaronShell, chessecakeFlavor,
    } = this.props;
    let elementToDisplay;
    switch (display) {
      case ('Cookie'): elementToDisplay = cookie; break;
      case ('Toppings'): elementToDisplay = topping; break;
      case ('Garniture'): elementToDisplay = filling; break;
      case ('Glaçage'): elementToDisplay = icing; break;
      case ('Parfum macaron'): elementToDisplay = macaronFlavor; break;
      case ('Couleur macaron'): elementToDisplay = macaronShell; break;
      case ('Cheesecake'): elementToDisplay = chessecakeFlavor; break;
      default: elementToDisplay = cake;
    }
    return TableDB(elementToDisplay, token);
  }

  renderFormAddIngredient = () => {
    const { formVisible } = this.props;
    return formVisible ? <AddIngredients /> : <div />;
  }

  renderFormModifyIngredient = () => {
    const {
      displaybeta, cake, cookie, topping, filling, icing,
      macaronFlavor, macaronShell, chessecakeFlavor, formModifyVisible,
    } = this.props;
    let formToDisplay;
    switch (displaybeta) {
      case ('Base cookie'): formToDisplay = cookie; break;
      case ('Toppings'): formToDisplay = topping; break;
      case ('Garniture'): formToDisplay = filling; break;
      case ('Glaçage'): formToDisplay = icing; break;
      case ('Macaron'): formToDisplay = macaronFlavor; break;
      case ('Coquille'): formToDisplay = macaronShell; break;
      case ('Parfum'): formToDisplay = chessecakeFlavor; break;
      default: formToDisplay = cake;
    }
    return formModifyVisible ? <ModifyIngredient ingredient={formToDisplay} /> : <div />;
  }

  render() {
    const { token } = this.props;
    return (
      <Container>
        <Row>
          <HorizontalNavBar />
        </Row>
        <Toolbar />
        {this.renderFormAddIngredient()}
        {this.renderFormModifyIngredient()}
        {this.displayIngredients(token)}
      </Container>
    );
  }
}

DataBase.propTypes = {
  display: PropTypes.string.isRequired,
  displaybeta: PropTypes.string.isRequired,
  formVisible: PropTypes.bool.isRequired,
  formModifyVisible: PropTypes.bool.isRequired,
  cake: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  cookie: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  topping: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  filling: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  icing: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  macaronFlavor: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  macaronShell: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  chessecakeFlavor: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  token: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  display: state.databaseDisplay.alpha,
  displaybeta: state.databaseDisplay.beta,
  formVisible: state.databaseNewIngredientDisplay.new,
  formModifyVisible: state.databaseNewIngredientDisplay.modify,
  cake: state.ingredients.filter(ing => ing.type === 'Base'),
  filling: state.ingredients.filter(ing => ing.type === 'Garniture'),
  icing: state.ingredients.filter(ing => ing.type === 'Glaçage'),
  chessecakeFlavor: state.ingredients.filter(ing => ing.type === 'Parfum'),
  macaronFlavor: state.ingredients.filter(ing => ing.type === 'Macaron'),
  topping: state.ingredients.filter(ing => ing.type === 'Toppings'),
  macaronShell: state.ingredients.filter(ing => ing.type === 'Coquille'),
  cookie: state.ingredients.filter(ing => ing.type === 'Base cookie'),
  brownie: state.ingredients.filter(ing => ing.type === 'Base brownie'),
  token: state.adminToken,
});

export default connect(mapStateToProps, null)(DataBase);
