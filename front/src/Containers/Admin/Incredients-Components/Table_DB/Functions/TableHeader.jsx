import React from 'react';
import keyIndex from 'react-key-index';

const TableHeader = (incredient) => {
  const incredientKeys = keyIndex(Object.keys(incredient), 1);
  return incredientKeys.map(key => (
    <th key={key.id}>{key.value}</th>
  ));
};

export default TableHeader;
