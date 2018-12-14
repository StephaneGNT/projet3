import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Button,
  FormGroup,
  FormText,
  Label,
  Input,
} from 'reactstrap';
import { submitDecorationChoice } from '../../../Actions/customization_actions';

class Decoration extends Component {
  constructor(props) {
    super(props);
    const { name, image, price } = this.props;
    this.state = {
      decoration: { name, image, price },
    };
  }

  chooseDecoType = (structure) => {
    this.setState({ decoration: structure });
  }

  uploadPic = (e) => {
    const { decoration } = this.state;
    this.setState({ decoration: { ...decoration, image: e.target.files[0] } });
  }

  render() {
    const { decoration } = this.state;
    const {
      D2,
      D3,
      submitDecoChoice,
    } = this.props;
    return (
      <div>
        <FormGroup tag="fieldset">
          <legend>Décoration</legend>
          <FormGroup check>
            <Label check>
              <Input
                type="radio"
                name="radio1"
                defaultChecked={decoration.name === 'Pas de décoration'}
                onClick={() => this.chooseDecoType({ name: 'Pas de décoration', price: 0 })}
              />
              {' '}
              Pas de décoration personnalisée sur le gâteau
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input
                type="radio"
                name="radio1"
                defaultChecked={decoration.name === '2 Dimensions'}
                onClick={() => this.chooseDecoType(D2)}
              />
              {' '}
              Image 2D (image en sucre sur le gâteau)
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input
                type="radio"
                name="radio1"
                defaultChecked={decoration.name === '3 Dimensions'}
                onClick={() => this.chooseDecoType(D3)}
              />
              {' '}
              Décoration 3D (sculpture personnalisée)
            </Label>
          </FormGroup>
        </FormGroup>
        {(() => {
          if (decoration.name === 'Pas de décoration') {
            submitDecoChoice(decoration);
            return <div className="emptyDiv" />;
          }
          submitDecoChoice(decoration);
          return (
            <FormGroup className="uploadImage justify-content">
              <Label for={decoration.name === '2 Dimensions' ? 'file2D' : 'file3D'}>
                <u>
                  <b>
                    Votre image
                    {' '}
                    {decoration.name === '2 Dimensions' ? 2 : 3}
                    D
                  </b>
                </u>
              </Label>
              <Input
                type="file"
                name="file"
                id={decoration.name === '2 Dimensions' ? 'file2D' : 'file3D'}
                maxsize={5242880}
                multiple={false}
                accept="image/*"
                onChange={this.uploadPic}
              />
              {decoration.image ? (
                <Button bsSize="xsmall">
                  Supprimer photo
                </Button>
              )
                : ''}
              <FormText color="muted">
                {decoration.image
                  ? ''
                  : `Veuillez télécharger l’image à imprimer en ${decoration.name === '2 Dimensions' ? '2' : '3'}D`}
              </FormText>
            </FormGroup>
          );
        }
        )()}
      </div>
    );
  }
}

Decoration.propTypes = {
  D2: PropTypes.shape({}).isRequired,
  D3: PropTypes.shape({}).isRequired,
  submitDecoChoice: PropTypes.func.isRequired,
};

const mapStatetoProps = state => ({
  D2: state.customization.print2D,
  D3: state.customization.print3Dimage,
  name: state.cakeCharacteristics.customization.decoration.name,
  image: state.cakeCharacteristics.customization.decoration.image,
  price: state.cakeCharacteristics.customization.decoration.price,
});

const mapDispatchToProps = dispatch => ({
  submitDecoChoice: content => dispatch(submitDecorationChoice(content)),
});

export default connect(mapStatetoProps, mapDispatchToProps)(Decoration);
