import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, Row } from 'reactstrap';
import Ingredient from './IngrededientCakeInProgress';
import removeIngredient from '../../../Actions/cakeActions/removeIngredient';

const CakeInProgress = (props) => {
  const compareIndexToLength = (item, index, arr) => {
    const { remove } = props;
    if (index + 1 === arr.length) {
      const cakeLayoutType = (type) => {
        switch (type) {
          case 'Garniture': return 'fillingLayout';
          case 'Toppings': return 'toppingsLayout';
          case 'Glaçage': return 'icingsLayout';
          default: return null;
        }
      };
      const design = cakeLayoutType(item.type);
      return (
        <Row key={item.name} className="cakeProgressLayout">
          <Ingredient image={item.image} type={item.type} design={design} />
          <Button size="sm" close onClick={() => remove(item)} />
        </Row>
      );
    }
    return (
      <Row className="cakeProgressLayout">
        <Ingredient image={item.image} cakeLayoutType={x => x} />
      </Row>
    );
  };

  const displayNamesIngredients = item => (
    <Row key={item.name}>
      {item.type === 'Base'
        ? <span />
        : (
          <p>
            {item.type}
            :
          </p>
        )
      }
      <p>{item.name}</p>
    </Row>
  );

  const { cake } = props;
  return (
    <div>
      <Row className="cakeLayout">
        {cake.ingredients.map((item, index, arr) => compareIndexToLength(item, index, arr))}
      </Row>
      <Row className="namesLayout">
        {cake.ingredients.map(item => displayNamesIngredients(item))}
      </Row>
    </div>
  );
}


CakeInProgress.propTypes = {
  cake: PropTypes.shape({}).isRequired,
  remove: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  cake: state.cakeCharacteristics,
});

const mapDispatchToProps = dispatch => ({
  remove: item => dispatch(removeIngredient(item)),
});


export default connect(mapStateToProps, mapDispatchToProps)(CakeInProgress);
