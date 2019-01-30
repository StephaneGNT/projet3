import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import {
  Label, Input, Button, Form, FormGroup, Table, Col, Row,
} from 'reactstrap';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import axiosIngredientsDB from '../../../Actions/fetchDB/fetch_database_actions';
import alert from '../../../Actions/alert';
import '../../../Assets/Styles/Public.css';

class AddIngredients extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      type: '',
      size: '',
      price: 0,
      dispo: true,
      description: '',
      image: '',
      isCompatible: true,
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
    axios.get('/api/ingredients/name')
      // .then(results => resultss.json())
      .then((data) => {
        this.setState({ ingredList: (data.data[0]) });
      })
      .catch(err => console.log(err));

    axios.get('/api/allergenes/name')
      .then((data) => {
        this.setState({ allergList: (data.data[0]) });
      })
      .catch(err => console.log(err));
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = async () => {
    const {
      name, type, size, price, dispo, description, image, isCompatible, flavor, color,
    } = this.state;
    const { axiosDatabase, alertAction } = this.props;

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
      .then((res) => {
        if (res.status === 200) alertAction('L’ingrédient a bien été ajouté');
        return res.data.insertId;
      })
      .catch(err => alertAction(err.response.data));

    // Enregistrement des ingrédients compatibles
    this.compatibleIngList.map((ingID) => {
      const formData = {
        id_ingred1: newIngredientID,
        id_ingred2: ingID,
      };
      axios.post('/api/jtingredients', formData, (req, res) => {
        if (res.status === 200) return ('Ingrédients compatibles enregistrés !');
        return ('Error');
      });
    });
    axiosDatabase();

    // Enregistrement des allergenes
    this.allergeneIngList.map((ingID) => {
      const formData = {
        id_ingred: newIngredientID,
        id_allergene: ingID,
      };
      axios.post('/api/jtallergenes', formData, (req, res) => {
        if (res.status === 200) return ('Allergènes enregistrés !');
        return ('Error');
      });
    });
    axiosDatabase();
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

  uploadPic = (file) => {
    const data = new FormData();
    data.append('avatar', file.target.files[0]);
    axios.post('/api/image/upload', data)
      .then((result) => {
        this.setState({
          image: result.data,
        });
      });
  }

  render() {
    return (
      <div className="bodyIng" id="showhide">
        <title-admin>Décrivez votre nouvel ingrédient</title-admin>
        <Form>
          <Row form>
            <Col md={2}>
              <FormGroup>
                <Label size="sm">Nom</Label>
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
                <Label size="sm">Taille</Label>
                <Input type="text" name="size" bsSize="sm" onChange={this.handleChange} />
              </FormGroup>
            </Col>
            <Col md={2}>
              <FormGroup>
                <Label size="sm">Prix</Label>
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
                <Label size="sm">Parfum</Label>
                <Input type="text" name="flavor" bsSize="sm" onChange={this.handleChange} />
              </FormGroup>
            </Col>
            <Col md={2}>
              <FormGroup>
                <Label size="sm">Couleur</Label>
                <Input type="text" name="color" bsSize="sm" onChange={this.handleChange} />
              </FormGroup>
            </Col>
            <Col md={5}>
              <Label>File</Label>
              <Input type="file" name="file" bsSize="sm" onChange={file => this.uploadPic(file)} />
            </Col>
            <Col md={2}>
              <FormGroup check>
                <Input name="dispo" defaultChecked type="checkbox" bsSize="sm" onClick={() => this.setState({ dispo: !this.state.dispo })} id="dispoCheck" />
                <Label size="sm" for="dispoCheck">Disponible ?</Label>
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
  alertAction: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  dispatch: state.dispatch,
  selectedIngredient: state.ingredientCharacteristics,
});

const mapDispatchToProps = dispatch => ({
  updateState: ingredientType => dispatch(this.props.updateState(ingredientType)),
  axiosDatabase: bindActionCreators(axiosIngredientsDB, dispatch),
  alertAction: message => dispatch(alert(message)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddIngredients);
