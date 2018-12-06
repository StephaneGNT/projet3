import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../Assets/Styles/CakeInProgress.css';

class CakeInProgress extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="cakeLayout">
        {this.props.cake.ingredients.map(item => (
          <div>
            <img src={item.img} alt="ingredient" />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cake: state.cakeCharacteristics,
});

export default connect(mapStateToProps)(CakeInProgress);
