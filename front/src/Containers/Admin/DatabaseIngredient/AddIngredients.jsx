import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import {
  Label, Input, Button, Form, FormGroup, Table
} from 'reactstrap';
// import AlertAddIngredient from './AlertAddIngredient';
import PropTypes from 'prop-types';
import '../../../Assets/Styles/Add_Ingredients.css';

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
      isCompatible: true,
      flavor: '',
      color: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = () => {
    // e.preventDefault();
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

    console.log("newIngredient", newIngredient);

    axios.post('http://localhost:5000/ingredients/new', newIngredient)
      .then(res => console.log(res.data))
      .catch(err => console.log(err.response.data));
  }

  render() {
    console.log("this.state", this.state)
    return (
      <div className="bodyIng">
        <h5>{JSON.stringify(this.state, 1, 1)}</h5>
        <Form>
          <FormGroup>
            <Table responsive>
              <tbody>
                <tr>
                  <td>
                    <Label>Name</Label>
                    <Input type="text" name="name" onChange={this.handleChange} />
                  </td>
                  <td>
                    <Label>Type</Label>
                    <Input type="select" className="input-admin-type" name="type" onChange={this.handleChange}>
                      <option />
                      <option>Base</option>
                      <option>Filling</option>
                      <option>Icing</option>
                      <option>Topping</option>
                      <option>Macaron</option>
                      <option>Cookie</option>
                      <option>Brownie</option>
                    </Input>
                  </td>
                  <td>
                    <Label>Size</Label>
                    <Input type="text" name="size" onChange={this.handleChange} />
                  </td>
                  <td>
                    <Label>Price</Label>
                    <Input type="text" name="price" onChange={this.handleChange} />
                  </td>
                </tr>
              </tbody>

              <td>
                <Label>
                  Dispo
                  <Input style={{zIndex: "35"}} name="dispo" type="checkbox" checked onClick={() => this.setState({ dispo: !this.state.dispo })} />
                  {' '}
                </Label>
              </td>
              <td>
                <Label>Description</Label>
                <Input type="text" name="description" />
              </td>
            </Table>
            <br />
            <Button color="danger" onClick={() => this.handleSubmit()}>Ajouter</Button>
          </FormGroup>
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
