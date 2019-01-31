import React from 'react';
import { Container } from 'reactstrap';
import logo from '../Assets/Images/LOGO_GILUNA.png'; 

const CellPhonePage = () => (
  <Container
    style={{
      backgroundImage: 'url("https://i.imgur.com/WUALrq8.jpg")',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
      alignItems: 'center',
      height: '100vh',
    }}
  >
    <Container
      style={{
        backgroundColor: 'rgba(255,255,255,0.6',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: '100vh',
        width: '100vw',
        margin: 0,
      }}
    >
      <img src={logo} alt="logo" style={{ width: '30vh', height: '30vh' }} />
      <div
        style={{ backgroundColor: 'rgba(255,255,255,0.9', borderRadius: '20px', textAlign: 'center' }}
      >
        <h1>Désolées, notre site n'est pas accessible sur votre appareil...</h1>
        <br />
        <b style={{ fontSize: '1.5em', fontFamily: 'Lobster Two, cursive' }}>Mais nous vous attendons avec impatience depuis une tablette ou un ordinateur !</b>
      </div>
    </Container>
  </Container>
);

export default CellPhonePage;
