import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { changeIndex } from '../../../Actions/cakeActions/changeIndex';

class NavArrowPrev extends Component {
  translateIndexToRoute = (index, cakeType) => {
    const routes = ['/mycake', '/mycake/composition', '/mycake/customCake', '/mycake/orderDetail', '/mycake/userInfo'];
    if (cakeType === 'cookie' || cakeType === 'macaron' || cakeType === 'brownie') {
      return routes[index - 2];
    }
    switch (index) {
      case 2: return routes[0];
      case 5: return routes[1];
      case 6: return routes[2];
      case 7: return routes[3];
      default: return routes[1];
    }
  }

  render() {
    const { pageIndex, type, changePageIndex } = this.props;
    return (
      <div>
        <NavLink to={this.translateIndexToRoute(pageIndex, type)}>
          <button type="button" onClick={() => changePageIndex(-1)} className="btn-prev-next">Précédent</button>
        </NavLink>
      </div>
    );
  }
}

NavArrowPrev.propTypes = {
  pageIndex: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  changePageIndex: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  dispatch: state.dispatch,
  pageIndex: state.pageIndex,
  type: state.cakeCharacteristics.type,
});


const mapDispatchToProps = dispatch => ({ changePageIndex: num => dispatch(changeIndex(num)) });


export default connect(mapStateToProps, mapDispatchToProps)(NavArrowPrev);
