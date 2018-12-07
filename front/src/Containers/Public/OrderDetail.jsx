import React, { Component } from 'react';
import { Row } from 'reactstrap';
import { connect } from 'react-redux';
import NavArrowsLayout from './Navigation/NavArrowsLayout';
import Progressbar from './Progressbar';
import Confirmation from './confirmation'
import Composition from './Composition';
import Price from './Price';
import CakeInProgress from './CakeInProgress';
import '../../Assets/Styles/OrderDetail.css';



class OrderDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Row className="text-center">
          <Progressbar />
        </Row>
        <Row>
          <Confirmation />
        </Row>
        <NavArrowsLayout />
       
      </div>
    );
  }
}

export default (OrderDetail);
