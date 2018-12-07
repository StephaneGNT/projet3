import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, Row } from 'reactstrap';
import removeIngredient from '../../../Actions/cakeActions/removeIngredient';
import '../../../Assets/Styles/CakeInProgress.css';

class CakeInProgress extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { cake, removeIngredientFromCake } = this.props;
    return (
      <Row className="cakeLayout">
        {
          cake.ingredients.map(item => (
            <div>
              <div><img src={item.img} alt="ingredient" /></div>
              <Button close onClick={() => removeIngredientFromCake(item)} />
              <p>{item.name}</p>
            </div>
          ))}
      </Row>
    );
  }
}

CakeInProgress.propTypes = {
  cake: PropTypes.string.isRequired,
  removeIngredientFromCake: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  cake: state.cakeCharacteristics,
});

const mapDispatchToProps = dispatch => ({
  removeIngredientFromCake: item => dispatch(removeIngredient(item)),
});


export default connect(mapStateToProps, mapDispatchToProps)(CakeInProgress);
