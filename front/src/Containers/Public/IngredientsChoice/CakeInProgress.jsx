import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
<<<<<<< HEAD
import { Button, Row, Col } from 'reactstrap';
import removeIngredient from '../../../Actions/cakeActions/removeIngredient';
import '../../../Assets/Styles/CakeInProgress.css';

class CakeInProgress extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  displayToppings = (item, index, arr) => {
    const { remove } = this.props;
    if (index + 1 === arr.length) {
      return (
        <Row key={item.name} className="cakeProgressLayout">
          <p>
            <img src={item.image} alt="ingredient" className="toppingsLayout" />
          </p>
=======
import { Button, Row } from 'reactstrap';
import Ingredient from './IngrededientCakeInProgress';
import removeIngredient from '../../../Actions/cakeActions/removeIngredient';
import '../../../Assets/Styles/CakeInProgress.css';

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
>>>>>>> dev
          <Button size="sm" close onClick={() => remove(item)} />
        </Row>
      );
    }
    return (
      <Row className="cakeProgressLayout">
<<<<<<< HEAD
        <p><img src={item.image} alt="ingredient" className="toppingsLayout" /></p>
=======
        <Ingredient image={item.image} cakeLayoutType={x => x} />
>>>>>>> dev
      </Row>
    );
  };

<<<<<<< HEAD
  compareIndexToLength = (item, index, arr) => {
    const { remove } = this.props;
    if (index + 1 === arr.length) {
      // const cakeLayoutType = () => {
      //   switch (item.type) {
      //     case 'Garniture': return 'fillingLayout';
      //     case 'Toppings': return 'toppingsLayout';
      //     case 'Glaçage': return 'icingsLayout';
      //     default: return null;
      //   }
      // };
      return (
        <Row key={item.name} className="cakeProgressLayout">
          <p>
            <img src={item.image} alt="ingredient" />
          </p>
          <Button size="sm" close onClick={() => remove(item)} />
        </Row>
      );
    }
    return (
      <Row className="cakeProgressLayout">
        <p><img src={item.image} alt="ingredient" /></p>
      </Row>
    );
  }

  displayNamesIngredients = item => (
=======
  const displayNamesIngredients = item => (
>>>>>>> dev
    <Row key={item.name}>
      <p>
        {item.type}
        :
      </p>
      <p>{item.name}</p>
    </Row>
  );
<<<<<<< HEAD


  render() {
    const { cake } = this.props;
    return (
      <div style={{ position: 'sticky', top: '0vh' }}>
        <Row className="toppingsCakeLayout">
          {cake.ingredients
            .filter(
              type => type.type === 'Toppings',
            )
            .map((item, index, arr) => this.displayToppings(item, index, arr))}
        </Row>
        <Row className="cakeLayout">
          {cake.ingredients
            .filter(
              type => type.type !== 'Toppings',
            )
            .map((item, index, arr) => this.compareIndexToLength(item, index, arr))}
        </Row>
        <Row className="namesLayout">
          {cake.ingredients.map(item => this.displayNamesIngredients(item))}
        </Row>
      </div>
    );
  }
=======

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
>>>>>>> dev
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
