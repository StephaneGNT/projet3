import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row } from 'reactstrap';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import NavArrowsLayout from '../Navigation/NavArrowsLayout';
import { updateIndex } from '../../../Actions/cakeActions/changeIndex';

import '../../../Assets/Styles/IngredientsButtons.css';

class IngredientsButtons extends Component {

  redirect = () => {
    console.log("bouton cliqué")
    return <Redirect to="/admin/customCake" />
  };

  render() {
    const { index, cake } = this.props;
    const disabled = !cake.ingredients.length > 0;
    return (
      <Row className="back-btn">
        <button type="button" className="order-btn" onClick={() => this.redirect()}>
          Test
        </button>
        <NavArrowsLayout />
      </Row>
    );
  }
}

IngredientsButtons.propTypes = {
  index: PropTypes.number.isRequired,
  cake: PropTypes.shape({}).isRequired,
};

const mapStateToProps = state => ({
  cake: state.cakeCharacteristics,
});

const mapDispatchToProps = dispatch => ({
  setPageIndex: index => dispatch(updateIndex(index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(IngredientsButtons);
