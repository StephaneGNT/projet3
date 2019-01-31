import React from 'react';
import { Navbar, Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import facebook from '../../../Assets/Images/logoFBcolor.png';
import insta from '../../../Assets/Images/logoInstaColor.png';
import trip from '../../../Assets/Images/logoTripAdvColor.png';

const logoStyleFB = {
  width: '40px',
  height: '40px',
  margin: '5px',
};

const logoStyleInsta = {
  width: '30px',
  height: '30px',
  margin: '5px',
};

const logoStyleTrip = {
  width: '30px',
  height: '30px',
  margin: '5px',
};

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
    <Nav style={{ position: 'absolute', right: '2vh', display: 'row', alignItems: 'center' }}>
      <a href="https://www.facebook.com/gilunacoffee/" target="blank">
        <img src={facebook} alt="FB logo" style={logoStyleFB} />
      </a>
      <a href="https://instagram.com/gilunacoffee?utm_source=ig_profile_share&igshid=h06l8zj07x0i" target="blank">
        <img src={insta} alt="Instagram logo" style={logoStyleInsta} />
      </a>
      <a href="https://www.tripadvisor.fr/Restaurant_Review-g187265-d12031731-Reviews-Giluna_Coffeehouse-Lyon_Rhone_Auvergne_Rhone_Alpes.html" target="blank">
        <img src={trip} alt="Trip advisor logo" style={logoStyleTrip} />
      </a>
    </Nav>
  </Navbar>
);

export default MainNavigation;
