import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { changeIndex } from '../../../Actions/cakeActions/changeIndex';

class NavArrowNext extends Component {
  translateIndexToRoute = (index, cakeType) => {
    const routes = [`${process.env.PUBLIC_URL}/mycake`, `${process.env.PUBLIC_URL}/mycake/composition`, `${process.env.PUBLIC_URL}/mycake/customCake`, `${process.env.PUBLIC_URL}/mycake/orderDetail`, `${process.env.PUBLIC_URL}/mycake/userInfo`];
    if (cakeType === 'cookie' || cakeType === 'macaron' || cakeType === 'brownie') {
      return routes[index];
    }
    switch (index) {
      case 1: return routes[1];
      case 4: return routes[2];
      case 5: return routes[3];
      case 6: return routes[4];
      default: return routes[1];
    }
  }

  render() {
    const {
      pageIndex,
      type,
      disabled,
      changePageIndex,
    } = this.props;

    return (
      <div>
        <NavLink to={this.translateIndexToRoute(pageIndex, type)}>
          <button disabled={disabled} type="button" onClick={() => changePageIndex(1)} className="btn-prev-next">
            Suivant
            {/* {this.pageIndex} */}
          </button>
        </NavLink>
      </div>
    );
  }
}

NavArrowNext.propTypes = {
  pageIndex: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  changePageIndex: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  dispatch: state.dispatch,
  pageIndex: state.pageIndex,
  type: state.cakeCharacteristics.type,
});

const matchDispatchToProps = dispatch => ({ changePageIndex: num => dispatch(changeIndex(num)) });


export default connect(mapStateToProps, matchDispatchToProps)(NavArrowNext);
