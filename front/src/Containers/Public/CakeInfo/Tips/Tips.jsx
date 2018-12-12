import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TipsCake from './TipsCake';
import TipsCheesecake from './TipsCheesecake';
import TipsCookie from './TipsCookie';
import TipsMacaron from './TipsMacaron';
import TipsBrownie from './TipsBrownie';

const Tips = (props) => {
  const renderTips = (cakeType) => {
    switch (cakeType) {
      case 'cake': return <TipsCake />;
      case 'cheesecake': return <TipsCheesecake />;
      case 'cookie': return <TipsCookie />;
      case 'macaron': return <TipsMacaron />;
      case 'brownie': return <TipsBrownie />;
      default: return <p className="mt-3"> Choisissez votre type de pâtisserie </p>;
    }
  };

  const { cake } = props;

  return (
    <div className="bg-light p-2" style={{ width: '100%' }}>
      <h5 className="mt-3 text-center">Tips</h5>
      {renderTips(cake.type)}
    </div>
  );
};

Tips.propTypes = {
  cake: PropTypes.shape({}).isRequired,
};

const mapStateToProps = state => ({
  cake: state.cakeCharacteristics,
});

export default connect(mapStateToProps, null)(Tips);
