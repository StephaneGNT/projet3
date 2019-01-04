import React from 'react';
import {
  Nav, NavItem, NavLink, Navbar, NavbarBrand,
} from 'reactstrap';
import '../../../Assets/Styles/MainNavigation.css';
import logo from '../../../Assets/Images/LOGO_GILUNA.png';

const VerticalNavBar = () => (
  <Navbar className="navbar-expand fixed-adapt navbar-light bg-light">
    <div className="bloc">
      <NavbarBrand href="/">
        <img src={logo} className="logo" alt="giluna-logo" />
      </NavbarBrand>
      <Nav className="navbar-nav mr-auto">
        <NavItem>
          <NavLink href="/admin">
            <i className="fas fa-home" />
            <span className="linkname ml-3">Admin</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/admin/ingredients">
            <i className="fas fa-birthday-cake ml-1" />
            <span className="linkname ml-2">Incredients</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/admin/clients">
            <i className="fas fa-users" />
            <span className="linkname ml-2">Clients</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/admin/calendar">
            <i className="fas fa-calendar-alt" />
            <span className="linkname ml-3">Calendrier</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/admin/edit">
            <i className="fas fa-paint-brush" />
            <span className="linkname ml-3">Contenu</span>
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  </Navbar>
);

export default VerticalNavBar;
