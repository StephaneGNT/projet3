import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Label, Input, Container, Row, Col, Button } from 'reactstrap';
import changeCakeType from '../../Actions/cakeActions/changeCakeType';
import PropTypes from 'prop-types';
import '../../Assets/Styles/Add_Ingredients.css';

class AddIngredients extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ' ',
      type: ' ',
      size: ' ',
      price: 0,
      dispo: false,
      info: '',
      img: '',
      allerg: '',
      compatible: [],
    };
  }

  updateState = (e) => {
    switch (e.target.id) {
      case 'name':
        this.setState({ name: e.target.value });
        break;
      case 'type':
        this.setState({ type: e.target.value });
        break;
      case 'size':
        this.setState({ size: e.target.value });
        break;
      case 'price':
        this.setState({ price: e.target.value });
        break;
      case 'dispo':
        this.setState({ dispo: e.target.value });
        break;
      case 'info':
        this.setState({ info: e.target.value });
        break;
      case 'img':
        this.setState({ img: e.target.value });
        break;
      case 'allerg':
        this.setState({ allerg: e.target.value });
        break;
      case 'compatible':
        this.setState({ compatible: e.target.value });
        break;
      default:
        return null;
    }
    return null;
  }

  render() {
    const { localChangeCakeType } = this.props;
    return (
      <div className="bodyIng">
        <Container>
          <div className="nav-b-admin">navigation</div>
          <div className="ligne-titre">
            <Row>
              <Col sm="5">
                <h3 className="mt-3">Ajout d'un nouvel ingrédient</h3>
              </Col>
            </Row>
          </div>
          <Row className="les-row">
            <Col sm="2">
              <Label className="label-type">
                Type de gâteau
          <Input type="select" name="type" className="input-admin-type">
                  <option onClick={() => localChangeCakeType('cake')}>Cake</option>
                  <option onClick={() => localChangeCakeType('cheesecake')}>Cheesecake</option>
                  <option onClick={() => localChangeCakeType('macaron')}>Macarons</option>
                  <option onClick={() => localChangeCakeType('brownie')}>Cookies</option>
                </Input>
              </Label>
            </Col>
            <Col sm="2">
              <Label className="label-type">
                Nom
          <Input type="text" name="name" className="input-admin-type" />
              </Label>
            </Col>
            <Col sm="1">
              <Label className="label-type">
                Taille
          <Input type="text" name="size" className="input-admin-type" />
              </Label>
            </Col>
            <Col sm="1">
              <Label for="choix_occasion" className="label-type">
                Prix €
          <Input type="text" name="price" className="input-admin-type" />
              </Label>
            </Col>
            <Col sm="3">
              <Label check className="label-type">
                Description
            <Input type="text" name="info" className="input-admin-type" />
              </Label>
            </Col>
            <Col sm="2">
              <Label check className="label-type">
                Allergènes
            <Input type="text" name="allerg" className="input-admin-type" />
              </Label>
            </Col>
            <Col sm="1">
              <Label check className="label-type">
                Disponibilité
            <Input type="checkbox" name="dispo" />
                {' '}
              </Label>
            </Col>
            <Col sm="4">
              <Input type="file" name="file" id="exampleFile" />
            </Col>
            <Button type="submit" onSubmit="">Ajouter mon ingrédient</Button>
          </Row>
        </Container>
      </div>
    );
  };
};

  AddIngredients.propTypes = {
    localChangeCakeType: PropTypes.string.isRequired,
  };

  const mapStateToProps = state => ({
    dispatch: state.dispatch,
    selectedCakeType: state.cakeCharacteristics,
  });

  const mapDispatchToProps = dispatch => ({
    localChangeCakeType: cakeType => dispatch(changeCakeType(cakeType)),
  });

  export default connect(mapStateToProps, mapDispatchToProps)(AddIngredients);
// export default AddIngredients;
