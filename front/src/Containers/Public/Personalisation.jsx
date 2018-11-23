import React, { Component } from 'react';
import NavArrowsLayout from './NavArrowsLayout';

class Personalisation extends Component {
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

export default Personalisation;