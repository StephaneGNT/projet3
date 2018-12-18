import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import NavArrowNext from './NavArrowNext';
import NavArrowPrev from './NavArrowPrev';

class NavArrowsLayout extends Component {
  changeLayoutviaPageindex = (index, type, cake) => {
    let disabled = true;
    if (index === 1) {
      if ((cake.type === 'cake' && cake.size > 0) || (cake.type === 'cheesecake') || ((cake.type === 'cookie' || cake.type === 'macaron' || cake.type === 'brownie') && cake.size !== 0 && cake.quantity > 1)) disabled = false;
      return (
        <div className="btn-group">
          <NavArrowNext disabled={disabled} />
        </div>
      );
    }
    if ((index === 7) || (index === 5 && type === 'cookie') || (index === 5 && type === 'macaron')) {
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
          <NavArrowNext disabled={true} />
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
    const { pageIndex, type, cake } = this.props;
    return this.changeLayoutviaPageindex(pageIndex, type, cake);
  }
}

NavArrowsLayout.propTypes = {
  pageIndex: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  cake: PropTypes.shape({}).isRequired,
};

const mapStateToProps = (state) => {
  return {
    pageIndex: state.pageIndex,
    type: state.cakeCharacteristics.type,
    cake: state.cakeCharacteristics,
  };
};

export default connect(mapStateToProps)(NavArrowsLayout);
