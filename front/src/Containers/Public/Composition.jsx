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
function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}
const Composition = ({ elementToDisplay }) => (
  <div className="row" style={{ width: '1OO%', height: '100%' }}>
    <div className="col-8 ingredientDisplay" draggable="true" onDragStart={(event) => drag(event) }>
      {renderElement(elementToDisplay)}
    </div>
    <div className="col-4 cakeDisplay" id="drag2" onDrop={(event) => drop(event)} onDragOver= {(event) => allowDrop(event)} style={{ height: '3000px', border: '2px solid black', backgroundColor:'black'}}   >
    </div>
  </div>
);

export default connect(
  mapStateToProps,
  // mapDispatchToProps,
)(Composition);
