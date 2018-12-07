import React from 'react';
import PropTypes from 'prop-types';
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

Price.propTypes = {
  price: PropTypes.string.isRequired,
  sendToPrice: PropTypes.string.isRequired,
};

const mapStatetoProps = state => ({
  price: state.cakeCharacteristics.ingredients
    .map(p => p.price).reduce((a, v) => a + v, 0),
});

const mapDispatchToProps = dispatch => ({
  sendToPrice: amount => dispatch(changePrice(amount)),
});

export default connect(mapStatetoProps, mapDispatchToProps)(Price);
