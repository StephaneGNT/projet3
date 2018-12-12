import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import HorizontalNavBar from './HorizontalNavBar';
import Toolbar from './Toolbar';
import AddIngredients from './AddIngredients';
import BasesDB from '../Incredients-Components/Bases/BasesDB';

class DataBase extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  displayIngredients = () => {
    const { display } = this.props;
    switch (display) {
      // case ('Bases cake'): return <div>Cake base</div>;
      case ('Cake'): return <BasesDB />;
      // case ('Cookie'): return <CookieDB />;
      // case ('Toppings'): return <ToppingDB />;
      // case ('Remplissage'): return <FillingDB />;
      // case ('Glaçage'): return <IcingDB />;
      // case ('Parfum macaron'): return <MacaronsFlavorDB />;
      // case ('Couleur macaron'): return <MacaronsColorDB />;
      // case ('Cheesecake'): return <CheesecakeFlavorDB />;
      default: return <div />;
    }
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
};

const mapStateToProps = state => ({
  display: state.databaseDisplay,
  formVisible: state.databaseNewIngredientDisplay,
});

export default connect(mapStateToProps, null)(DataBase);
