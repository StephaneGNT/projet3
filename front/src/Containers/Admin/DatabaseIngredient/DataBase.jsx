import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import HorizontalNavBar from './HorizontalNavBar';

class DataBase extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  displayIngredients = () => {
    const { display } = this.props;
    switch (display) {
      case ('Bases cake'): return <div>Cake base</div>;
      // case ('Bases cake'): return <BasesDB />;
      // case ('Bases cookie'): return <CookieDB />;
      // case ('Toppings'): return <ToppingDB />;
      // case ('Remplissage'): return <FillingDB />;
      // case ('Glaçage'): return <IcingDB />;
      // case ('Parfums macarons'): return <MacaronsFlavorDB />;
      // case ('Couleur macarons'): return <MacaronsColorDB />;
      // case ('Parfum cheesecake'): return <CheesecakeFlavorDB />;
      default: return <div />;
    }
  }

  render() {
    return (
      <Container>
        <Row>
          <HorizontalNavBar />
        </Row>
        {this.displayIngredients()}
      </Container>
    );
  }
}

DataBase.propTypes = {
  display: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  display: state.databaseDisplay,
});

export default connect(mapStateToProps, null)(DataBase);
