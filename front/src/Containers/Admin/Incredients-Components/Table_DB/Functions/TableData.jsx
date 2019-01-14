import React from 'react';
import { Button } from 'reactstrap';
import axios from 'axios';
import ButtonModify from '../../../DatabaseIngredient/ButtonModify';

// import openSnackBar from '../../../../../Actions/snackBarActions';

const createTableDataFields = (element) => {
  const objValues = Object.values(element);
  return objValues.map(value => (
    <td>{value}</td>
  ));
};

const deleteIngredient = (type, id) => {
  if (window.confirm('Voulez-vous supprimer cet ingrédient ?')) {
    let tableName = '';
    switch (type) {
      case ('Base cookie'): tableName = 'cookie_bases'; break;
      case ('Base'): tableName = 'cake_bases'; break;
      case ('Garniture'): tableName = 'fillings'; break;
      case ('Glaçage'): tableName = 'icings'; break;
      case ('Toppings'): tableName = 'toppings'; break;
      case ('Parfum'): tableName = 'cheesecake_flavors'; break;
      case ('Base brownie'): tableName = 'brownie_bases'; break;
      case ('Coquille'): tableName = 'macaron_shells'; break;
      case ('Macaron'): tableName = 'macaron_flavors'; break;
      default: tableName = ''; break;
    }
    axios.delete(`/ingredients/${tableName}/${id}`)
      .then(res => window.alert(res.data.message));
  }
};



const TableData = ingredients => ingredients.map(ingredient => (
  <tr>
    {createTableDataFields(ingredient)};
    <td>
      <ButtonModify ingredient={ingredient} id={ingredient.id}/>
      - #
        {ingredient.name}
      <Button
        title="Supprimer ingrédient"
        onClick={() => deleteIngredient(ingredient.type, ingredient.id)}
      >
        ✘
      </Button>
    </td>
  </tr >
));
;


export default (TableData);


