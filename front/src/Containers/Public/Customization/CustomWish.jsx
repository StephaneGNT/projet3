import React from 'react';
import { FormGroup, Label, Input } from 'reactstrap';

const CustomWish = () => (
  <FormGroup className="customwish">
    <Label for="exampleText"><u><b>Demande supplémentaire?</b></u></Label>
    <Input type="textarea" name="text" id="exampleText" />
  </FormGroup>
);

export default CustomWish;
