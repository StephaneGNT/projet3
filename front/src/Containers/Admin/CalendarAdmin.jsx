import React, { Component } from 'react';
import Calendar from 'react-calendar';
import { Button, ButtonGroup } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { fetchDatesInDB } from '../../Actions/calendar_admin_actions';
import { getDateID, checkDateMatch } from './CheckDateMatch';
import '../../Assets/Styles/CalendarAdmin.css';

class CalendarAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orangeDate: false,
      redDate: false,
      lastClicked: '',
    };
  }

  componentWillMount() {
    const { getDatesInDB } = this.props;
    getDatesInDB();
  }

  chooseButton = (color) => {
    const { redDate, orangeDate } = this.state;
    this.setState({ lastClicked: color })
    if (!redDate && !orangeDate) this.setState(prevState => ({ [color]: !prevState[color] }));
    else if (this.state[color]) return null;
    else {
      this.setState(prevState => ({
        orangeDate: !prevState.orangeDate,
        redDate: !prevState.redDate,
      }));
    }
  }

  addDate = (date, color) => {
    const { getDatesInDB } = this.props;
    axios.post('/calendar/adddate', { date, color })
      .then(function (response) {
        response.data === 'OK' && getDatesInDB();
      })
    // .catch(function (error) {
    //   console.log(error);
    // });
    // alert(`Police "${name}" ajoutée`)
    // } else alert('Vous avez déjà ajouté cette police');
  }

  removeDate = (id) => {
    const { getDatesInDB } = this.props;
    axios.delete(`/calendar/deletedate/${id}`)
    .then(function (response) {
      console.log(response);
      response.data === 'OK' && getDatesInDB();
    })
    // .catch(function (error) {
    //   console.log(error);
    // });
  }

  setDateAvailability = (date, activeColor) => {
    const { calendar } = this.props;
    const { lastClicked } = this.state;
    const id = getDateID(calendar, date);
    if (checkDateMatch(calendar.map(c => c.date), date)) this.removeDate(id);
    else if (lastClicked === '') alert('Veuillez d’abord choisir une couleur');
    else this.addDate(date, [activeColor]);
  }

  setTileClasses = (tiles) => {
    const { calendar } = this.props;
    const classes = [];
    calendar.filter(am => (moment(tiles.date).isSame(am.date)))
      .map(aj => aj === classes.push(aj.color));
    return classes;
  };

  disableTile = (date) => {
    if (date.date.getDay() === 0) return true;
    return false;
  }

  render() {
    const { redDate, orangeDate, lastClicked } = this.state;
    return (
      <div>
        <ButtonGroup>
          <Button className={orangeDate && 'activeButton'} onClick={() => this.chooseButton('orangeDate')} color="warning">Dates oranges</Button>
          <Button className={redDate && 'activeButton'} onClick={() => this.chooseButton('redDate')} color="danger">Dates rouges</Button>
        </ButtonGroup>
        <Calendar
          onClickDay={date => this.setDateAvailability(date, lastClicked)}
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
  getDatesInDB: PropTypes.func.isRequired,
  calendar: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

const mapStateToProps = state => ({
  calendar: state.calendarAdmin.masterCalendar,
});

const mapDispatchToProps = dispatch => ({
  getDatesInDB: () => dispatch(fetchDatesInDB()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CalendarAdmin);
