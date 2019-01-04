import React, { Component } from 'react';
import Calendar from 'react-calendar';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import setDeliveryDate from '../../../Actions/orderActions/setDeliveryDate';
import moment from 'moment';

class OrderCalendar extends Component {
  constructor(props) {
    super(props);
    this.blockedDate = [new Date(2018, 12, 15)];
    this.blockedDate[0] = this.blockedDate[0].getTime();
  }

  getTileClassName = (date) => {
    const { cake, order } = this.props;
    const today = new Date();
    const minDate = new Date();
    minDate.setDate(today.getDate() + cake.time);

    let className = [];
    if (date.date <= minDate || date.date.getDay() === 6) className.push('possibleDate');
    if (moment(date.date).isSame(order.delivery_date)) className.push('selectedDate');
    return className;
    // else if (moment(date.date).isSame(order.delivery_date)) className = 'selectedDate';
    // return className;
  }

  getSelectedDate = (date) => {
    const { order } = this.props;
    if(moment(date.date).isSame(order.delivery_date)) console.log(date.date)
    // console.log('calendar date', date.date, 'delivery date', order.delivery_date, 'comparaison', 
    // date.date === order.delivery_date,
    // moment(date.date).isSame(order.delivery_date)
    // );
    let className = '';
    if (moment(date.date).isSame(order.delivery_date)) className = 'selectedDate';
    return className;
  }

  getTileDisable = (date) => {
    if (this.blockedDate.indexOf(date.date.getTime()) >= 0) return true;
    if (date.date.getDay() === 0) return true;
    return false;
  }

  render() {
    const { selectDeliveryDate } = this.props;
    return (
      <Calendar
        onClickDay={date => selectDeliveryDate(date)}
        tileClassName={date => this.getTileClassName(date)}
        tileDisabled={date => this.getTileDisable(date)}
        minDate={new Date()}
      // value={new Date(2019, 01, 16)}
      />
    );
  }
}

OrderCalendar.propTypes = {
  selectDeliveryDate: PropTypes.func.isRequired,
  cake: PropTypes.shape({}).isRequired,
  order: PropTypes.shape({}).isRequired,
};

const mapStateToProps = state => ({
  cake: state.cakeCharacteristics,
  order: state.orderCharacteristics,
});

const mapDispatchToProps = dispatch => ({
  selectDeliveryDate: date => dispatch(setDeliveryDate(date)),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderCalendar);
