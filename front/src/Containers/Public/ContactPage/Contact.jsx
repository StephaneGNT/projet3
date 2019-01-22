import React from 'react';
import { Container, Col, Row } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
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
    <Container className="body" style={{ height: '100vh' }}>
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
              <p> Téléphone : </p>
              <p> Email : </p>
              <p> Adresse : </p>
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
