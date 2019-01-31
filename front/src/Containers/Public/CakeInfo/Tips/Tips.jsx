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
        <div>
          <p>
            <strong>1. </strong>
            Sélectionnez le type de gâteaux que vous souhaitez.
            <br />
            <strong>2. </strong>
            Choisissez ensuite votre base, votre ganache et votre glaçage.
            <br />
            <strong>3. </strong>
            Ajoutez des gourmandises pour le rendre encore meilleur !
            <br />
            <strong>4. </strong>
            À chaque événement son gâteau: embellissez votre création
             avec une image, une décoration 3D, ou avec un
             texte personnalisé !
          </p>
        </div>
      );
    }
  };

  const { cake } = props;

  return (
    <div className="body-tips">
      <div className="title-tips">Les petites astuces</div>
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
