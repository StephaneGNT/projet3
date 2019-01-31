import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Table, Container } from 'reactstrap';
import axios from 'axios';

import '../../../Assets/Styles/OrderDetail.css';
import '../../../Assets/Styles/Confirmation.css';
import CakeDescriptionUserSide from './CakeDescriptionUserSide';


class Confirmation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photo2D: '',
      photo3D: '',
      description3D: '',
    };
  }

  componentWillMount = () => {
    const { customWishes } = this.props;
    if (customWishes.deco1 === '2D' || customWishes.deco2 === '2D') {
      axios.get(`/api/image/get/${customWishes.photo1}`)
        .then(res => this.setState({ photo2D: `data:image/jpg;base64,${res.data}` }));
    }
    if (customWishes.deco1 === '3D' || customWishes.deco2 === '3D') {
      if (customWishes.photo2) {
        axios.get(`/api/image/get/${customWishes.photo2}`)
          .then(res => this.setState({ photo3D: `data:image/jpg;base64,${res.data}` }));
      }
      if (customWishes.description3D) this.setState({ description3D: customWishes.description3D });
    }
  }

  componentWillReceiveProps = (nextProps) => {
    const { customWishes } = nextProps;
    if (customWishes.deco1 === '2D' || customWishes.deco2 === '2D') {
      axios.get(`/api/image/get/${customWishes.photo1}`)
        .then(res => this.setState({ photo2D: `data:image/jpg;base64,${res.data}` }));
    }
    if (customWishes.deco1 === '3D' || customWishes.deco2 === '3D') {
      if (customWishes.photo2) {
        axios.get(`/api/image/get/${customWishes.photo2}`)
          .then(res => this.setState({ photo3D: `data:image/jpg;base64,${res.data}` }));
      } else this.setState({ description3D: customWishes.description3D })
    }
  }

  render() {
    const { cake, customWishes } = this.props;
    const { photo2D, photo3D, description3D } = this.state;
    return (
      <Container>
        <Table>
          <CakeDescriptionUserSide
            customWishes={customWishes}
            cake={cake}
            user="user"
            photo2D={photo2D}
            photo3D={photo3D}
            description3D={description3D}
          />
        </Table>
        <br />
        <p> Paiement par carte, chèque ou espèces, en boutique.</p>
        <p> Récupération de la commande en boutique.</p>
      </Container>
    );
  }
}

Confirmation.propTypes = {
  cake: PropTypes.shape({}).isRequired,
  customWishes: PropTypes.shape({}).isRequired,
};

const mapStateToProps = state => ({
  cake: state.cakeCharacteristics,
  customWishes: state.customizationCustomer,
});

export default connect(mapStateToProps)(Confirmation);
