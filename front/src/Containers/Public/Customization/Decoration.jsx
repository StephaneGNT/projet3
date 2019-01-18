import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  FormGroup, FormText, Label, Button, Col, Container,
} from 'reactstrap';
import axios from 'axios';
import Giluna from '../../../Assets/Images/LOGO_GILUNA.png';

class Decoration extends Component {
  constructor(props) {
    super(props);
    this.fileInput = React.createRef();
  }

  submitFile = (event) => {
    event.preventDefault();
    const data = new FormData();
    const { modify } = this.props;
    data.append('foo', 'bar');
    data.append('avatar', this.fileInput.current.files[0]);

    const config = {
      headers: { Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjMTlmYWU1Mzk3NjYwODg0ODhmZTFkOCIsImVtYWlsIjoieW91cGl0YXRhb3VpbmVAeW9wbWFpbC5jb20iLCJpYXQiOjE1NDUyMDgzNTN9.6pRCWwrnGZKC60XrpUGSdWPGlKEtVKHyoDOR1ZQN6k4' },

      // onUploadProgress: (progressEvent) => {
      //   const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
      // },
    };
    axios.post('/api/uploadfile', data, config)
      .then((result) => {
        // this.setState({ photo: result.data });
        console.log(result.data);
        modify('GET_PHOTO_URL', result.data);
      });
  }

  sendPhotoUrl = (url) => {
    const { modify } = this.props;
    const type = 'GET_PHOTO_URL';
    modify(type, url);
  }

  render() {
    // const { decoration } = this.state;
    // const token = localStorage.getItem('token');
    return (
      <div>
        <form onSubmit={this.submitFile}>
          <FormGroup>
            <input type="file" name="file" id="exampleFile" ref={this.fileInput} />
            <FormText color="muted">
              {/* This is some placeholder block-level help text for the above input.
              It's a bit lighter and easily wraps to a new line. */}
            </FormText>
            <Button type="submit">Soumettre</Button>
          </FormGroup>
        </form>
        <img src={this.props.photo1 ? require(`../../../../../back/tmp/${this.props.photo1}`) : Giluna} alt="customer decoration" />
      </div>
    );
  }
}

Decoration.propTypes = {
  D2: PropTypes.shape({}).isRequired,
  D3: PropTypes.shape({}).isRequired,
  choice: PropTypes.string.isRequired,
  image: PropTypes.shape({}).isRequired,
  price: PropTypes.number.isRequired,
  modify: PropTypes.func.isRequired,
};

const mapStatetoProps = state => ({
  photo1: state.customizationCustomer.photo1,
  // choice: state.customizationCustomer.decoration.choice,
  // image: state.customizationCustomer.decoration.image,
  // price: state.customizationCustomer.decoration.price,
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStatetoProps, mapDispatchToProps)(Decoration);
