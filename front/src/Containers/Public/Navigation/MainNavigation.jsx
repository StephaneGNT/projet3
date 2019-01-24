import React from 'react';
import '../../../Assets/Styles/MainNavigation.css';
import {
  Navbar, Nav, NavItem, NavLink, NavbarBrand,
} from 'reactstrap';
import logo from '../../../Assets/Images/LOGO_GILUNA.png';

const MainNavigation = () => (
  <Navbar className="fixed-adapt navbar-light">
    <div className="bloc">
      <NavbarBrand href="/">
        <img src={logo} className="logo" alt="Giluna-logo" />
      </NavbarBrand>
      <Nav className="navbar-nav mr-auto">
        <NavItem>
          <NavLink href="/">
            <i className="fas fa-home" />
            <span className="linkname ml-3">Accueil</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/mycake">
            <i className="fas fa-birthday-cake ml-1" />
            <span className="linkname ml-3">Gâteaux</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">
            <i className="fas fa-shopping-cart" />
            <span className="linkname ml-3">Panier</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/contact">
            <i className="fas fa-mail-bulk" />
            <span className="linkname ml-3">Contact</span>
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  </Navbar>
);

export default MainNavigation;
