import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TipsCake from './TipsCake';
import TipsCheesecake from './TipsCheesecake';
import TipsCookie from './TipsCookie';
import TipsMacaron from './TipsMacaron';
import TipsBrownie from './TipsBrownie';
import '../../../../Assets/Styles/Public.css';


const Tips = (props) => {
  const renderTips = (cakeType) => {
    switch (cakeType) {
      case 'cake': return <TipsCake />;
      case 'cheesecake': return <TipsCheesecake />;
      case 'cookie': return <TipsCookie />;
      case 'macaron': return <TipsMacaron />;
      case 'brownie': return <TipsBrownie />;
      default: return (
        <div style={{ }}>
          <p className="mt-3">Construisez facilement et rapidement un gâteau entièrement à votre goût !</p>
          <p>
            <strong style={{ color: 'rgba(141, 29, 44, 0.8)' }}>1- </strong>
            Sélectionnez le type de gâteaux que vous souhaitez (cookies, macarons, cake,
          cheesecake, brownie)
            <br />
            <strong style={{ color: 'rgba(141, 29, 44, 0.8)' }}>2- </strong>
            Choisissez ensuite votre base, votre ganache et votre glaçage.
            <br />
            <strong style={{ color: 'rgba(141, 29, 44, 0.8)' }}>3- </strong>
            Ajoutez des gourmandises pour le rendre encore meilleur !
            <br />
            <strong style={{ color: 'rgba(141, 29, 44, 0.8)' }}>4- </strong>
            À chaque événement son gâteau: embellissez votre création
             avec une image, une décoration 3D, ou simplement avec un joli
             texte personnalisé, pour le rendre parfaitement unique !
          </p>
        </div>
      );
    }
  };

  const { cake } = props;

  return (
    <div className="body-tips">
      <div className="title-tips">astuces</div>
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
