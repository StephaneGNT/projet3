import React from 'react';
import { connect } from 'react-redux';
import Ingredient from './Ingredient';
import Price from './Price';
import '../../Assets/Styles/Composition.css';

const mapStateToProps = state => ({
  elementToDisplay: state.cakeBases,
  cake: state.cakeCharacteristics,
  price: state.price,
});

// const mapDispatchToProps = () => ({});

const renderElement = (data) => {
  const render = [];
  // const compatibleIngredients = this.props.cake.ingredients
  //.map(ingredient => ingredient.compatible);
  data.map(
    (ingredient) => {
      if (ingredient.dispo /*&& compatibleIngredients.indexOf(ingredient.name) >= 0*/) render.push(<Ingredient ingredient={ingredient} />);
    },
    );
  return render;
  // return data.map(ingredient => <Ingredient ingredient={ingredient} />);
};

const Composition = ({ elementToDisplay, price }) => (
  <div>
    <div>
      <Price amount={price} />
    </div>
    <div className="row" style={{ width: '1OO%', height: '100%' }}>
      <div className="col-8 ingredientDisplay">
        {renderElement(elementToDisplay)}
      </div>
      <div className="col-4 cakeDisplay">
      </div>
    </div>
  </div>
);

export default connect(
  mapStateToProps,
  // mapDispatchToProps,
)(Composition);
