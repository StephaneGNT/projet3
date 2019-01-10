import React, { Component } from 'react';
import Calendar from 'react-calendar';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';
import { checkDateMatch } from '../../Admin/CheckDateMatch';
import setDeliveryDate from '../../../Actions/orderActions/setDeliveryDate';

class OrderCalendar extends Component {
  // constructor(props) {
  //   super(props);
  //   this.blockedDate = [new Date(2018, 12, 15)];
  //   this.blockedDate[0] = this.blockedDate[0].getTime();
  // }

  getTileClassName = (date) => {
    const { cake, order, orangeDate } = this.props;
    const today = new Date();
    const minDate = new Date();
    minDate.setDate(today.getDate() + cake.time);
    const className = [];
    if ((date.date <= minDate || date.date.getDay() === 6)
    || checkDateMatch(orangeDate, date.date)) className.push('possibleDate');
    if (moment(date.date).isSame(order.delivery_date)) className.push('selectedDate');
    return className;
  }

  getTileDisable = (date) => {
    const { redDate } = this.props;
    if (checkDateMatch(redDate, date.date)) return true;
    // if (this.blockedDate.indexOf(date.date.getTime()) >= 0) return true;
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
      />
    );
  }
}

OrderCalendar.propTypes = {
  selectDeliveryDate: PropTypes.func.isRequired,
  cake: PropTypes.shape({}).isRequired,
  order: PropTypes.shape({}).isRequired,
  orangeDate: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  redDate: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

const mapStateToProps = state => ({
  cake: state.cakeCharacteristics,
  order: state.orderCharacteristics,
  orangeDate: state.calendarAdmin.orangeDate,
  redDate: state.calendarAdmin.redDate,
});

const mapDispatchToProps = dispatch => ({
  selectDeliveryDate: date => dispatch(setDeliveryDate(date)),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderCalendar);
