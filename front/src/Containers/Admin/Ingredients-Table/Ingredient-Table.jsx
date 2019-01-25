import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { Container, Row, Col, Table, Button } from 'reactstrap';
import axios from 'axios';
// import ModifyIngredient from '../DatabaseIngredient/ModifyIngredient';
import AddIngredients from '../DatabaseIngredient/AddIngredients';

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
        <Button type="button" size="sm" color="warning" className="btn-ad-sup" onClick={() => this.setState({ showForm: true, ingToModify: element })}>modifier</Button>
        <Button type="button" size="sm" color="danger" className="btn-ad-sup" onClick={() => this.deleteIngredient(element.id, token)}>supprimer</Button>
      </td>
    </tr>
  );

  createTableData = (ingredientsArray, filterTest, token) => {
    if (filterTest === 'All') {
      return ingredientsArray.map(ingredient => this.createTableDataRows(ingredient, token));
    }
    return ingredientsArray.filter(ingredient => ingredient.type === filterTest).map(ingredient => this.createTableDataRows(ingredient, token));
  };

  toggleAddIng = (show, ing) => (show ? <AddIngredients ingredient={ing} /> : null)

  render() {
    const { ingredients, token } = this.props;
    const { filterTable, showForm, ingToAddIng } = this.state;
    return (
      <div>
        <Container className="body-ingred-tb">
          <Row>
            {this.toggleAddIng(showForm, ingToAddIng)}
            <AddIngredients />
          </Row>
          <Row>
            <Col sm="12">
              <Button color="secondary" size="sm" className="col-btn-tb" onClick={() => this.onChangeFilterTable('All')} type="button">All</Button>
              <Button color="secondary" size="sm" className="col-btn-tb" onClick={() => this.onChangeFilterTable('Base')} type="button">Base</Button>
              <Button color="secondary" size="sm" className="col-btn-tb" onClick={() => this.onChangeFilterTable('Base cookie')} type="button">Base cookie</Button>
              <Button color="secondary" size="sm" className="col-btn-tb" onClick={() => this.onChangeFilterTable('Base brownie')} type="button">Base brownie</Button>
              <Button color="secondary" size="sm" className="col-btn-tb" onClick={() => this.onChangeFilterTable('Parfum')} type="button">Parfum</Button>
              <Button color="secondary" size="sm" className="col-btn-tb" onClick={() => this.onChangeFilterTable('Garniture')} type="button">Garniture</Button>
              <Button color="secondary" size="sm" className="col-btn-tb" onClick={() => this.onChangeFilterTable('Topping')} type="button">Topping</Button>
              <Button color="secondary" size="sm" className="col-btn-tb" onClick={() => this.onChangeFilterTable('Glaçage')} type="button">Glaçage</Button>
              <Button color="secondary" size="sm" className="col-btn-tb" onClick={() => this.onChangeFilterTable('Coquille')} type="button">Macaron Coquille</Button>
              <Button color="secondary" size="sm" className="col-btn-tb" onClick={() => this.onChangeFilterTable('Macaron')} type="button">Macaron Parfum</Button>
            </Col>
          </Row>
          <Row className="body-tb">
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
        </Container>
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
