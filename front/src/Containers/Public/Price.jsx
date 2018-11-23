import React from 'react';
import '../../Assets/Styles/Price.css';
import { connect } from 'react-redux';

const Price = (props) => {

  return (
    <div className="body">
      <h4>
        PRICE:
        {' '+ props.price}
        €
      </h4>
    </div>
  );
};

const mapStatetoProps = (state) => {
  return {
    price: state.cakeCharacteristics.ingredients
      .map(p => p.price).reduce((a, v) => a + v, 0),
  };
};

export default connect(mapStatetoProps)(Price);
