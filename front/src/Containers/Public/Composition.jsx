import React from 'react';
import { connect } from 'react-redux';
import Ingredient from './Ingredient';
import Price from './Price';
import '../../Assets/Styles/Composition.css';
import NavArrowsLayout from './NavArrowsLayout';

const mapStateToProps = (state) => {
  // Affichage des bases, toppings... en fonction du page index
  let elementToDisplay;
  console.log(state.pageIndex);
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

// const mapDispatchToProps = () => ({});

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

const allowDrop = (ev) => {
  ev.preventDefault();
};

const drag = (ev) => {
  ev.dataTransfer.setData('text', ev.target.id);
};

const drop = (ev) => {
  ev.preventDefault();
  const data = ev.dataTransfer.getData('text');
  ev.target.appendChild(document.getElementById(data));
};

const Composition = (props) => {
  const { elementToDisplay, cake, price } = props;

  return (
    <div className="row">
      <div className="col-8" style={{margin: 0 }}>
        <div className="addIngredient" onDragStart={event => drag(event)}>
          {renderIngredients(elementToDisplay, cake)}
        </div>
        <div className="priceDisplay">
          <button type="button"> Command </button>
          <NavArrowsLayout />
          {renderButton(elementToDisplay)}
        </div>
      </div>
      <div className="col-4 cakeAndPricDisplay">
        <div className="cakeDisplay" id="drag2" onDrop={event => drop(event)} onDragOver={event => allowDrop(event)} />
        <div>
          <Price />
        </div>
      </div>
    </div>
  );
};

export default connect(
  mapStateToProps,
  // mapDispatchToProps,
)(Composition);
