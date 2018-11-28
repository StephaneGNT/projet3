import React from 'react';
import { Col } from 'reactstrap';

import '../../Assets/Styles/Ingredient.css';

const Ingredient = (props) => {
  const getDescription = () => {
    let description;
    if (props.ingredient.portion) {
      description = `${props.ingredient.info} 
Allergènes: ${props.ingredient.allerg}
Giluna recommande une portion de ${props.ingredient.portion}`;
    } else {
      description = `${props.ingredient.info} 
Allergènes: ${props.ingredient.allerg}`;
    }
    return description;
  };

  return (
    <Col className="ingredient">
      <img src={props.ingredient.img} title={getDescription()} alt="" />
      <p>{props.ingredient.name}</p>
    </Col>
  );
};


export default Ingredient;
