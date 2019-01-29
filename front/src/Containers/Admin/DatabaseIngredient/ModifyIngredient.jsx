import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Table, Label, Input, Form, FormGroup, Row, Col, Button,
} from 'reactstrap';
import { bindActionCreators } from 'redux';
import axios from 'axios';
import PropTypes from 'prop-types';
import axiosIngredientsDB from '../../../Actions/fetchDB/fetch_database_actions';
import '../../../Assets/Styles/Add_Ingredients.css';

class ModifyIngredient extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: {
        id: '',
        name: '',
        type: '',
        size: '',
        price: '',
        dispo: true,
        description: '',
        image: '',
        allerg: [],
        compatible: [],
        flavor: '',
        color: '',
      },
      fullList: [],
      fullAllerg: [],
      previewImage: null,
    };
    this.handleClickCompatible = this.handleClickCompatible.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    const { ingredient, showFunction } = this.props;
    this.inheritedIngredient = ingredient;
    this.showForm = showFunction;
  }

  componentWillMount() {
    this.setState({
      ingredients: {
        ...this.inheritedIngredient,
      },
    });
    axios.get('/api/ingredients/name')
      .then((res) => {
        const fullListArray = res.data[0]; this.setState({ fullList: fullListArray });
      });

    axios.get('/api/allergenes/name')
      .then((res) => {
        const fullAllergArray = res.data[0]; this.setState({ fullAllerg: fullAllergArray });
      });
  }


  handleClickCompatible = (compatibleID, compatibleName, ingredients) => {
    const index = this.inheritedIngredient.compatible.indexOf(compatibleName);
    const formData = {
      id_ingred1: this.inheritedIngredient.id,
      id_ingred2: compatibleID,
    };
    if (index >= 0) {
      this.inheritedIngredient.compatible.splice(index, 1);
      axios.delete(`/api/jtingredients/del/${formData.id_ingred2}/${formData.id_ingred1}`)
        .then(res => (res.data))
        .catch(err => (err.response.data));
      this.setState({
        [ingredients]: {
          ...ingredients,
          compatible: this.inheritedIngredient.compatible,
        },
      });
    } else {
      this.inheritedIngredient.compatible.push(compatibleID);
      axios.post('/api/jtingredients/add', formData)
        .then(res => (res.data))
        .catch(err => (err.response.data));
      this.setState({
        [ingredients]: {
          ...ingredients,
          compatible: this.inheritedIngredient.compatible,
        },
      });
    }
    return this.inheritedIngredient.compatible;
  }


  handleClickAllergene = (allergeneID, allergeneName, ingredients) => {
    const index = this.inheritedIngredient.allergenes.indexOf(allergeneName);
    const formData = {
      id_ingred: this.inheritedIngredient.id,
      id_allergene: allergeneID,
    };
    if (index >= 0) {
      this.inheritedIngredient.allergenes.splice(index, 1);
      axios.delete(`/api/jtallergenes/del/${formData.id_allergene}/${formData.id_ingred}`)
        .then(res => (res.data))
        .catch(err => (err.response.data));
      this.setState({
        [ingredients]: {
          ...ingredients,
          allerg: this.inheritedIngredient.allergenes,
        },
      });
    } else {
      this.inheritedIngredient.allergenes.push(allergeneID);
      axios.post('/api/jtallergenes/add', formData)
        .then(res => (res.data))
        .catch(err => (err.response.data));
      this.setState({
        [ingredients]: {
          ...ingredients,
          allerg: this.inheritedIngredient.allergenes,
        },
      });
    }
    return this.inheritedIngredient.allergenes;
  }


  updateState = (e, ingredients) => {
    this.setState({
      ingredients: {
        ...ingredients,
        id: this.inheritedIngredient.id,
        [e.target.name]: e.target.value,
      },
    });
  };


  uploadPic = (file, ingredients) => {
    const data = new FormData();
    data.append('avatar', file.target.files[0]);
    axios.post('/api/image/upload', data)
      .then((result) => {
        this.setState({
          ingredients: {
            ...ingredients,
            image: result.data,
          },
        });
      })
      .then(axios.get(`/api/image/get/${ingredients.image}`)
        .then((res) => {
          const photo = `data:image/jpg;base64,${res.data}`;
          this.setState({ previewImage: photo });
        }));
  }

  onSubmit = (e, ingredients) => {
    const { axiosDatabase } = this.props;
    e.preventDefault();
    const modifiedIngredient = ingredients;
    axios.put(`/api/ingredients/${modifiedIngredient.id}/`, modifiedIngredient)
      .then(res => (res.data))
      .catch(err => (err.response.data));
    axiosDatabase();
  };


  createModifyForm = (ingredients, fullList, fullAllerg, previewImage) => (
    <div>
      <title-admin>
        Modifier l’ingrédient
        {' '}
        {this.inheritedIngredient.name}
      </title-admin>
      <Form>
        <Row form>
          <Col md={2}>
            <FormGroup>
              <Label>Name</Label>
              <Input type="text" name="name" onChange={e => this.updateState(e, ingredients)} placeholder={this.inheritedIngredient.name} value={ingredients.name} />
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Label>Type</Label>
              <Input type="select" name="type" onChange={e => this.updateState(e, ingredients)}>
                <option />
                <option>Base</option>
                <option>Filling</option>
                <option>Icing</option>
                <option>Topping</option>
                <option>Macaron</option>
                <option>Cookie</option>
                <option>Brownie</option>
              </Input>
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Label>Size</Label>
              <Input type="text" name="size" onChange={e => this.updateState(e, ingredients)} placeholder={this.inheritedIngredient.size} value={ingredients.size} />
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Label>Price</Label>
              <Input type="text" name="price" onChange={e => this.updateState(e, ingredients)} placeholder={this.inheritedIngredient.price} value={ingredients.price} />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label>Description</Label>
              <Input type="text" name="description" onChange={e => this.updateState(e, ingredients)} placeholder={this.inheritedIngredient.description} value={ingredients.description} />
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col md={2}>
            <FormGroup>
              <Label>Flavor</Label>
              <Input type="text" name="flavor" />
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Label>Color</Label>
              <Input type="text" name="color" />
            </FormGroup>
          </Col>
          <Col md={5}>
            <Label>Image</Label>
            <Input type="file" name="file" onChange={file => this.uploadPic(file, ingredients)} />
            {/* <img src={previewImage || this.inheritedIngredient.image} alt="ingredient" /> */}
            <img src={previewImage ? previewImage : this.inheritedIngredient.image} alt="ingredient" />
          </Col>
          <Col md={2}>
            <FormGroup check>
              <Input name="dispo" type="checkbox" defaultChecked={ingredients.dispo} onChange={() => this.setState({ ingredients: { ...ingredients, dispo: !ingredients.dispo } })} id="dispoCheck" />
              <Label for="dispoCheck" check>Disponnibilité</Label>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={5} className="col-size-checkbox">
            <Table className="table-add-ingred">
              <thead>
                <tr>
                  <th className="title-label-list">Compatibilités</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  {fullList.map(compatible => (
                    <td key={compatible.id}>
                      <Input
                        name="isCompatible"
                        type="checkbox"
                        defaultChecked={this.inheritedIngredient.compatible.includes(compatible.name)}
                        onChange={() => (this.handleClickCompatible(compatible.id, compatible.name))}
                      />
                      <Label check>{compatible.name}</Label>
                    </td>))}
                </tr>
              </tbody>
            </Table>
          </Col>
          <Col md={5} className="col-size-checkbox">
            <Table className="table-add-ingred">
              <thead>
                <tr>
                  <th className="title-label-list">Allergenes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  {fullAllerg.map(allergene => (
                    <td key={allergene.id}>
                      <Input
                        name="isAllergene"
                        type="checkbox"
                        defaultChecked={this.inheritedIngredient.allergenes.includes(allergene.name)}
                        onChange={() => this.handleClickAllergene(allergene.id, allergene.name)}
                      />
                      <Label>{allergene.name}</Label>
                    </td>))}
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
        <br />
        <Row>
          <Button color="secondary" size="lg" onClick={() => this.showForm()}>Annuler</Button>
          <Button color="primary" size="lg" onClick={(e) => { this.onSubmit(e, ingredients); this.showForm(); }}>Modifier</Button>
        </Row>
      </Form>
    </div>
  );


  render() {
    const { ingredients, fullList, fullAllerg, previewImage } = this.state;
    return (
      <div>
        {this.createModifyForm(ingredients, fullList, fullAllerg, previewImage)}
      </div>
    );
  }
}


ModifyIngredient.propTypes = {
  ingredient: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  showFunction: PropTypes.func.isRequired,
  axiosDatabase: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  axiosDatabase: bindActionCreators(axiosIngredientsDB, dispatch),
});

export default connect(null, mapDispatchToProps)(ModifyIngredient);
