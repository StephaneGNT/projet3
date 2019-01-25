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
      default: return (
        <div style={{ fontSize: '17px' }}>
          <p className="mt-3">Construisez facilement et rapidement un gâteau entièrement à votre goût !</p>
          <p>
            1- Sélectionnez le type de gâteaux que vous souhaitez (cookies, macarons, cake,
          cheesecake, etc)
            <br />
            2- Choisissez ensuite votre base, votre ganache et votre glaçage.
            <br />
            3- Ajoutez des gourmandises pour le rendre encore plus unique!
            <br />
            4- À chaque événement son gâteau: embellissez votre création avec une image, ue décoration 3D, ou simplement avec un joli texte personnalisé, pour le rendre parfaitement unique !
          </p>
        </div>
      );
    }
  };

  const { cake } = props;

  return (
    <div className="bg-light p-2" style={{ width: '100%', borderRadius: '9px', fontSize: '17px' }}>
      <h4 className="mt-3 text-center" style={{ color: 'rgba(141, 29, 44, 0.8)' }}>
        <strong>
      Astuces
        </strong>
      </h4>
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
