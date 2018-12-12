import React from 'react';

const createTableRows = (allBases) => {
  allBases.map(base => (
    <tr>
      <td>{base.name}</td>
      <td>{base.size}</td>
      <td>{base.nb_persons}</td>
      <td>{base.price}</td>
      <td>{base.available}</td>
      <td>{base.info}</td>
      <td>{base.image}</td>
      <td>{base.allergies}</td>
      <td>{base.compatible}</td>
      <td>action buttons here</td>
    </tr>
  ));
};

export default createTableRows;
