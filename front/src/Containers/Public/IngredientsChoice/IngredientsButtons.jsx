import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row } from 'reactstrap';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import NavArrowsLayout from '../Navigation/NavArrowsLayout';
import { updateIndex } from '../../../Actions/cakeActions/changeIndex';

import '../../../Assets/Styles/IngredientsButtons.css';

class IngredientsButtons extends Component {
  // constructor(props){
  //   super(props);
  // }

  redirect = (cake) => {
    const { history, setPageIndex } = this.props;
    if (cake.type === 'cake' || cake.type === 'cheesecake') setPageIndex(5);
    else setPageIndex(3);
    history.push(`${process.env.PUBLIC_URL}/mycake/customCake`);
    // return <Redirect to="/myCake/customCake" />;
  };

  render() {
    // const { cake } = this.props;
    // const disabled = !cake.ingredients.length > 0;
    return (
      <Row className="back-btn">
        {/* <button type="button" disabled={disabled} style={{ zIndex: '10' }} className="order-btn" onClick={() => this.redirect(cake)}>
          Commander
        </button> */}
        <NavArrowsLayout />
      </Row>
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
