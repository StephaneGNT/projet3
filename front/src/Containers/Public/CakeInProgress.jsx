import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, Row } from 'reactstrap';
import removeIngredient from '../../Actions/cakeActions/removeIngredient';
import '../../Assets/Styles/CakeInProgress.css';

class CakeInProgress extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  compareIndexToLength = (item, index, arr) => {
    if (index < arr.length) {
      return (
        <div>
          <img src={item.img} alt="ingredient" />
          <p>{item.name}</p>
        </div>
      );
    }
    return (
      <div>
        <img src={item.img} alt="ingredient" />
        <Button close onClick={() => removeIngredient(item)} />
        <p>{item.name}</p>
      </div>
      );
    }
  }

  render() {
    const { cake, removeIngredient } = this.props;
    return (
      <Row className="cakeLayout">
        {cake.ingredients.map((item, index, arr) => this.compareIndexToLength(item, index,arr))}
      </Row>
    );
  }
}


CakeInProgress.propTypes = {
  cake: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  cake: state.cakeCharacteristics,
});

const mapDispatchToProps = dispatch => ({
  removeIngredient: item => dispatch(removeIngredient(item)),
});


export default connect(mapStateToProps, mapDispatchToProps)(CakeInProgress);
