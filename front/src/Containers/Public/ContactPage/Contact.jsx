import React from 'react';
import { Container, Col, Row } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Map from './Map';
import teamPicture from '../../../Assets/Images/phototeam.jpg';
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
      <Row className="homePageRow" style={{ height: '100%' }}>
        <Col xs={6} style={colStyle}>
          <Row>
            <h2 style={{ fontFamily: 'Lobster Two' }}>
              <strong style={{ color: 'rgba(141, 29, 44, 0.8)' }}>Q</strong>
            ui sommes nous
              <strong style={{ color: 'rgba(141, 29, 44, 0.8)' }}> ? </strong>
            </h2>
          </Row>
          <Row>
            <div style={{ textAlign: 'justify' }}>{description}</div>
          </Row>
          <Row><img src={teamPicture} alt="The team" style={{ border: '5px solid rgba(141, 29, 44, 0.8)', borderRadius: '40px', width: '25vw' }} /></Row>
        </Col>
        <Col xs={6} style={colStyle}>
          <Row>
            <Col>
              <h2 style={{ fontFamily: 'Lobster Two' }}>
                <strong style={{ color: 'rgba(141, 29, 44, 0.8)' }}> N</strong>
              ous contacte
                <strong style={{ color: 'rgba(141, 29, 44, 0.8)' }}>r </strong>
              </h2>
            </Col>
          </Row>
          <Row>
            <Col>
              <strong style={{ textAlign: 'justify' }}>
                <p> Téléphone : 04.78.38.17.07</p>
                <p> Email : contact@gilunacoffee.com</p>
                <p> Adresse : 15 rue Delandine - 69002 Lyon</p>
              </strong>
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
