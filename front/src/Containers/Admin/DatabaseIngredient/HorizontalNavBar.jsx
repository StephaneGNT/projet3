import React, { Component } from 'react';
import {
  Nav, NavItem, Button, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem,
} from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setCategory } from '../../../Actions/databaseActions/setCategory';
import { toggleFormModify } from '../../../Actions/databaseActions/toggleFormNew';
import '../../../Assets/Styles/HorizontalNavBar.css';

class HorizontalNavBar extends Component {
  constructor(props) {
    super(props);
    this.ingredients = ['Cake', 'Cookie', 'Toppings', 'Remplissage', 'Glaçage', 'Macarons', 'Cheesecake', 'Allergènes'];
    this.state = {
      dropdownOpen: false,
    };
  }

  toggle = () => {
    const { dropdownOpen } = this.state;
    this.setState({
      dropdownOpen: !dropdownOpen,
    });
  }

  renderNavBar = () => {
    const { changeCategory, toggleForm } = this.props;
    const { dropdownOpen } = this.state;
    const render = [];
    for (let i = 0; i < this.ingredients.length; i += 1) {
      if (this.ingredients[i] === 'Macarons') {
        render.push(
          <NavItem>
            <ButtonDropdown className="dropdown" isOpen={dropdownOpen} toggle={this.toggle}>
              <DropdownToggle caret> Macarons </DropdownToggle>
              <DropdownMenu>
                <DropdownItem onClick={() => changeCategory('Parfum macaron') && toggleForm(false)}>Parfum</DropdownItem>
                <DropdownItem onClick={() => changeCategory('Couleur macaron') && toggleForm(false)}>Couleur</DropdownItem>
              </DropdownMenu>
            </ButtonDropdown>
          </NavItem>,
        );
      } else {
        render.push(
          <NavItem>
            <Button color="primary" size="sm" onClick={() => changeCategory(this.ingredients[i]) && toggleForm(false)}>
              {this.ingredients[i]}
            </Button>
          </NavItem>,
        );
      }
    }
    return render;
  }

  render() {
    return (
      <Nav className="navBar">
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
  toggleForm: show => dispatch(toggleFormModify(show))
});


export default connect(null, mapDispatchToProps)(HorizontalNavBar);
