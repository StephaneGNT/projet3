import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import {
  Row, Col, Table,
} from 'reactstrap';
import ModifyIngredient from '../DatabaseIngredient/ModifyIngredient';

class IngredientTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterTable: 'All',
      showForm: false,
      ingToModify: {},
    };
  }

  onChangeFilterTable(ingType) {
    this.setState({ filterTable: ingType });
  }

  createTableHeader = (ingredientsTable) => {
    console.log('BBBBBBBBBB', typeof ingredientsTable);
    const ingredientKeys = Object.keys(ingredientsTable[0]);
    return ingredientKeys.map(key => (
      <th>{key}</th>
    ));
  };

  createTableDataFields = (element) => {
    const objValues = Object.values(element);
    return objValues.map(value => (
      <td>{value}</td>
    ));
  };

  createTableDataRows = (ingredientsArray, filterTest) => {
    if (filterTest === 'All') {
      return ingredientsArray.map(ingredient => (
        <tr>
          {this.createTableDataFields(ingredient)}
          <td>
            <button type="button" className="btn btn-success" onClick={() => this.setState({ showForm: true, ingToModify: ingredient })}>modifier</button>
            <button type="button" className="btn btn-danger">supprimer</button>
          </td>
        </tr>
      ));
    }
    return ingredientsArray.filter(
      ingredient => ingredient.type === filterTest,
    ).map(ingredient => (
      <tr>
        {this.createTableDataFields(ingredient)}
        <td>
          <button type="button" onClick={() => this.setState({ showForm: true, ingToModify: ingredient })}>modifier</button>
          <button type="button">supprimer</button>
        </td>
      </tr>
    ));
  };

  toggleModify = (show, ing) => (show ? <ModifyIngredient ingredient={ing} /> : null)

  render() {
    const { ingredients } = this.props;
    const { filterTable, showForm, ingToModify } = this.state;
    console.log(ingredients);
    console.log('ingToModify :', ingToModify);
    return (
      <div>
        <Row>
          {this.toggleModify(showForm, ingToModify)}
        </Row>
        <Row>
          <Col>
            <button className="btn btn-success" onClick={() => this.onChangeFilterTable('All')} type="button">All</button>
            <button className="btn btn-success" onClick={() => this.onChangeFilterTable('Base')} type="button">Base</button>
            <button className="btn btn-success" onClick={() => this.onChangeFilterTable('Base cookie')} type="button">Base cookie</button>
            <button className="btn btn-success" onClick={() => this.onChangeFilterTable('Base brownie')} type="button">Base brownie</button>
            <button className="btn btn-success" onClick={() => this.onChangeFilterTable('Parfum')} type="button">Parfum</button>
            <button className="btn btn-success" onClick={() => this.onChangeFilterTable('Garniture')} type="button">Garniture</button>
            <button className="btn btn-success" onClick={() => this.onChangeFilterTable('Topping')} type="button">Topping</button>
            <button className="btn btn-success" onClick={() => this.onChangeFilterTable('Glaçage')} type="button">Glaçage</button>
            <button className="btn btn-success" onClick={() => this.onChangeFilterTable('Coquille')} type="button">Macaron Coquille</button>
            <button className="btn btn-success" onClick={() => this.onChangeFilterTable('Macaron')} type="button">Macaron Parfum</button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Table>
              <thead>
                <tr>
                  {this.createTableHeader(ingredients)}
                  <th>Options</th>
                </tr>
              </thead>
              <tbody>
                {this.createTableDataRows(ingredients, filterTable)}
              </tbody>
            </Table>
          </Col>
        </Row>
      </div>
    );
  }
}

IngredientTable.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

const mapStateToProps = state => (
  {
    ingredients: state.ingredients,
  }
);

export default connect(mapStateToProps)(IngredientTable);
