import React from 'react';
import '../../../Assets/Styles/MainNavigation.css';
import {
  Navbar, Nav, NavItem, NavbarBrand, NavLink,
} from 'reactstrap';
import logo from '../../../Assets/Images/LOGO_GILUNA.png';

const MainNavigation = () => (
  <Navbar className="navbar-expand fixed-adapt navbar-light bg-light">
    <div className="bloc">
      <NavbarBrand href="/">
        <img src={logo} className="logo" alt="giluna-logo" />
      </NavbarBrand>
      <Nav className="navbar-nav fs mr-auto">
        <NavItem>
          <NavLink href="/">
            <span className="menu-name mr-2">Home</span>
            <i className="fas fa-home" />
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/mycake">
            <span className="menu-name mr-2">Pimp my cake</span>
            <i className="fas fa-birthday-cake" />
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/contact">
            <span className="menu-name mr-2">Contact</span>
            <i className="fas fa-mail-bulk" />
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  </Navbar>
);

export default MainNavigation;
