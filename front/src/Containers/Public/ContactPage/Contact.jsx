import React from 'react';
import { Container, Col, Row } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Map from './Map';
import teamPicture from '../../../Assets/Images/phototeam.jpg';

const Contact = (props) => {
  const { description } = props;

  return (
    <Container className="body-row">
    <br />
      <Row>
        <Col xs={6}>
          <Row className="row-contact">
            <title-contact>Qui sommes-nous ?</title-contact>
            <div>{description}</div>
            <img src={teamPicture} alt="Owners" className="img-staff" />
          </Row>
        </Col>
        <Col xs={6}>
          <Row className="row-contact">
            <title-contact>Nous contacter</title-contact>
            <p>
              <strong>Téléphone :</strong> 
                04.78.38.17.07
              <br />
              <strong>Email :</strong> 
              contact@gilunacoffee.com
              <br />
              <strong>Adresse :</strong> 
              15 rue Delandine - 69002 Lyon
            </p>
          </Row>
          <Map />
        </Col>
      </Row>
      <br />
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
