import React, { Component } from 'react';
import '../../Assets/Styles/Price.css';

class Price extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="body">
        <div>PRICE:</div>
        <div className="box" >
          {this.props.amount}€
    </div>
      </div>
    );
  }
}

export default Price;
