import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import { Container } from 'reactstrap';
import apiKey from '../../../Assets/googleAPIKeys';

export class MapContainer extends Component
{

  constructor(props) {
    super(props);

    this.api = 'https://api-adresse.data.gouv.fr/search/?q=';

    this.state = {
      lat: '45.746559',
      lng: '4.827114',
    };
  }

  render() {
    const { lat, lng } = this.state;
    const { google } = this.props;
    return (
      <Container>
        <Map
          google={google}
          zoom={16}
          initialCenter={{
            lat,
            lng,
          }}
          center={{
            lat,
            lng,
          }}
          className="the-map"
        >

          <Marker
            name="Giluna Coffee House"
            position={{
              lat,
              lng,
            }}
          />
        </Map>

      </Container>
    );
  }
}

const localApiKey = apiKey();
export default GoogleApiWrapper({
  apiKey: localApiKey,
})(MapContainer);
