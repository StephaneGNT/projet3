import React from 'react';
import { Nav, NavItem, Navbar } from 'reactstrap';
import { NavLink } from 'react-router-dom';

const VerticalNavBar = () => (
  <Navbar color="light" light expand="sm" className="justify-content-center fixed-top">
    <Nav navbar>
      <NavItem className="mx-5">
        <NavLink to="/admin/orders" className="nav-link lead">
          Commandes
        </NavLink>
      </NavItem>
      <NavItem className="mx-5">
        <NavLink to="/admin/ingredients" className="nav-link lead">
          Ingrédients
        </NavLink>
      </NavItem>
      <NavItem className="mx-5">
        <NavLink to="/admin/Customization" className="nav-link lead">
          Décoration
        </NavLink>
      </NavItem>
      <NavItem className="mx-5">
        <NavLink to="/admin/calendar" className="nav-link lead">
          Calendrier
        </NavLink>
      </NavItem>
      <NavItem className="mx-5">
        <NavLink to="/admin/edit" className="nav-link lead">
          Contenu
        </NavLink>
      </NavItem>
      <NavItem className="mx-5">
        <NavLink to="/admin/clients" className="nav-link lead">
          Clients
        </NavLink>
      </NavItem>
      <NavItem className="mx-5">
        <NavLink to="/admin/adminList" className="nav-link lead">
          Admins
        </NavLink>
      </NavItem>
    </Nav>
  </Navbar>
);

export default VerticalNavBar;
