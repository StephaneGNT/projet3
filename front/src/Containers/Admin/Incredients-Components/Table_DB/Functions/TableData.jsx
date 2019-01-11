import React from 'react';
import { Button } from 'reactstrap';

const createTableDataFields = (element) => {
  const objValues = Object.values(element);
  return objValues.map(value => (
    <td>{value}</td>
  ));
};

const TableData = incredients => incredients.map(incredient => (
  <tr>
    {createTableDataFields(incredient)}
    <td>
      <Button color="primary" size="sm">
      
        {incredient.id}
      </Button>
      {/* <Button color="primary" size="sm">
        
        {incredient.id}
      </Button> */}
    </td>
  </tr>
));

export default TableData;
