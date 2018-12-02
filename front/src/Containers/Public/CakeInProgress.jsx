import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../Assets/Styles/CakeInProgress.css';

class CakeInProgress extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log('in CakeInProgress', this.props.ingredients);
    return (
      <div className="cakeLayout">
        <p>
          {this.props.cake.ingredients.map((item) => {
            return (<div>
              <img src={item.img} alt="ingredient" />
              <p>{item.name}</p>
            </div>
            );
          })}
        </p>
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
