import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Col, Row } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Carousel from './Carousel';
import '../../../Assets/Styles/CommonStyle.css';


const HomePage = (props) => {
  const { description } = props;
  const colStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'transparent',
  };

  return (
    <Container className="body" style={{ height: '100vh' }}>
      <Row className="homePageRow">
        <Col xs={6} style={colStyle}>
          <h1>Bienvenue !</h1>
          <Row style={{ backgroundColor: 'transparent' }}>
            {description}
          </Row>
          <Row style={{ backgroundColor: 'transparent' }}>
            <Link to={`${process.env.PUBLIC_URL}/mycake`}>
              <button
                type="button"
                id="enterButton"
              >
                Commencez votre gâteau
              </button>
            </Link>
          </Row>
        </Col>
        <Col xs={6} style={colStyle}>
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
