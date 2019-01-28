import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Col, Row } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Carousel from './Carousel';
import '../../../Assets/Styles/CommonStyle.css';


const HomePage = (props) => {
  const { description } = props;

  return (
    <Container className="body">
      <Row className="body-row">
        <Col xs={12}>
          <h1>Bienvenue !</h1>
          <Row>
            {description}
          </Row>
          <Row>
            <Link to={`${process.env.PUBLIC_URL}/mycake`}>
              <button
                type="button"
                id="enterButton"
                className="btn-start-cake"
              >
                Commencez votre gâteau
              </button>
            </Link>
          </Row>
        </Col>
        <Col xs={12} className="the-carousel">
          <Carousel />
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
