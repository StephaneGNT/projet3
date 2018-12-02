import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { updateIndex } from '../../Actions/changeIndex';
import '../../Assets/Styles/ProgressBar.css';


class Progressbar extends Component {
  createProgressElements = (type, nbActive) => {
    console.log('create progress Elements');
    const routes = (type === 'cake' || type === 'cheesecake') ? ['/mycake/composition', '/mycake/composition', '/mycake/composition', '/mycake/customCake', '/mycake/orderDetail', '/mycake/userInfo'] : ['/mycake/composition', '/mycake/customCake', '/mycake/orderDetail', '/mycake/userInfo'];
    const stepNames = (type === 'cake' || type === 'cheesecake') ? ['Base', 'Glacage & Garniture', 'Toppings', 'Personalisation', 'Order Details', 'Client Information'] : ['Base', 'Personalisation', 'Order Details', 'Client Information'];
    let countActive = nbActive; 
    return routes.map((route, index) => {
      countActive -= 1;
      console.log(index);
      if (countActive <= 0) {
        console.log(' element not Active');
        return (
          <li className="text-center" key={index}>
            <NavLink to={route} onClick={() => this.props.indexUpdate(index + 2)}>
              {stepNames[index]}
            </NavLink>
          </li>
        );
      }
      console.log(' element Active');
      return (
        <li className="activeProgress text-center" key={index}>
          <NavLink to={route} onClick={() => this.props.indexUpdate(index + 2)}>
            {stepNames[index]}
          </NavLink>
        </li>
      );
    });
  }


  render() {
    return (
      <ul className="progressBar w-100">
        {this.createProgressElements(this.props.type, this.props.index)}
      </ul>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    indexUpdate: num => dispatch(updateIndex(num)),
  };
};

const mapStateToProps = state => {
  return {
    index: state.pageIndex,
    type: state.cakeCharacteristics.type,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Progressbar);
