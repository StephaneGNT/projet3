import React, { Component } from 'react';
import TableDB from './Incredients-Components/Table_DB/TableDB';

export default class DataBase extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <TableDB />
      </div>
    );
  }
}
