import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changePrice } from '../../Actions/cakeActions/changeCakePrice';

const Price = (props) => {
  const { price, sendToPrice } = props;
  sendToPrice(price);
  return (
    <div className="bloc-price" style={{ position: 'sticky', top: '60vh' }}>
      {`PRIX TTC: ${price} €`}
    </div>
  );
};

Price.propTypes = {
  price: PropTypes.number.isRequired,
  sendToPrice: PropTypes.func.isRequired,
};

const mapStatetoProps = state => ({
  price: state.cakeCharacteristics.ingredients
    .map(p => p.price).reduce((a, v) => a + v, 0)
  // + state.customizationCustomer.customMessage.price
  // + state.customizationCustomer.decoration.price
  ,
});

const mapDispatchToProps = dispatch => ({
  sendToPrice: amount => dispatch(changePrice(amount)),
});

export default connect(mapStatetoProps, mapDispatchToProps)(Price);
