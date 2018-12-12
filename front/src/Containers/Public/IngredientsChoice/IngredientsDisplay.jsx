import React from 'react';
import { connect } from 'react-redux';
import Ingredient from './Ingredient';

const IngredientsDisplay = (props) => {
  const orderElement = (elementToDisplay, elementCompatible) => {
    if (elementCompatible.length > 0) {
      for (let i = 0; i < elementToDisplay.length; i += 1) {
        elementToDisplay[i].isCompatible = (elementCompatible.indexOf(elementToDisplay[i].name) !== -1);
      }
    }
    elementToDisplay.sort((a, b) => {
      if (a.isCompatible) return -1;
      if (!a.isCompatible && b.isCompatible) return 1;
      return 1;
    });
    return elementToDisplay;
  };

  const renderIngredients = (elementToDisplay, cake) => {
    // Récupération des ingrédients compatibles
    const compatibleIngredients = cake.ingredients[0] ? cake.ingredients[0].compatible : [];
    // Tri des éléments avant affichage
    const orderedElement = orderElement(elementToDisplay, compatibleIngredients);
    const render = [];
    orderedElement.map(
      (ingredient) => {
        const disabled = !(ingredient.dispo && (compatibleIngredients.length === 0
          || compatibleIngredients.indexOf(ingredient.name) >= 0))
        render.push(
          <Ingredient
            ingredient={ingredient}
            disabled={disabled}
          />,
        );
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
