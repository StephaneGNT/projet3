import React, { Component } from 'react';
import { Container, Table, Button } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import CakeDescriptionAdminSide from './CakeDescriptionAdminSide';

class CakeDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photo2D: '',
      photo3D: '',
      description3D: '',
    };
  }

  componentWillMount = () => {
    const { location } = this.props;
    if (location.state.cake.deco1 === '2D' || location.state.cake.deco2 === '2D') {
      axios.get(`/api/image/get/${location.state.cake.photo1}`)
        .then(res => this.setState({ photo2D: `data:image/jpg;base64,${res.data}` }));
    }
    if (location.state.cake.deco1 === '3D' || location.state.cake.deco2 === '3D') {
      if (location.state.cake.photo2) {
        axios.get(`/api/image/get/${location.state.cake.photo2}`)
          .then(res => this.setState({ photo3D: `data:image/jpg;base64,${res.data}` }));
      } else this.setState({ description3D: location.state.cake.description3D })
    }
  }

  componentWillReceiveProps = (nextProps) => {
    const { location } = this.props;
    if (location.state.cake.deco1 === '2D' || location.state.cake.deco2 === '2D') {
      axios.get(`/api/image/get/${location.state.cake.photo1}`)
        .then(res => this.setState({ photo2D: `data:image/jpg;base64,${res.data}` }));
    }
    if (location.state.cake.deco1 === '3D' || location.state.cake.deco2 === '3D') {
      if (location.state.cake.photo2) {
        axios.get(`/api/image/get/${location.state.cake.photo2}`)
          .then(res => this.setState({ photo3D: `data:image/jpg;base64,${res.data}` }));
      } else this.setState({ description3D: location.state.cake.description3D })
    }
  }

  render() {
    const { location, history } = this.props;
    const { photo2D, photo3D, description3D } = this.state;
    return (
      <Container>
        <Table>
          <tbody>
            <CakeDescriptionAdminSide
              cake={location.state.cake}
              customWishes=""
              user="admin"
              photo2D={photo2D}
              photo3D={photo3D}
              description3D={description3D}
            />
          </tbody>
        </Table>
        <Button onClick={() => history.push(`${process.env.PUBLIC_URL}/admin/orders`)}>Retour</Button>
      </Container>
    );
  }
}

export default withRouter(CakeDetail);
