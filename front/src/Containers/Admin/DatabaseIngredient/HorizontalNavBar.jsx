import React, { Component } from 'react';
import { Nav, NavItem, Button } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import setCategory from '../../../Actions/databaseActions/setCategory';

class HorizontalNavBar extends Component {
  constructor(props) {
    super(props);
    this.ingredients = ['Bases cake', 'Bases cookie', 'Toppings', 'Remplissage', 'Glaçage', 'Parfums macarons', 'Couleur macarons', 'Parfum cheesecake', 'Allergènes'];
  }

  renderNavBar = () => {
    const { changeCategory } = this.props;
    const render = [];
    for (let i = 0; i < this.ingredients.length; i += 1) {
      render.push(
        <NavItem>
          <Button onClick={() => changeCategory(this.ingredients[i])}>
            {this.ingredients[i]}
          </Button>
        </NavItem>,
      );
    }
    return render;
  }

  render() {
    return (
      <Nav>
        {this.renderNavBar()}
      </Nav>
    );
  }
}

HorizontalNavBar.propTypes = {
  changeCategory: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  changeCategory: category => dispatch(setCategory(category)),
});


export default connect(null, mapDispatchToProps)(HorizontalNavBar);
