import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import NavArrowsLayout from '../Navigation/NavArrowsLayout';
import { updateIndex } from '../../../Actions/cakeActions/changeIndex';

import '../../../Assets/Styles/IngredientsButtons.css';

class IngredientsButtons extends Component {
  redirect = (cake) => {
    const { history, setPageIndex } = this.props;
    if (cake.type === 'cake' || cake.type === 'cheesecake') setPageIndex(5);
    else setPageIndex(3);
    history.push(`${process.env.PUBLIC_URL}/mycake/customCake`);
    // return <Redirect to="/myCake/customCake" />;
  };

  render() {
    return (
      <div className="back-btn">
        <NavArrowsLayout />
      </div>
    );
  }
}

IngredientsButtons.propTypes = {
  cake: PropTypes.shape({}).isRequired,
  setPageIndex: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  cake: state.cakeCharacteristics,
});

const mapDispatchToProps = dispatch => ({
  setPageIndex: index => dispatch(updateIndex(index)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(IngredientsButtons));
