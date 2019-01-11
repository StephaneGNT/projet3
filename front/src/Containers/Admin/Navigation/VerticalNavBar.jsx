import React from 'react';
import {
  Nav, NavItem, Navbar, NavbarBrand,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import '../../../Assets/Styles/MainNavigation.css';
import logo from '../../../Assets/Images/LOGO_GILUNA.png';

const VerticalNavBar = () => (
  <Navbar className="navbar-expand fixed-adapt navbar-light ">
    <div className="bloc">
      <NavbarBrand to="/">
        <img src={logo} className="logo" alt="giluna-logo" />
      </NavbarBrand>
      <Nav className="navbar-nav mr-auto">
        <NavItem>
          <NavLink to="/admin">
            <i className="fas fa-home" />
            <span className="linkname ml-3">Home</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/admin/ingredients">
            <i className="fas fa-birthday-cake ml-1" />
            <span className="linkname ml-2">Ingrédients</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/admin/clients">
            <i className="fas fa-users" />
            <span className="linkname ml-2">Clients</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/admin/calendar">
            <i className="fas fa-calendar-alt" />
            <span className="linkname ml-3">Calendrier</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/admin/edit">
            <i className="fas fa-paint-brush" />
            <span className="linkname ml-3">Contenu</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/admin/adminList">
            <i className="fas fa-user" />
            <span className="linkname ml-3">Admin</span>
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  </Navbar>
);

export default VerticalNavBar;
