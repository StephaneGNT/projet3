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

  compareIndexToLength = (item, index, arr) => {
    const { remove } = this.props;
    if (index + 1 === arr.length) {
      return (
        <Row className="cakeProgressLayout">
          <p>
            <img src={item.img} alt="ingredient" className={item.type} />
          </p>
          <Button size="sm" close onClick={() => remove(item)} />
        </Row>
      );
    }
    return (
      <Row className="cakeProgressLayout">
        <p><img src={item.img} alt="ingredient" /></p>
      </Row>
    );
  }


  render() {
    const { cake } = this.props;
    return (
      <Row className="cakeLayout justify-content-center">
        {cake.ingredients.map((item, index, arr) => this.compareIndexToLength(item, index, arr))}
      </Row>
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
