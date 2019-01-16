import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { updateIndex } from '../../Actions/cakeActions/changeIndex';
import '../../Assets/Styles/ProgressBar.css';


class Progressbar extends Component {
  handleClick = (e, index) => {
    const { ingredient, indexUpdate, deliveryDate, type } = this.props;
    if (ingredient.length > 0) {
      if (type === 'cake' || type === 'cheesecake' ? index === 5 && !deliveryDate : index === 3 && !deliveryDate) {
        window.alert('Veuillez renseigner une date de retrait');
        e.preventDefault();
      } else indexUpdate(index + 2);
    } else e.preventDefault();
  }

  createProgressElements = (type, nbActive) => {
    const routes = (type === 'cake' || type === 'cheesecake') ? ['/mycake/composition', '/mycake/composition', '/mycake/composition', '/mycake/customCake', '/mycake/orderDetail', '/mycake/userInfo'] : ['/mycake/composition', '/mycake/customCake', '/mycake/orderDetail', '/mycake/userInfo'];
    const stepNames = (type === 'cake' || type === 'cheesecake') ? ['Base', 'Glacage & Garniture', 'Toppings', 'Personnalisation', 'Order Details', 'Client Information'] : ['Base', 'Personnalisation', 'Order Details', 'Client Information'];
    let countActive = nbActive;
    return routes.map((route, index) => {
      countActive -= 1;
      if (countActive <= 0) {
        return (
          <li className="inactiveProgress text-center" key={index}>
            <NavLink to={route} onClick={e => this.handleClick(e, index)}>
              {stepNames[index]}
            </NavLink>
          </li>
        );
      }
      return (
        <li className="activeProgress text-center" key={index}>
          <NavLink to={route} onClick={e => this.handleClick(e, index)}>
            {stepNames[index]}
          </NavLink>
        </li>
      );
    });
  }


  render() {
    const { type, index } = this.props;
    return (
      <ul className="progressBar">
        {this.createProgressElements(type, index)}
      </ul>
    );
  }
}

Progressbar.propTypes = {
  type: PropTypes.string.isRequired,
  ingredient: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  index: PropTypes.number.isRequired,
  indexUpdate: PropTypes.func.isRequired,
  deliveryDate: PropTypes.shape({}).isRequired,
};

const mapDispatchToProps = dispatch => ({
  indexUpdate: num => dispatch(updateIndex(num)),
});

const mapStateToProps = state => ({
  index: state.pageIndex,
  type: state.cakeCharacteristics.type,
  ingredient: state.cakeCharacteristics.ingredients,
  deliveryDate: state.orderCharacteristics.delivery_date,
});


export default connect(mapStateToProps, mapDispatchToProps)(Progressbar);
