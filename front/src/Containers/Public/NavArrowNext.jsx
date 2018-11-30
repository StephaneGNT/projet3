import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { changeIndex } from '../../Actions/changeIndex';


class NavArrowNext extends Component {
  translateIndexToRoute = (index) => {
    const routes = ['/mycake', '/mycake/composition', '/mycake/customCake', '/mycake/orderDetail', '/mycake/userInfo'];
    if (this.props.type === 'cookie' || this.props.type === 'macaron') {
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
    return (
      <div>
        <NavLink to={this.translateIndexToRoute(this.props.pageIndex)}>
          <Button onClick={() => this.props.changeIndex(1)} className="btn-info">
            Next
            {this.pageIndex}
          </Button>
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

const matchDispatchToProps = (dispatch) => {
  return {
    changeIndex: num => dispatch(changeIndex(num)),
  };
};

export default connect(mapStateToProps, matchDispatchToProps)(NavArrowNext);