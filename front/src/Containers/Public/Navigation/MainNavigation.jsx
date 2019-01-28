import React from 'react';
import { Navbar, Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';


const MainNavigation = () => (
  <Navbar color="light" light expand="sm" className="justify-content-center">
    <Nav navbar>
      <NavItem className="mx-5">
        <NavLink to="/" className="nav-link lead">
          <i className="fas fa-home mr-2" />
          Accueil
        </NavLink>
      </NavItem>
      <NavItem className="mx-5">
        <NavLink to="/mycake" className="nav-link lead">
          <i className="fas fa-birthday-cake mr-2" />
          Gâteaux
        </NavLink>
      </NavItem>
      <NavItem className="mx-5">
        <NavLink to="/contact" className="nav-link lead">
          <i className="fas fa-mail-bulk mr-2" />
          Contact
        </NavLink>
      </NavItem>
    </Nav>
  </Navbar>
);

// export default MainNavigation;
