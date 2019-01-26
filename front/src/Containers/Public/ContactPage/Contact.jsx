import React from 'react';
import { Container, Col, Row } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Map from './Map';
import teamPicture from '../../../Assets/Images/team.webp';
import '../../../Assets/Styles/CommonStyle.css';

const Contact = (props) => {
  const { description } = props;

  const colStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'transparent',
  };

  return (
    <Container className="body" style={{ height: '100vh', backgroundColor: 'white' }}>
      <Row className="homePageRow">
        <Col xs={6} style={colStyle}>
          <Row>
            <h2> Qui sommes nous ? </h2>
            <div>{description}</div>
          </Row>
          <Row><img src={teamPicture} alt="The team" style={{ width: '25vw' }} /></Row>
        </Col>
        <Col xs={6} style={colStyle}>
          <Row>
            <Col>
              <h2> Nous contacter </h2>
              <p> Téléphone : 04.78.38.17.07</p>
              <p> Email : contact@gilunacoffee.com</p>
              <p> Adresse : 15 rue Delandine - 69002 Lyon</p>
            </Col>
          </Row>
          <Row>
            <Map /> 
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

Contact.propTypes = {
  description: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  description: state.descriptions.contact,
});

export default connect(mapStateToProps)(Contact);
