import React from 'react';
import { connect } from 'react-redux';
import { Row, Col, Container } from 'reactstrap';
import PropTypes from 'prop-types';
import IngredientsCakeStructure from './IngredientsCakeStructure';
import IngredientsMacaronStructure from './IngredientsMacaronStructure';
import IngredientsCookieStructure from './IngredientsCookieStructure';
import IngredientsBrownieStructure from './IngredientsBrownieStructure';
import IngredientsCheeseCakeStructure from './IngredientsCheeseCakeStructure';
import IngredientsButtons from './IngredientsButtons';
import Progressbar from '../Progressbar';
import Price from '../Price';
import CakeInProgress from './CakeInProgress';

import '../../../Assets/Styles/Composition.css';

const Composition = (props) => {
  const { index, cake } = props;

  const renderComposition = (cakeType) => {
    let render;
    switch (cakeType) {
      case 'macaron': render = (<IngredientsMacaronStructure />); break;
      case 'cookie': render = (<IngredientsCookieStructure />); break;
      case 'brownie': render = (<IngredientsBrownieStructure />); break;
      case 'cheesecake': render = (<IngredientsCheeseCakeStructure />); break;
      default: render = (
        <Row sm="12">
          <Col sm="8">
            <IngredientsCakeStructure />
          </Col>
          <Col sm="4" className="cakeAndPriceDisplay">
            <div className="cakeDisplay" />
            <CakeInProgress />
          </Col>
        </Row>
      );
    }
    return render;
  };

  return (
    <Container>
      <Row className="text-center">
        <Progressbar />
      </Row>
      {renderComposition(cake.type)}
      <Row sm="12">
        <Price />
        <IngredientsButtons index={index} />
      </Row>
    </Container>
  );
};

Composition.propTypes = {
  index: PropTypes.number.isRequired,
  cake: PropTypes.shape({}).isRequired,
};

const mapStateToProps = state => ({
  cake: state.cakeCharacteristics,
  price: state.price,
  index: state.pageIndex,
});

export default connect(mapStateToProps)(Composition);
