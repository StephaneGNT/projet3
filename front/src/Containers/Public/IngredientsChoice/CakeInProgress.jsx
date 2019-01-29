import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
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
          <Button size="sm" close onClick={() => remove(item)} />
        </Row>
      );
    }
    return (
      <Row className="cakeProgressLayout">
        <p><img src={item.image} alt="ingredient" className="toppingsLayout" /></p>
      </Row>
    );
  }

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
    <Row key={item.name}>
      <p>
        {item.type}
        :
      </p>
      <p>{item.name}</p>
    </Row>
  );


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
