import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row } from 'reactstrap';
import PropTypes from 'prop-types';
import NavArrowsLayout from '../Navigation/NavArrowsLayout';

class IngredientsButtons extends Component {
  renderButton = (index, cake) => {
    let render;
    return render;
  };

  render() {
    const { index, cake } = this.props;
    return (
      <Row className="back-btn">
        <button type="button" className="order-btn">Commander</button>
        {this.renderButton(index, cake)}
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

export default connect(mapStateToProps, null)(IngredientsButtons);
