import React, { Component } from 'react';
import Calendar from 'react-calendar';
import { connect } from 'react-redux';
import selectDeliveryDate from '../../../Actions/orderActions/setDeliveryDate';

class OrderCalendar extends Component {
  constructor(props){
    super(props);
    this.blockedDate = [new Date(2018, 12, 15)];
    this.blockedDate[0] = this.blockedDate[0].getTime();
  }

  getTileClassName = (date) => {
    const today = new Date();
    const minDate = new Date();
    minDate.setDate(today.getDate()+this.props.cake.time);

    if (date.date <= minDate) return 'possibleDate';
    if (this.blockedDate.indexOf(date.date.getTime()) >= 0) return 'forbiddenDate';
  }

  getTileDisable = (date) => {
    if (this.blockedDate.indexOf(date.date.getTime()) >= 0) return true;
    if (date.date.getDay() === 0 || date.date.getDay() === 6) return true;
    return false;
  }

  render() {
    return (
      <Calendar
        onClickDay={date => this.props.selectDeliveryDate(date)}
        tileClassName={date => this.getTileClassName(date)}
        tileDisabled={date => this.getTileDisable(date)}
        minDate={new Date()}
      />
    )
  }
}

const mapStateToProps = state => ({
  cake: state.cakeCharacteristics,
  order: state.orderCharacteristics,
});

const mapDispatchToProps = dispatch => ({
  selectDeliveryDate: date => dispatch(selectDeliveryDate(date)),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderCalendar);
