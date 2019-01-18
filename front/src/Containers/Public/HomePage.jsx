import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Container, Col, Row,
} from 'reactstrap';
import IMG_2729 from '../../Assets/Images/IMG_2729.JPG';
import IMG_4184 from '../../Assets/Images/IMG_4184.JPG';
import IMG_2247 from '../../Assets/Images/IMG_2247.jpg';
import IMG_3064 from '../../Assets/Images/IMG_3064.JPG';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="body-admin">
        <h1>Bienvenue sur Pimp My Cake !</h1>
        <div className="btn-accueil">
          <Link to={`${process.env.PUBLIC_URL}/mycake`}><button type="button">Commencez votre gâteau</button></Link>
        </div>
        <div className="bloc-gallery">
        <Container>
          <Row>
            <Col><img src={IMG_2729} className="img-gallery" alt="gateau" /></Col>
            <Col><img src={IMG_4184} className="img-gallery" alt="gateau" /></Col>
            <Col><img src={IMG_2247} className="img-gallery" alt="gateau" /></Col>
            <Col><img src={IMG_3064} className="img-gallery" alt="gateau" /></Col>
          </Row>
        </Container>
        </div>
      </div>
    );
  }
}

export default HomePage;
