import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormGroup, Label, Input } from 'reactstrap';
import comment from '../../../../Actions/cakeActions/changeComment';

const CustomWish = (props) => {
  const { customerComment, changeComment } = props;
  return (
    <FormGroup className="customwish">
      <Label for="exampleText"><u><b>Demande supplémentaire?</b></u></Label>
      <Input type="textarea" name="text" id="exampleText" value={customerComment} onChange={changeComment} />
    </FormGroup>
  );
};

CustomWish.propTypes = {
  customerComment: PropTypes.string.isRequired,
  changeComment: PropTypes.func.isRequired,
};

const mapStatetoProps = state => ({
  customerComment: state.cakeCharacteristics.comment,
});

const mapDispatchToProps = dispatch => ({
  changeComment: e => dispatch(comment(e)),
});

export default connect(mapStatetoProps, mapDispatchToProps)(CustomWish);
