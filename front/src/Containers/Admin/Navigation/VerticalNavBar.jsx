import React from 'react';
import {
  Nav, NavItem, Navbar, NavbarBrand,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import '../../../Assets/Styles/MainNavigation.css';
import logo from '../../../Assets/Images/LOGO_GILUNA.png';

const VerticalNavBar = () => (
  <Navbar className="navbar-expand fixed-adapt">
    <div className="bloc">
      <NavbarBrand to="/">
        <img src={logo} className="logo" alt="giluna-logo" />
      </NavbarBrand>
      <Nav className="navbar-nav mr-auto">
        <NavItem>
          <NavLink to="/admin/orders">
            <i className="fas fa-home" />
            <span className="linkname ml-3">Commandes</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/admin/ingredients">
            <i className="fas fa-birthday-cake ml-1" />
            <span className="linkname ml-2">Ingrédients</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/admin/Customization">
            <i className="fas fa-paint-brush" />
            <span className="linkname ml-2">Polices</span>
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
            <i className="fas fa-edit" />
            <span className="linkname ml-3">Contenu</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/admin/clients">
            <i className="fas fa-user" />
            <span className="linkname ml-3">Clients</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/admin/adminList">
            <i className="fas fa-id-card" />
            <span className="linkname ml-3">Admins</span>
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  </Navbar>

);

export default VerticalNavBar;
