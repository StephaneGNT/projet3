import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Row } from 'reactstrap';
import Ingredient from '../IngredientsChoice/IngrededientCakeInProgress';
import '../../../Assets/Styles/CakeInProgress.css';

const CakeImage = (props) => {
  const { cake } = props;
  const compareIndexToLength = (item, index, arr) => {
    if (index + 1 === arr.length) {
      const cakeLayoutType = () => {
        switch (item.type) {
          case 'Toppings': return 'toppingsLayout';
          case 'Glaçage': return 'icingsLayout';
          default: return null;
        }
      };
      const design = cakeLayoutType(item.type);
      return (
        <Row key={item.name} className="cakeProgressLayout">
          <Ingredient image={item.image} type={item.type} design={design} />
        </Row>
      );
    }
    return (
      <Row className="cakeProgressLayout">
        <Ingredient image={item.image} cakeLayoutType={x => x} />
      </Row>
    );
  };
  return (
    <div>
      <Row className="cakeLayout justify-content-center">
        {cake.ingredients.map((item, index, arr) => compareIndexToLength(item, index, arr))}
      </Row>
    </div>
  );
};

CakeImage.propTypes = {
  cake: PropTypes.shape({}).isRequired,
};

const mapStateToProps = state => ({
  cake: state.cakeCharacteristics,
});


export default connect(mapStateToProps, null)(CakeImage);
