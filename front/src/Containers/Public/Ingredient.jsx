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

  const drag = (ev) => {
    ev.dataTransfer.setData('text', ev.target.id);
  };

  return (
    <Col className="ingredient">
      <img src={props.ingredient.img} title={getDescription()} draggable="true" onDragStart={ev => drag(ev)} alt="" />
      <p>{props.ingredient.name}</p>
    </Col>
  );
};


export default Ingredient;
