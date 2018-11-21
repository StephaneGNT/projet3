import React from 'react';
import Ingredient from './Ingredient';

export default class Composition extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.base = [
      {
        name: 'carrot cake',
        img: 'https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/classic_carrot_cake_08513_16x9.jpg',
        type: 'base',
        description: 'oulala c\'est très très bon',
        allergènes: 'carottes, gluten',
      },
      {
        name: 'chocolat cake',
        img: 'https://food-images.files.bbci.co.uk/food/recipes/easy_chocolate_cake_31070_16x9.jpg',
        type: 'base',
        description: 'oulala c\'est très très chocolaté',
        allergènes: 'chocolat, gluten',
      },
      {
        name: 'banana cake',
        img: 'https://www.cookingclassy.com/wp-content/uploads/2013/05/banana-cake-11.jpg',
        type: 'base',
        description: 'oulala c\'est très très fort en bananes',
        allergènes: 'bananes, gluten',
      },
      {
        name: 'gâteau au yahourt',
        img: 'https://static.750g.com/images/auto-427/ceb41af19c90f19ec99711aeb63cb690/gettyimages-171270433.jpg',
        type: 'base',
        description: 'oulala ça n\'a pas de goût du tout...',
        allergènes: 'gluten, lactose',
      },
    ];
  }

  renderCakeElement = (data) => {
    return (
      data.map(ingredient => <Ingredient ingredient={ingredient} />)
    );
  }

  render() {
    return (
      <div className="row">
        <div>
          {this.renderCakeElement(this.base)}
        </div>
      </div>
    );
  }
}
