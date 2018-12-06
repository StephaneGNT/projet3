import React from 'react';
import { connect } from 'react-redux';
import Ingredient from './Ingredient';

const IngredientsDisplay = (props) => {
  // Fonction de récupération de la liste des ingrédients compatibles avec ceux du gâteau
  const getCompatibleIngredients = (cake) => {
    const tempCompatibleIngredients = (cake.ingredients.map(ingredient => ingredient.compatible));
    let newCompatibleIngredient = [];
    if (tempCompatibleIngredients.length > 1) {
      for (let i = 1; i < tempCompatibleIngredients.length; i += 1) {
        newCompatibleIngredient = tempCompatibleIngredients[0].filter(
          ingredient => tempCompatibleIngredients[1].indexOf(ingredient) === -1,
        );
      }
    } else newCompatibleIngredient = tempCompatibleIngredients;
    return newCompatibleIngredient;
  };

  const renderIngredients = (elementToDisplay, cake) => {
    const compatibleIngredients = getCompatibleIngredients(cake);
    const render = [];
    elementToDisplay.map(
      (ingredient) => {
        // if (compatibleIngredients.length === 0 && ingredient.dispo) {
        //   render.push(<Ingredient ingredient={ingredient} />);
        // }
        // if (compatibleIngredients.indexOf(ingredient.name) >= 0 && ingredient.dispo) {
          render.push(<Ingredient ingredient={ingredient} />);
        // }
        return render;
      },
    );
    return render;
  };

  return (
    renderIngredients(props.elementToDisplay, props.cake)
  );
};

const mapStateToProps = (state) => {
  return (
    {
      cake: state.cakeCharacteristics,
    }
  );
};

export default connect(
  mapStateToProps,
)(IngredientsDisplay);
