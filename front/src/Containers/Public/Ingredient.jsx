import React from 'react';
import { Col } from 'reactstrap';

import '../../Assets/Styles/Ingredient.css';

const Ingredient = (props) => {
  const description = `${props.ingredient.info} 
Allergènes: ${props.ingredient.allerg}`;

  return (
    <Col className="ingredient">
      <img src={props.ingredient.img} title={description} draggable="true" alt="" />
      <p>{props.ingredient.name}</p>
    </Col>
  );
};


export default Ingredient;
