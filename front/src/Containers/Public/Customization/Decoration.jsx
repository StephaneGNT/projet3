import React from 'react';
import { connect } from 'react-redux';
import {
  FormGroup,
  FormText,
  Label,
  Input,
} from 'reactstrap';
import { chooseDecorationType } from '../../../Actions/customization_actions';

const Decoration = (props) => {
  const { decorationChoice, chooseDecoType } = props;
  return (
    <div>
      <FormGroup tag="fieldset">
        <legend>Décoration</legend>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="radio1" onClick={() => chooseDecoType(null)} />
            {' '}
            Pas de décoration personnalisée sur le gâteau
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="radio1" onClick={() => chooseDecoType('2D')} />
            {' '}
            Image 2D (image en sucre sur le gâteau)
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="radio1" onClick={() => chooseDecoType('3D')} />
            {' '}
            Décoration 3D (sculpture personnalisée)
          </Label>
        </FormGroup>
      </FormGroup>
      {
        decorationChoice === null ? <div className="emptyDiv"><br></br><br></br><br></br></div> : decorationChoice === "2D" ?
          <FormGroup className="uploadImage justify-content">
            <Label for="file2D"><u><b>Votre image 2D</b></u></Label>
            <Input type="file" name="file" id="file2D" />
            <FormText color="muted">
              Veuillez télécharger l’image à imprimer en 2D
                  </FormText>
          </FormGroup>
          :
          <FormGroup className="uploadImage justify-content">
            <Label for="file3D"><u><b>Décoration 3D</b></u></Label>
            <Input type="file" name="file" id="file3D" />
            <FormText color="muted">
              Vous pouvez télécharger une image d’exemple
                  </FormText>
          </FormGroup>
      }
    </div>
  );
};

const mapStatetoProps = state => ({
  decorationChoice: state.customization.decorationChoice,
});

const mapDispatchToProps = dispatch => ({
  chooseDecoType: dimension => dispatch(chooseDecorationType(dimension)),
});

export default connect(mapStatetoProps, mapDispatchToProps)(Decoration);
