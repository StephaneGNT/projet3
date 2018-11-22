import React, { Component } from 'react';
import NavArrowsLayout from './NavArrowsLayout';

export default class UserInfo extends Component {
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
