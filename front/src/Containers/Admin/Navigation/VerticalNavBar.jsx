import React from 'react';
import { Nav, NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../../../Assets/Styles/NavBarAdmin.css';

const VerticalNavBar = () => (
  <div className="nav-b-admin">
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
  </div>
);

export default VerticalNavBar;
