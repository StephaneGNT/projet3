import React, { Component } from 'react';
import {
  Container, Row, Col,
} from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import axios from 'axios';

class HomePageAdmin extends Component {
  constructor(props) {
    super(props);
    const { homePageDescription, contactDescription } = this.props;
    this.state = {
      homePage: homePageDescription,
      contact: contactDescription,
    };
  }

  changeDescription = (value, e) => {
    this.setState({ [value]: e.target.value });
  }

  saveDescription = (value, content) => {
    axios.put('/admin/descriptions/new', content)
      .then((response, err) => {
        if (response.status === 200) window.alert(`Description ${value} mise à jour`);
        else window.alert('Erreur lors de la mise à jour');
      });
  };

  render() {
    console.log("this.state", this.state)
    const { homePage, contact } = this.state;
    return (
      <Container>
        <Row>
          <h1>Modifier les textes des pages d'accueil / page de contact</h1>
          <Col xs={6} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h2 className="text-center">Texte de la page d'accueil</h2>
            <div>
              <textarea
                style={{ width: '90%', height: '30vh', margin: '5vh' }}
                type="text"
                value={homePage}
                onChange={e => this.changeDescription('homePage', e)}
              />
            </div>
            <button
              style={{ width: '50%', margin: 'auto' }}
              type="button"
              onClick={() => this.saveDescription('homepage', this.state)}
            >
              Enregistrer
            </button>
          </Col>
          <Col xs={6} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h2>Texte de la page contact / about us</h2>
            <textarea
              style={{ width: '90%', height: '30vh', margin: '5vh' }}
              type="text"
              value={contact}
              onChange={e => this.changeDescription('contact', e)}
            />
            <button
              style={{ width: '50%', margin: 'auto' }}
              type="button"
              onClick={() => this.saveDescription('contact', this.state)}
            >
              Enregistrer
            </button>
          </Col>
        </Row>
      </Container>
    );
  }
}

HomePageAdmin.propTypes = {
  homePageDescription: PropTypes.string.isRequired,
  contactDescription: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  homePageDescription: state.descriptions.homePage,
  contactDescription: state.descriptions.contact,
});

export default connect(mapStateToProps, null)(HomePageAdmin);
