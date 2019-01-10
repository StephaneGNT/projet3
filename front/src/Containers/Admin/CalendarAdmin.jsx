import React, { Component } from 'react';
import Calendar from 'react-calendar';
import { Button, ButtonGroup } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { insertAvailabilityDate, removeAvailabilityDate } from '../../Actions/calendar_admin_actions';
import { checkDateMatch } from './CheckDateMatch';
import '../../Assets/Styles/CalendarAdmin.css';

class CalendarAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orangeActive: false,
      redActive: false,
    };
  }

  chooseButton = (color) => {
    const { redActive, orangeActive } = this.state;
    if (!redActive && !orangeActive) this.setState(prevState => ({ [color]: !prevState[color] }));
    else if (this.state[color]) return null;
    else {
      this.setState(prevState => ({
        orangeActive: !prevState.orangeActive,
        redActive: !prevState.redActive,
      }));
    }
  }

  setDateAvailability = (date) => {
    const { insertDate, removeDate, orange, red } = this.props;
    const { redActive, orangeActive } = this.state;
    if (redActive && !checkDateMatch(red, date) && !checkDateMatch(orange, date)) insertDate(date, 'redDate');
    else if (redActive && !checkDateMatch(red, date) && checkDateMatch(orange, date)) alert('Veuillez d’abord supprimer la date orange');
    else if (redActive && checkDateMatch(red, date)) removeDate(date, 'redDate');
    else if (orangeActive && !checkDateMatch(orange, date) && !checkDateMatch(red, date)) insertDate(date, 'orangeDate');
    else if (orangeActive && !checkDateMatch(orange, date) && checkDateMatch(red, date)) alert('Veuillez d’abord supprimer la date rouge');
    else if (orangeActive && checkDateMatch(orange, date)) removeDate(date, 'orangeDate');
    else alert('Veuillez d’abord choisir une couleur');
  }

  setTileClasses = (tiles) => {
    const { orange, red } = this.props;
    const classes = [];
    orange.filter(or => (moment(tiles.date).isSame(or))).map(ange => ange === classes.push('orangeTile'));
    red.filter(r => (moment(tiles.date).isSame(r))).map(ed => ed === classes.push('redTile'));
    return classes;
  };

  disableTile = (date) => {
    if (date.date.getDay() === 0) return true;
    return false;
  }

  render() {
    const { orangeActive, redActive } = this.state;
    return (
      <div>
        <ButtonGroup>
          <Button className={orangeActive && 'activeButton'} onClick={() => this.chooseButton('orangeActive')} color="warning">Dates oranges</Button>
          <Button className={redActive && 'activeButton'} onClick={() => this.chooseButton('redActive')} color="danger">Dates rouges</Button>
        </ButtonGroup>
        <Calendar
          onClickDay={date => this.setDateAvailability(date)}
          tileClassName={date => this.setTileClasses(date)}
          tileDisabled={date => this.disableTile(date)}
          minDate={new Date()}
        />
        <Link to="/mycake/orderDetail">
          <Button>To customer calendar</Button>
        </Link>
      </div>
    );
  }
}

CalendarAdmin.propTypes = {
  insertDate: PropTypes.func.isRequired,
  removeDate: PropTypes.func.isRequired,
  orange: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  red: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

const mapStateToProps = state => ({
  orange: state.calendarAdmin.orangeDate,
  red: state.calendarAdmin.redDate,
});

const mapDispatchToProps = dispatch => ({
  insertDate: (date, color) => dispatch(insertAvailabilityDate(date, color)),
  removeDate: (date, color) => dispatch(removeAvailabilityDate(date, color)),

});

export default connect(mapStateToProps, mapDispatchToProps)(CalendarAdmin);
