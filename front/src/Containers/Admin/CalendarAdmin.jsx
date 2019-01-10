import React, { Component } from 'react';
import Calendar from 'react-calendar';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';

export default class CalendarAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    // this.blockedDate = [new Date(2018, 12)];
    // this.blockedDate[0] = this.blockedDate[0].getTime();
  }

  getTileDisable = (date) => {
    if (this.blockedDate.indexOf(date.date.getTime()) >= 0) return true;
    if (date.date.getDay() === 0) return true;
    return false;
  }

  render() {
    return (
      <Calendar
        // onClickDay={}
        // tileClassName={}
        // tileDisabled={date => this.getTileDisable(date)}
        minDate={new Date()}
      />
    );
  }
}
