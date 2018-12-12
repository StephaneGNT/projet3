import React from 'react';
import keyIndex from 'react-key-index';
import { Button } from 'reactstrap';

const createTableDataFields = (element) => {
  const objValues = keyIndex(Object.values(element), 2);
  return objValues.map(value => (
    <td key={value.id}>{value.value}</td>
  ));
};

const TableData = incredients => incredients.map(incredient => (
  <tr key={incredient.id}>
    {createTableDataFields(incredient)}
    <td>
      <Button>
        - #
        {incredient.id}
      </Button>
      <Button>
        / #
        {incredient.id}
      </Button>
    </td>
  </tr>
));

export default TableData;
