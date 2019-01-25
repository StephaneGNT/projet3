import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { Row, Col, Table } from 'reactstrap';
import axios from 'axios';
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

  deleteIngredient = (id, token) => {
    if (window.confirm('Voulez-vous supprimer cet ingrédient ?')) {
      const url = `/ingredients/${id}`;
      const headers = { Authorization: `Bearer ${token}` };
      axios.delete(url, { headers })
        .then(res => window.alert(res.data.message));
    }
  };


  createTableDataRows = (element, token) => (
    <tr>
      <td>{element.name}</td>
      <td>{element.type}</td>
      <td>{element.size}</td>
      <td>{element.price}</td>
      <td>{element.description}</td>
      <td><img src={element.image} alt={element.name} /></td>
      <td>
        <button type="button" className="btn btn-success" onClick={() => this.setState({ showForm: true, ingToModify: element })}>modifier</button>
        <button type="button" className="btn btn-danger" onClick={() => this.deleteIngredient(element.id, token)}>supprimer</button>
      </td>
    </tr>
  );

  createTableData = (ingredientsArray, filterTest, token) => {
    if (filterTest === 'All') {
      return ingredientsArray.map(ingredient => this.createTableDataRows(ingredient, token));
    }
    return ingredientsArray.filter(ingredient => ingredient.type === filterTest).map(ingredient => this.createTableDataRows(ingredient, token));
  };

  toggleModify = (show, ing) => (show ? <ModifyIngredient ingredient={ing} /> : null)

  render() {
    const { ingredients, token } = this.props;
    const { filterTable, showForm, ingToModify } = this.state;
    return (
      <div>
        <Row>
          {/* {this.toggleModify(showForm, ingToModify)} */}
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
                  <th>Nom</th>
                  <th>Type</th>
                  <th>Taille</th>
                  <th>Prix</th>
                  <th>Description</th>
                  <th>Image</th>
                  <th>Options</th>
                </tr>
              </thead>
              <tbody>
                {this.createTableData(ingredients, filterTable, token)}
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
  token: PropTypes.string.isRequired,
};

const mapStateToProps = state => (
  {
    ingredients: state.ingredients,
    token: state.adminToken,
  }
);

export default connect(mapStateToProps)(IngredientTable);
