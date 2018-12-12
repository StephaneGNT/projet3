import React from 'react';
import { Nav, NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';

const VerticalNavBar = () => (
  <Nav style={{ display: 'flex', flexDirection: 'column' }}>
    <NavItem>
      <Link to="/admin"> Commandes </Link>
    </NavItem>
    <NavItem>
      <Link to="/admin/ingredients"> Ingrédients </Link>
    </NavItem>
    <NavItem>
      <Link to="/admin/clients"> Clients </Link>
    </NavItem>
    <NavItem>
      <Link to="/admin/calendar"> Calendrier </Link>
    </NavItem>
    <NavItem>
      <Link to="/admin/edit"> Contenu & Personnalisation </Link>
    </NavItem>
  </Nav>
);

export default VerticalNavBar;
