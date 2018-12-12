import React, { Component } from 'react';
import BasesDB from './Incredients-Components/Bases/BasesDB';

export default class DataBase extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <BasesDB />
      </div>
    );
  }
}
