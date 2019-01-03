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
      <Nav className="navbar-nav fs mr-auto">
        <NavItem>
          <NavLink href="/admin">
            <span className="menu-name mr-2">Home Admin</span>
            <i className="fas fa-home" />
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/admin/ingredients">
            <span className="menu-name mr-2"> Ingrédients</span>
            <i className="fas fa-birthday-cake" />
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/admin/clients">
            <span className="menu-name mr-2">Clients</span>
            <i className="fas fa-users" />
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/admin/calendar">
            <span className="menu-name mr-2">Calendrier</span>
            <i className="fas fa-calendar-alt" />
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/admin/edit">
            <span className="menu-name mr-2"> Contenu</span>
            <i className="fas fa-paint-brush" />
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  </Navbar>
);

export default VerticalNavBar;
