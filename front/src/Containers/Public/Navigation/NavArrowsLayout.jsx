import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import NavArrowNext from './NavArrowNext';
import NavArrowPrev from './NavArrowPrev';

class NavArrowsLayout extends Component {
  changeLayoutviaPageindex = (index, type, cake, dateOfDelivery) => {
    const minMacarons = 6;
    let disabled = true;
    if (index === 1) {
      if ((cake.type === 'cake' && cake.size > 0) || (cake.type === 'cheesecake') || ((cake.type === 'cookie' || cake.type === 'brownie') && cake.size !== 0 && cake.quantity > 1) || (cake.type === 'macaron' && cake.size !== 0 && cake.quantity >= minMacarons)) disabled = false;
      return (
        <div className="btn-group">
          <NavArrowNext disabled={disabled} />
        </div>
      );
    }
    if (!dateOfDelivery && ((index === 6) || (index === 4 && type === 'cookie') || (index === 4 && type === 'macaron') || (index === 4 && type === 'brownie'))) {
      return (
        <div className="btn-group">
          <NavArrowPrev />
          <NavArrowNext disabled />
        </div>
      );
    }
    if ((index === 7) || (index === 5 && type === 'cookie') || (index === 5 && type === 'macaron') || (index === 5 && type === 'brownie')) {
      return (
        <div className="btn-group">
          <NavArrowPrev />
        </div>
      );
    }
    if (index === 2 && cake.ingredients.length === 0) {
      return (
        <div className="btn-group">
          <NavArrowPrev />
          <NavArrowNext disabled />
        </div>
      );
    }
    return (
      <div className="btn-group">
        <NavArrowPrev />
        <NavArrowNext disabled={false} />
      </div>
    );
  }

  render() {
    const { pageIndex, type, cake, deliveryDate } = this.props;
    return this.changeLayoutviaPageindex(pageIndex, type, cake, deliveryDate);
  }
}

NavArrowsLayout.propTypes = {
  pageIndex: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  cake: PropTypes.shape({}).isRequired,
};

const mapStateToProps = state => ({
  pageIndex: state.pageIndex,
  type: state.cakeCharacteristics.type,
  cake: state.cakeCharacteristics,
  deliveryDate: state.orderCharacteristics.delivery_date,
});


export default connect(mapStateToProps)(NavArrowsLayout);
