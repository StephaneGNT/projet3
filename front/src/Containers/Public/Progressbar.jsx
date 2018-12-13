import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { updateIndex } from '../../Actions/cakeActions/changeIndex';
import '../../Assets/Styles/ProgressBar.css';


class Progressbar extends Component {
  createProgressElements = (type, nbActive) => {
    const { indexUpdate } = this.props;
    const routes = (type === 'cake' || type === 'cheesecake') ? ['/mycake/composition', '/mycake/composition', '/mycake/composition', '/mycake/customCake', '/mycake/orderDetail', '/mycake/userInfo'] : ['/mycake/composition', '/mycake/customCake', '/mycake/orderDetail', '/mycake/userInfo'];
    const stepNames = (type === 'cake' || type === 'cheesecake') ? ['Base', 'Glacage & Garniture', 'Toppings', 'Personnalisation', 'Order Details', 'Client Information'] : ['Base', 'Personnalisation', 'Order Details', 'Client Information'];
    let countActive = nbActive;
    return routes.map((route, index) => {
      countActive -= 1;
      if (countActive <= 0) {
        return (
          <li className="text-center" key={index}>
            <NavLink to={route} onClick={() => indexUpdate(index + 2)}>
              {stepNames[index]}
            </NavLink>
          </li>
        );
      }
      return (
        <li className="activeProgress text-center" key={index}>
          <NavLink to={route} onClick={() => indexUpdate(index + 2)}>
            {stepNames[index]}
          </NavLink>
        </li>
      );
    });
  }


  render() {
    const { type, index } = this.props;
    return (
      <ul className="progressBar w-100 mt-2">
        {this.createProgressElements(type, index)}
      </ul>
    );
  }
}

Progressbar.propTypes = {
  type: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  indexUpdate: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  indexUpdate: num => dispatch(updateIndex(num)),
});

const mapStateToProps = state => ({
  index: state.pageIndex,
  type: state.cakeCharacteristics.type,
});


export default connect(mapStateToProps, mapDispatchToProps)(Progressbar);
