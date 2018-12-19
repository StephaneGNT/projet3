import React from 'react';
import { connect } from 'react-redux';
import Ingredient from './Ingredient';

const IngredientsDisplay = (props) => {
  const getNumberOf = (cake, elementSearched) => {
    let sum = 0;
    cake.ingredients.map((ingredient) => {
      if (ingredient.type === elementSearched) sum += 1;
    });
    return sum;
  };

  const getCompatibleIngredients = (cake) => {
    let localCompatibleIngredients = [];
    // Si 1 ou plusieurs ingrédient(s) dans le gâteau : récupération des ingrédients compatibles communs
    if (cake.ingredients.length > 0) {
      for (let i = 0; i < cake.ingredients.length; i += 1) {
        localCompatibleIngredients = (cake.ingredients[0].compatible).filter(
          obj => cake.ingredients[i].compatible.indexOf(obj) !== -1,
        );
      }
    }
    return localCompatibleIngredients;
  };

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
    // Récupération du nombre de icing, filling et base
    const icingNumber = getNumberOf(cake, 'Glaçage');
    const fillingNumber = getNumberOf(cake, 'Filling');
    const baseNumber = getNumberOf(cake, 'Base');
    // Récupération des ingrédients compatibles
    const compatibleIngredients = getCompatibleIngredients(cake);
    // Tri des éléments avant affichage
    const orderedElement = orderElement(elementToDisplay, compatibleIngredients);
    const render = [];
    orderedElement.map(
      (ingredient) => {
        const disabled = !(
          ingredient.dispo
          && (cake.ingredients.length === 0 || compatibleIngredients.indexOf(ingredient.name) >= 0)
          && (ingredient.type !== 'Glaçage' || icingNumber < 1)
          && (ingredient.type !== 'Filling' || fillingNumber < 2)
          && (ingredient.type !== 'Base' || baseNumber < 1)
        );
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
