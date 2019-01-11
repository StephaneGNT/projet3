import React from 'react';

const TableHeader = (ingredient) => {
  const ingredientKeys = Object.keys(ingredient);
  return ingredientKeys.map(key => (
    <th>{key}</th>
  ));
};

export default TableHeader;
