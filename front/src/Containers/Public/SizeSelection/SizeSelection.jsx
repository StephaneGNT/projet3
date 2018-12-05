import React, { Component } from 'react';
import { connect } from 'react-redux';
import CakeSizeSelection from './CakeSizeSelection';
import MacaronSizeSelection from './MacaronSizeSelection';
import CookieSizeSelection from './CookieSizeSelection';
import BrownieSizeSelection from './BrownieSizeSelection';

class SizeSelection extends Component {
  renderSizeSelection = (cakeType) => {
    switch (cakeType) {
      case 'cake': return (<CakeSizeSelection />);
      case 'macaron': return (<MacaronSizeSelection />);
      case 'cookie': return (<CookieSizeSelection />);
      case 'brownie': return (<BrownieSizeSelection />);
      default: return (<div />);
    }
  }

  render() {
    let { cake } = this.props;
    return (
      this.renderSizeSelection(cake.type)
    );
  }
}

const mapStateToProps = state => ({
  cake: state.cakeCharacteristics,
});

export default connect(mapStateToProps, null)(SizeSelection);