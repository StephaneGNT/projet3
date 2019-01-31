import React from 'react';
import { Button } from 'reactstrap';
import axios from 'axios';
import ButtonModify from '../../../DatabaseIngredient/ButtonModify';

const createTableDataFields = (element) => {
  const objValues = Object.values(element);
  return objValues.map(value => (
    <td>{value}</td>
  ));
};

const deleteIngredient = (id, token) => {
  if (window.confirm('Voulez-vous supprimer cet ingrédient ?')) {
    const url = `/api/ingredients/${id}`;
    const headers = { Authorization: `Bearer ${token}` };

    axios.delete(url, { headers })
      .then(res => window.alert(res.data.message));
  }
};

const TableData = (ingredients, token) => ingredients.map(ingredient => (
  <tr>
    {createTableDataFields(ingredient)}
    <td>
      <ButtonModify ingredient={ingredient} id={ingredient.id} />
      - #
      {ingredient.name}
      <Button
        title="Supprimer ingrédient"
        onClick={() => deleteIngredient(ingredient.id, token)}
      >
        ✘
      </Button>
    </td>
  </tr >
));
;


export default (TableData);


