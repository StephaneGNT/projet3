import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { connect } from 'react-redux';
import changeIndex from '../../Actions/changeIndex';

class NavArrowNext extends Component {
  render() {
    return (
      <div>
          <Button onClick={()=> this.props.changeIndex(1)}>Next</Button>
      </div>
    );
  }
}

const mapStateToProps = (state) => { 
  return {
    dispatch: state.dispatch,
    pageIndex: state.pageIndex,
  };
};

const matchDispatchToProps = (dispatch) => {
  return {
    changeIndex: num => dispatch(changeIndex(num)),
  };
};

export default connect(mapStateToProps, matchDispatchToProps)(NavArrowNext);