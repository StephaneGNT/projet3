import React, { Component } from 'react';
import Calendar from 'react-calendar';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';
import { checkDateMatch } from '../../Admin/CheckDateMatch';
import setDeliveryDate from '../../../Actions/orderActions/setDeliveryDate';
import { fetchDatesInDB } from '../../../Actions/calendar_admin_actions';

class OrderCalendar extends Component {
  // constructor(props) {
  //   super(props);
  //   this.blockedDate = [new Date(2018, 12, 15)];
  //   this.blockedDate[0] = this.blockedDate[0].getTime();
  // }

  componentWillMount() {
    const { getDatesInDB } = this.props;
    getDatesInDB();
  }

  getTileClassName = (date) => {
    const { cake, order, calendar } = this.props;
    const today = new Date();
    const minDate = new Date();
    minDate.setDate(today.getDate() + cake.time);
    const className = [];
    calendar.filter(am => (moment(date.date).isSame(am.date)) && am.color === 'orangeDate')
      .map(aj => aj === className.push('possibleDate'));
    if ((date.date <= minDate || date.date.getDay() === 6)) className.push('possibleDate');
    if (moment(date.date).isSame(order.delivery_date)) className.push('selectedDate');
    return className;
  }

  getTileDisable = (date) => {
    const { calendar } = this.props;
    // if (this.blockedDate.indexOf(date.date.getTime()) >= 0) return true;
    if (checkDateMatch((calendar.filter(c => c.color === 'redDate')
      .map(c => c.date)), date.date)) return true;
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
  getDatesInDB: PropTypes.func.isRequired,
  cake: PropTypes.shape({}).isRequired,
  order: PropTypes.shape({}).isRequired,
  calendar: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

const mapStateToProps = state => ({
  cake: state.cakeCharacteristics,
  order: state.orderCharacteristics,
  calendar: state.calendarAdmin.masterCalendar,
});

const mapDispatchToProps = dispatch => ({
  getDatesInDB: () => dispatch(fetchDatesInDB()),
  selectDeliveryDate: date => dispatch(setDeliveryDate(date)),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderCalendar);
