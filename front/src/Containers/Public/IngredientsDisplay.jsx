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
        newCompatibleIngredient = tempCompatibleIngredients[0].filter((ingredient) => { return tempCompatibleIngredients[1].indexOf(ingredient) === -1; });
      }
    }
    return newCompatibleIngredient;
  };

  const renderIngredients = (elementToDisplay) => {
    const compatibleIngredients = getCompatibleIngredients(props.cake); 
    return (
      elementToDisplay.map(
        (ingredient) => {
          if (ingredient.dispo && (compatibleIngredients.indexOf(ingredient.name) >= 0 || compatibleIngredients.length === 0)) return <Ingredient ingredient={ingredient} />;
        },
      )
    );
  };

  return (
    renderIngredients(props.elementToDisplay)
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
