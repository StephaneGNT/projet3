import React, { Component } from 'react';
import NavArrowsLayout from './Navigation/NavArrowsLayout';

class UserInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
         UserInfo
        <NavArrowsLayout />
      </div>
    );
  }
}

export default UserInfo;