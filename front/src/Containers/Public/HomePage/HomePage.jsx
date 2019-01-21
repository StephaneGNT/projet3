import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Col, Row } from 'reactstrap';
import Description from './Description';
import Carousel from './Carousel';
import teamPicture from '../../../Assets/Images/team.webp';


class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const colStyle = {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
      alignItems: 'center',
    };

    return (
      <Container className="body" style={{ height: '100vh' }}>
        <h1>Bienvenue sur Pimp My Cake !</h1>
        <Row style={{ height: '85vh' }}>
          <Col xs={6} style={colStyle}>
            <Row>
              <Description />
            </Row>
            <Row>
              <Carousel />
            </Row>
          </Col>
          <Col xs={6} style={colStyle}>
            <img src={teamPicture} alt="The team" style={{ width: '25vw' }} />
            <Link to={`${process.env.PUBLIC_URL}/mycake`}>
              <button
                type="button"
                id="enterButton"
              >
                Commencez votre gâteau
              </button>
            </Link>
          </Col>
        </Row>        
      </Container>
    );
  }
}

export default HomePage;
