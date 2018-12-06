import React from 'react';
import '../../Assets/Styles/Price.css';
import { connect } from 'react-redux';
import { changePrice } from '../../Actions/cakeActions/changeCakePrice';

const Price = (props) => {
  const { price, sendToPrice } = props;
  sendToPrice(price);
  return (
    <div className="bloc-price">
        {`PRIX TTC: ${price} €`}
    </div>
  );
};

const mapStatetoProps = (state) => {
  return {
    price: state.cakeCharacteristics.ingredients
      .map(p => p.price).reduce((a, v) => a + v, 0),
  };
};
const mapDispatchToProps = dispatch => ({
  sendToPrice: amount => dispatch(changePrice(amount)),
});

export default connect(mapStatetoProps, mapDispatchToProps)(Price);
