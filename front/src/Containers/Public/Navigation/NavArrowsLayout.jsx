import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavArrowNext from './NavArrowNext';
import NavArrowPrev from './NavArrowPrev';

class NavArrowsLayout extends Component {
  changeLayoutviaPageindex = (index, type) => {
    if (index === 1) {
      return (
        <div>
          <NavArrowNext />
        </div>
      );
    }
    if ((index === 7) || (index === 5 && type === 'cookie') || (index === 5 && type === 'macaron')) {
      return (
        <div>
          <NavArrowPrev />
        </div>
      );
    }
    return (
      <div>
        <NavArrowPrev />
        <NavArrowNext />
      </div>
    );
  }

  render() {
    return this.changeLayoutviaPageindex(this.props.pageIndex, this.props.type);
  }
}

const mapStateToProps = (state) => {
  return {
    pageIndex: state.pageIndex,
    type: state.cakeCharacteristics.type,
  };
};

export default connect(mapStateToProps)(NavArrowsLayout);
