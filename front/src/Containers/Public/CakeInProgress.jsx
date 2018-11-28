import React, { Component } from 'react';
import { connect } from 'react-redux';

class CakeInProgress extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div style={{ border: '10px solid black', height: '600px' }}>
        
        <p>{this.props.cake.ingredients.map((item) => {
          return <div><img src={item.img} alt='ingredient'/><p>{item.name}</p></div>})}</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return (
    {
      cake: state.cakeCharacteristics,
    }
  );
};

export default connect(mapStateToProps)(CakeInProgress);
