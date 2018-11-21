import React, { Component } from 'react';
import { connect } from 'redux';
import NavArrowNext from './NavArrowNext';
import NavArrowPrev from './NavArrowPrev';

class NavArrowsLayout extends Component {
  render() {
    if (this.props.pageIndex === 1) {
      return (
        <div>
          <NavArrowNext />
        </div>
      );
    }
    return (
      <div>
        <NavArrowPrev />
        <NavArrowNext />
      </div>
    )
 }
};

const mapStateToProps = (state) => {
  return {
    pageIndex: state.pageIndex,
  };
};

export default connect(mapStateToProps)(NavArrowsLayout);
