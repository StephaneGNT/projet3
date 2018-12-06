import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { changeIndex } from '../../../Actions/cakeActions/changeIndex';

class NavArrowPrev extends Component {
  translateIndexToRoute = (index, type) => {
    const routes = ['/mycake', '/mycake/composition', '/mycake/customCake', '/mycake/orderDetail', '/mycake/userInfo'];
    if (type === 'cookie' || type === 'macaron') {
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
    return (
      <div class="btn-group">
        <NavLink to={this.translateIndexToRoute(this.props.pageIndex, this.props.type)}>
          <button onClick={() => this.props.changeIndex(-1)} className="btn-prev-next">Previous</button>
        </NavLink>
      </div>
    );
  }
}

const mapStateToProps = (state) => { 
  return {
    dispatch: state.dispatch,
    pageIndex: state.pageIndex,
    type: state.cakeCharacteristics.type,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeIndex: num => dispatch(changeIndex(num)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavArrowPrev);
