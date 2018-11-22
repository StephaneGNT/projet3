import React, { Component } from 'react';
import { connect } from 'react-redux';
import Ingredient from './Ingredient';

import '../../Assets/Styles/Composition.css';

const mapStateToProps = (state) => {
  // Affichage des bases, toppings... en fonction du page index
  let elementToDisplay;
  switch (state.pageIndex) {
    case 2: elementToDisplay = [state.cakeBases]; break;
    case 3: elementToDisplay = [state.cakeIcings, state.cakeFillings]; break;
    default: elementToDisplay = [state.cakeToppings]; break;
  }
  return (
    {
      elementToDisplay,
      cake: state.cakeCharacteristics, // caractéristiques du gâteau
    }
  );
};

const mapDispatchToProps = () => ({});

// Fonction de récupération de la liste des ingrédients compatibles avec ceux composants déjà le gâteau
const getCompatibleIngredients = (cake) => {
  const tempCompatibleIngredients = (cake.ingredients.map(ingredient => ingredient.compatible));
  return tempCompatibleIngredients.length > 0 ? tempCompatibleIngredients[tempCompatibleIngredients.length - 1] : [];
};

const renderButton = (data) => {
  if (data.length === 2) {
    return (<button type="button"> Une garniture supplémentaire ? </button>);
  }
};

const renderIngredients = (data, cake) => {
  const compatibleIngredients = getCompatibleIngredients(cake); // récupération de la liste des ingrédients compatibles

  const render = [];
  for (let i = 0; i < data.length; i += 1) {
    render.push(
      <div className={`col-${12 / data.length} ingredientDisplay`}>
        <h1 className="ingredientsTitle">{data[i][0].type}</h1>
        {
          data[i].map(
            (ingredient, index) => {
              if (ingredient.dispo && (compatibleIngredients.indexOf(ingredient.name) >= 0 || compatibleIngredients.length === 0)) {
                return <Ingredient key={(i + 1) * index} ingredient={ingredient} />;
              }
            },
          )
        }
      </div>,
    );
  }
  return render;
};

const Composition = (props) => {
  
  const { elementToDisplay, cake } = props;
  return (
    <div className="row">
      <div className="col-8" style={{margin: 0 }}>
        <div className="addIngredient">
          {renderIngredients(elementToDisplay, cake)}
        </div>
        <div className="priceDisplay">
          <button type="button"> Price </button>
          <button type="button"> Command </button>
          {renderButton(elementToDisplay)}
        </div>
      </div>
      <div className="col-4 cakeDisplay">Cake display</div>
    </div>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Composition);
