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
    const { choice, image, price } = this.props;
    this.state = {
      decoration: { choice, image, price },
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
        <FormGroup style={{ textAlign: 'center' }} tag="fieldset">
          <p><b>Décoration</b></p>
          <FormGroup check>
            <Label check>
              <Input
                type="radio"
                name="radio1"
                defaultChecked={decoration.choice === 'Pas de décoration'}
                onClick={() => this.chooseDecoType({ choice: 'Pas de décoration', price: 0 })}
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
                defaultChecked={decoration.choice === '2 Dimensions'}
                onClick={() => this.chooseDecoType(D2)}
              />
              {' '}
              Image 2D (image en sucre sur le gâteau)
              {' '}
              <b>
                {D2.price}
                €
              </b>
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input
                type="radio"
                name="radio1"
                defaultChecked={decoration.choice === '3 Dimensions'}
                onClick={() => this.chooseDecoType(D3)}
              />
              {' '}
              Décoration 3D (sculpture personnalisée)
              <br />
              <b style={{
                color: 'red',
                fontSize: '0.7em',
              }}
              >
                Prix pour scuplture 3D: variable en fonction de la demande.
              </b>
            </Label>
          </FormGroup>
        </FormGroup>
        {(() => {
          if (decoration.choice === 'Pas de décoration') {
            submitDecoChoice(decoration);
            return <div className="emptyDiv" />;
          }
          submitDecoChoice(decoration);
          return (
            <FormGroup className="uploadImage justify-content">
              <Label for={decoration.choice === '2 Dimensions' ? 'file2D' : 'file3D'}>
                <u>
                  <b>
                    Votre image
                    {' '}
                    {decoration.choice === '2 Dimensions' ? 2 : 3}
                    D
                  </b>
                </u>
              </Label>
              <Input
                type="file"
                name="file"
                id={decoration.choice === '2 Dimensions' ? 'file2D' : 'file3D'}
                maxsize={5242880}
                multiple={false}
                accept="image/*"
                onChange={this.uploadPic}
              />
              {Object.keys(decoration.image).length === 0
                && (decoration.image).constructor !== Object && (
                  <Button
                    onClick={() => this.chooseDecoType(decoration.choice === '2 Dimensions' ? D2 : D3)}
                    size="xsmall"
                  >
                    Supprimer photo
                  </Button>)}
              <FormText color="muted">
                {Object.keys(decoration.image).length === 0
                  && (decoration.image).constructor === Object
                  && decoration.choice === '2 Dimensions' ? 'Veuillez télécharger l’image à imprimer en 2 dimensions'
                  : 'Vous pouvez télécharger une image d’inspiration pour votre décoration 3D'}
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
  choice: PropTypes.string.isRequired,
  image: PropTypes.shape({}).isRequired,
  price: PropTypes.number.isRequired,
  submitDecoChoice: PropTypes.func.isRequired,
};

const mapStatetoProps = state => ({
  D2: state.customizationAdmin.print2D,
  D3: state.customizationAdmin.print3Dimage,
  choice: state.customizationCustomer.decoration.choice,
  image: state.customizationCustomer.decoration.image,
  price: state.customizationCustomer.decoration.price,
});

const mapDispatchToProps = dispatch => ({
  submitDecoChoice: content => dispatch(submitDecorationChoice(content)),
});

export default connect(mapStatetoProps, mapDispatchToProps)(Decoration);
