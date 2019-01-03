import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col, Row } from 'reactstrap';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import IngredientsDisplay from './IngredientsDisplay';
import CarrotCakeSupplement from './CarrotCakeSupplement';

import { updateIndex } from '../../../Actions/cakeActions/changeIndex';

class IngredientsCakeStructure extends Component {
  // Choix des ingrédients des cakes et cheesecakes
  renderStructure = (cake, bases, icings, fillings, toppings, flavor, index) => {
    let render = null;
    let elementToDisplay;

    // Premier écran : Choix de la base du cake, ou du parfum du cheesecake
    if (index === 2) {
      if (cake.type === 'cheesecake') elementToDisplay = flavor;
      else elementToDisplay = bases;

      render = (
        <Row className="displayIngredient">
          <Row style={{
            position: 'sticky', top: '0', zIndex: '5', backgroundColor: '#DADADA'
          }}
          >
            <h1 style={{ position: 'sticky', top: '0' }}>{elementToDisplay[0].type}</h1>
          </Row>
          <Row>
            <IngredientsDisplay elementToDisplay={elementToDisplay} />
            <CarrotCakeSupplement />
          </Row>
        </Row>
      );
    } else if (index === 3) {
      // Deuxième écran : Choix du glaçage et filling du cake,
      if (cake.type === 'cake') {
        render = (
          <Row className="displayIngredient">
            <Col sm="6" style={{ overflowY: 'scroll' }}>
              <Row style={{
                position: 'sticky', top: '0', zIndex: '5', backgroundColor: '#DADADA'
              }}
              >
                <h1>{fillings[0].type}</h1>
              </Row>
              <Row>
                <IngredientsDisplay elementToDisplay={fillings} />
              </Row>
            </Col>
            <Col sm="6" style={{ overflowY: 'scroll' }}>
              <Row style={{
                position: 'sticky', top: '0', zIndex: '5', backgroundColor: '#DADADA'
              }}
              >
                <h1>{icings[0].type}</h1>
              </Row>
              <Row>
                <IngredientsDisplay elementToDisplay={icings} />
              </Row>
            </Col>
          </Row>
        );
      } else {
        // ou choix du glaçage du cheesecake
        render = (
          <Row className="displayIngredient">
            <Row style={{
              position: 'sticky', top: '0', zIndex: '5', backgroundColor: '#DADADA'
            }}
            >
              <h1 style={{ position: 'sticky', top: '0' }}>{icings[0].type}</h1>
            </Row>
            <Row>
              <IngredientsDisplay elementToDisplay={icings} />
            </Row>
          </Row>
        );
      }
      // Troisième écran : Choix des toppings
    } else if (index === 4) {
      render = (
        <Row className="displayIngredient">
          <Row style={{
            position: 'sticky', top: '0', zIndex: '5', backgroundColor: '#DADADA'
          }}
          >
            <h1 style={{ position: 'sticky', top: '0' }}>{toppings[0].type}</h1>
          </Row>
          <Row>
            <IngredientsDisplay elementToDisplay={toppings} />
          </Row>
        </Row>
      );
    }
    const { setPageIndex } = this.props;
    if (render === null) {
      setPageIndex(1);
      return <Redirect to="/mycake" />;
    }
    return render;
  }

  render() {
    const
      {
        cake,
        bases,
        icings,
        fillings,
        toppings,
        flavor,
        index,
      } = this.props;

    return (
      this.renderStructure(cake, bases, icings, fillings, toppings, flavor, index)
    );
  }
}

IngredientsCakeStructure.propTypes = {
  cake: PropTypes.shape({}).isRequired,
  bases: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  icings: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  fillings: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  toppings: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  flavor: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  index: PropTypes.number.isRequired,
  setPageIndex: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  cake: state.cakeCharacteristics,
  bases: state.cakeBases,
  fillings: state.cakeFillings,
  icings: state.cakeIcings,
  flavor: state.cheesecakeFlavors,
  toppings: state.cakeToppings,
  index: state.pageIndex,
});

const mapDispatchToProps = dispatch => ({
  setPageIndex: index => dispatch(updateIndex(index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(IngredientsCakeStructure);
