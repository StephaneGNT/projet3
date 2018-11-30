import React, { Component } from 'react';
import { Row } from 'reactstrap';
import NavArrowsLayout from './NavArrowsLayout';
import Progressbar from './Progressbar';

class UserInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Row>
          <Progressbar />
        </Row>
        UserInfo
        <NavArrowsLayout />
      </div>
    );
  }
}

export default UserInfo;