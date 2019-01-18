import React from 'react';
import { Table } from 'reactstrap';
import TableHeader from './Functions/TableHeader';
import TableData from './Functions/TableData';

const TableDB = (type, token) => (
  <Table hover>
    <thead>
      <tr>
        {TableHeader(type[0])}
        <th>Options</th>
      </tr>
    </thead>
    <tbody>
      {TableData(type, token)}
    </tbody>
  </Table>
);

export default TableDB;
