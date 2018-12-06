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
    const { cake, removeIngredient } = this.props;
    return (
      <Row className="cakeLayout">
        {
          cake.ingredients.map(item => (
            <div>
              <div><img src={item.img} alt="ingredient" /></div>
              <Button close onClick={() => removeIngredient(item)} />
              <p>{item.name}</p>
            </div>
          ))}
      </Row>
    );
  }
}

CakeInProgress.propTypes = {
  cake: PropTypes.string.isRequired,
  // removeIngredient: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  cake: state.cakeCharacteristics,
});

const mapDispatchToProps = dispatch => ({
  removeIngredient: item => dispatch(removeIngredient(item)),
});


export default connect(mapStateToProps, mapDispatchToProps)(CakeInProgress);
