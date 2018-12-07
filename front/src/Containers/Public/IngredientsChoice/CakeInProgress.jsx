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

  compareIndexToLength = (item, index, arr) => {
    const { remove } = this.props;
    if (index + 1 === arr.length) {
      return (
        <div>
          <img src={item.img} alt="ingredient" />
          <Button close onClick={() => remove(item)} />
          <p>{item.name}</p>
        </div>
      );
    }
    return (
      <div>
        <img src={item.img} alt="ingredient" />
        <p>{item.name}</p>
      </div>
    );
  }


  render() {
    const { cake } = this.props;
    return (
      <Row className="cakeLayout">
        {cake.ingredients.map((item, index, arr) => this.compareIndexToLength(item, index, arr))}
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
  remove: item => dispatch(removeIngredient(item)),
});


export default connect(mapStateToProps, mapDispatchToProps)(CakeInProgress);
