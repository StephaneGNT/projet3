import React, { Component } from 'react';
import NavArrowsLayout from './NavArrowsLayout';


export default class Personalisation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        Personnalisation
        <NavArrowsLayout />
      </div>
    );
  }
}
