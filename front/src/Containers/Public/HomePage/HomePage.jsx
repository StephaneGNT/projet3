import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Col, Row, Jumbotron } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import logo from '../../../Assets/Images/LOGO_GILUNA.png';

const HomePage = (props) => {
  const { description } = props;

  return (
    <Container fluid>
      <Row className="header-body-hp">
        <Col md={12}>
        {/* <img src={logo} className="logo-hp" alt="giluna-logo" /> */}
          <div className="bloc-ti-hp">
            <title-homepage>Bienvenue sur Pimp-my-cake.fr !</title-homepage>
            <s-title1>Créez votre gâteau personnalisé en ligne, pour un résultat qui vous ressemble!</s-title1>
          </div>
        </Col>
      </Row>
      <Row className="body-row">
        <Col md={12}>
          <Row>
            <div id="text-homepage">
              <s-title2>Fabriquez un gâteau unique, choisissez la garniture, le glaçage et la décoration nécessaire pour un gâteau à la hauteur de votre événement! </s-title2>
              {description}
              <Link to={`${process.env.PUBLIC_URL}/mycake`}>
                <button
                  type="button"
                  id="enterButton"
                  className="btn-start-cake"
                >
                  Commencez votre gâteau
                </button>
              </Link>
            </div>
          </Row>
        </Col>
        <Col md={12} className="the-carousel">
          {/* <Carousel /> */}

          gallery
        </Col>
      </Row>
    </Container>
  );
};

HomePage.propTypes = {
  description: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  description: state.descriptions.homePage,
});

export default connect(mapStateToProps)(HomePage);
