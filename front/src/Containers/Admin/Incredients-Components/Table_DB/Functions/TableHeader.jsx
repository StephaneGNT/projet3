import React from 'react';

const TableHeader = (incredient) => {
  const incredientKeys = Object.keys(incredient);
  return incredientKeys.map(key => (
    <th>{key}</th>
  ));
};

export default TableHeader;
