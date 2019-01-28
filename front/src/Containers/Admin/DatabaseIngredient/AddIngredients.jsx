import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import {
  Label, Input, Button, Form, FormGroup, Table, Col, Row,
} from 'reactstrap';
import PropTypes from 'prop-types';
import UploadPicsAddIngred from '../../UploadPicsAddIngred';
import '../../../Assets/Styles/Public.css';

class AddIngredients extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      type: '',
      size: '',
      price: null,
      dispo: true,
      description: '',
      image: '',
      isCompatible: false,
      flavor: '',
      color: '',
      ingredList: [],
      allergList: [],
    };
    this.compatibleIngList = [];
    this.allergeneIngList = [];
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    axios.get('/ingredients/name')
      // .then(results => results.json())
      .then((data) => {
        this.setState({ ingredList: (data.data[0]) });
      })
      .catch(err => console.log(err));

    axios.get('/allergenes/name')
      .then((data) => {
        this.setState({ allergList: (data.data[0]) });
      })
      .catch(err => console.log(err));
  }

  uploadPic = (e) => {
    const { decoration } = this.state;
    this.setState({ decoration: { ...decoration, image: e.target.files[0] } });
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = async () => {
    const {
      name, type, size, price, dispo, description, image, isCompatible, flavor, color,
    } = this.state;

    const newIngredient = {
      name,
      type,
      size,
      price,
      dispo,
      description,
      image,
      isCompatible,
      flavor,
      color,
    };

    // Enregistrement du nouvel ingrédient
    const newIngredientID = await axios.post('/api/ingredients/new', newIngredient)
      .then((res) => { return res.data.insertId; })
      .catch(err => console.log(err.response.data));

    // Enregistrement des ingrédients compatibles
    console.log(this.compatibleIngList);
    this.compatibleIngList.map((ingID) => {
      const formData = {
        id_ingred1: newIngredientID,
        id_ingred2: ingID,
      };
      axios.post('/api/jtingredients', formData, (req, res) => {
        if (res.status === 200) return ('Ingrédients compatibles enregistrés !');
        else return ('Error');
      });
    });
  }

  toggleIngredient = (ingredientID) => {
    const index = this.compatibleIngList.indexOf(ingredientID);
    if (index >= 0) this.compatibleIngList.splice(index, 1);
    else this.compatibleIngList.push(ingredientID);
  }

  toggleAllergene = (allergeneID) => {
    const index = this.allergeneIngList.indexOf(allergeneID);
    if (index >= 0) this.allergeneIngList.splice(index, 1);
    else this.allergeneIngList.push(allergeneID);
  }

  render() {
    return (
      <div className="bodyIng" id="showhide">
        <title-admin>Décrivez votre nouvel ingrédient</title-admin>
        <Form>
          <Row form>
            <Col md={2}>
              <FormGroup>
                <Label size="sm">Name</Label>
                <Input type="text" name="name" bsSize="sm" onChange={this.handleChange} />
              </FormGroup>
            </Col>
            <Col md={2}>
              <FormGroup>
                <Label size="sm">Type</Label>
                <Input type="select" name="type" bsSize="sm" onChange={this.handleChange}>
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
                <Label size="sm">Size</Label>
                <Input type="text" name="size" bsSize="sm" onChange={this.handleChange} />
              </FormGroup>
            </Col>
            <Col md={2}>
              <FormGroup>
                <Label size="sm">Price</Label>
                <Input type="text" name="price" bsSize="sm" onChange={this.handleChange} />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label size="sm">Description</Label>
                <Input type="text" name="description" bsSize="sm" onChange={this.handleChange} />
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col md={2}>
              <FormGroup>
                <Label size="sm">Flavor</Label>
                <Input type="text" name="flavor" bsSize="sm" onChange={this.handleChange} />
              </FormGroup>
            </Col>
            <Col md={2}>
              <FormGroup>
                <Label size="sm">Color</Label>
                <Input type="text" name="color" bsSize="sm" onChange={this.handleChange} />
              </FormGroup>
            </Col>
            <Col md={5}>
              <UploadPicsAddIngred />
            </Col>
            <Col md={2}>
              <FormGroup check>
                <Input name="dispo" defaultChecked type="checkbox" bsSize="sm" onClick={() => this.setState({ dispo: !this.state.dispo })} id="dispoCheck" />
                <Label size="sm" for="dispoCheck">Disponnible ?</Label>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={5} className="col-size-checkbox">
              <Table className="table-add-ingred" size="sm">
                <thead>
                  <tr>
                    <th className="title-label-list">Compatibilités</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    {this.state.ingredList.map(ingredient => (
                      <td className="td-ing-list">
                        <Input
                          name="isCompatible"
                          type="checkbox"
                          onClick={() => this.toggleIngredient(ingredient.id)}
                        />
                        <Label size="sm" check>{ingredient.name}</Label>
                      </td>))}
                  </tr>
                </tbody>
              </Table>
            </Col>
            <Col md={5} className="col-size-checkbox">
              <Table className="table-add-ingred" size="sm">
                <thead>
                  <tr>
                    <th className="title-label-list">Allergènes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    {this.state.allergList.map(allergene => (
                      <td className="td-ing-list">
                        <Input
                          name="allergene"
                          type="checkbox"
                          onClick={() => this.toggleAllergene(allergene.id)}
                        />
                        <Label size="sm" check>{allergene.name}</Label>
                      </td>))}
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
          <br />
          <Button color="secondary" size="sm" onClick={() => this.handleSubmit()}>Ajouter</Button>
        </Form>
      </div>
    );
  }
}

AddIngredients.propTypes = {
  updateState: PropTypes.shape({}).isRequired,
};

const mapStateToProps = state => ({
  dispatch: state.dispatch,
  selectedIngredient: state.ingredientCharacteristics,
});

const mapDispatchToProps = dispatch => ({
  updateState: ingredientType => dispatch(this.props.updateState(ingredientType)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddIngredients);

