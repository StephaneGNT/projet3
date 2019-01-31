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

  componentDidMount() {
    // this.renderOneMarker()
  }

  // renderOneMarker = (giver, giverIndex) => {
  //   let query = "17+rue+Delandine&postcode=69007";

  //   fetch(this.api + query)
  //     .then(response => response.json())
  //     .then(data => {
  //       let fetchLocalLat = data.features[0].geometry.coordinates[1];
  //       let fetchLocalLong = data.features[0].geometry.coordinates[0];
  //       this.pos = { lat: fetchLocalLat, lng: fetchLocalLong };

  //       const markers = this.state.markers;
  //       markers[giverIndex] = this.pos;
  //       this.setState({ markers })
  //       this.props.returnCoordinates(this.state.markers)
  //     });
  // }

  // displayAdress = (giver) => {
  //   if (giver) {
  //     return <div><h2>{giver.firstName + " " + giver.lastName}</h2><p>{giver.adress.streetNumber + " " + giver.adress.streetType + " " + giver.adress.streetName + " " + giver.adress.postalCode + " " + giver.adress.cityName}</p></div>
  //   }
  // }

  render() {
    const { lat, lng } = this.state;
    const { google } = this.props;
    return (
      <Container style={{ width: '25vw', height: '50vh' }}>
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
          style={{
            width: '25vw', height: '50vh', border: '5px solid rgba(141, 29, 44, 0.8)', borderRadius: '40px',
          }}
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
