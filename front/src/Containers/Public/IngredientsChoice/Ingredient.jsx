import React from 'react';
import { Col } from 'reactstrap';

import '../../../Assets/Styles/Ingredient.css';

const Ingredient = (props) => {

  return (
    <Col className="ingredient" style={{ textAlign: 'center' }}>
      <img src={props.ingredient.img} title={props.ingredient.fullDescripion} alt="" />
      <p>{props.ingredient.name}</p>
    </Col>
  );
};

export default Ingredient;
