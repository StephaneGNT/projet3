import React from 'react';
import { Input } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import changeCakeOccasion from '../../../Actions/cakeActions/changeCakeOccasion';

const CakeOccasion = (props) => {
  const { setOccasion } = props;

  return (
    <Input bsSize="sm" type="select" name="select" onChange={e => setOccasion(e.target.value)}>
      <option />
      <option>Anniversaire d’adulte</option>
      <option>Anniversaire d’enfant</option>
      <option>Apéro</option>
      <option>Baptême</option>
      <option>Babyshower, naissance</option>
      <option>Brunch</option>
      <option>Disney</option>
      <option>Fête des mères</option>
      <option>Fête des pères</option>
      <option>Halloween</option>
      <option>Mariage</option>
      <option>Sport</option>
      <option>Pot de départ</option>
      <option>Noël</option>
      <option>Pâques</option>
      <option>Remerciements</option>
      <option>Enterrement de vie de fille/garçon</option>
    </Input>
  );
};

CakeOccasion.propTypes = {
  setOccasion: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  setOccasion: occasion => dispatch(changeCakeOccasion(occasion)),
});

export default connect(null, mapDispatchToProps)(CakeOccasion);
