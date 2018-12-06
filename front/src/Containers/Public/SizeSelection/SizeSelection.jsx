import React, { Component } from 'react';
import { connect } from 'react-redux';
import CakeSizeSelection from './CakeSizeSelection';
import CheeseCakeSizeSelection from './CheesecakeSizeSelection';
import MacaronSizeSelection from './MacaronSizeSelection';
import CookieSizeSelection from './CookieSizeSelection';

class SizeSelection extends Component {
  renderSizeSelection = (cakeType) => {
    switch (cakeType) {
      case 'cake': return (<CakeSizeSelection />);
      case 'cheesecake': return (<CheeseCakeSizeSelection />);
      case 'macaron': return (<MacaronSizeSelection />);
      case 'cookie': return (<CookieSizeSelection />);
      default: return (<div />);
    }
  }

  render() {
    return (
      this.renderSizeSelection(this.props.cake.type)
    );
  }
}

const mapStateToProps = state => ({
  cake: state.cakeCharacteristics,
});

export default connect(mapStateToProps, null)(SizeSelection);
