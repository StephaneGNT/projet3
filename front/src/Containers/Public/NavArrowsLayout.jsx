import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavArrowNext from './NavArrowNext';
import NavArrowPrev from './NavArrowPrev';

class NavArrowsLayout extends Component {
  changeLayoutviaPageindex = (index) => {
    if (index === 1) {
      return (
        <div>
          <NavArrowNext />
        </div>
      );
    }
    if (index === 7) {
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
    return this.changeLayoutviaPageindex(this.props.pageIndex);
  }
}

const mapStateToProps = (state) => {
  return {
    pageIndex: state.pageIndex,
  };
};

export default connect(mapStateToProps)(NavArrowsLayout);
