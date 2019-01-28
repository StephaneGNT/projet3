import React, { Component } from 'react';
import {
  Container, FormGroup, Label, FormText, Button,
} from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import axios from 'axios';
import Giluna from '../Assets/Images/LOGO_GILUNA.png';

class UploadPics extends Component {
  constructor(props) {
    super(props);
    this.fileInput = React.createRef();
  }

  submitFile = (event) => {
    event.preventDefault();
    const data = new FormData();
    const { sendPhotoUrl } = this.props;
    data.append('foo', 'bar');
    data.append('avatar', this.fileInput.current.files[0]);

    const config = {
      headers: { Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjMTlmYWU1Mzk3NjYwODg0ODhmZTFkOCIsImVtYWlsIjoieW91cGl0YXRhb3VpbmVAeW9wbWFpbC5jb20iLCJpYXQiOjE1NDUyMDgzNTN9.6pRCWwrnGZKC60XrpUGSdWPGlKEtVKHyoDOR1ZQN6k4' },

      // onUploadProgress: (progressEvent) => {
      //   const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
      // },
    };
    axios.post('/api/uploadfile', data, config)
      .then(result => sendPhotoUrl(result.data));
  }

  render() {
    const token = localStorage.getItem('token');
    const { photo1 } = this.props;
    return (
      <Container style={{ margin: '5vh 5vw' }}>
        Hello
        {token}
        <br />
        <form onSubmit={this.submitFile}>
          <FormGroup>
            <Label for="exampleFile">File</Label>
            <input type="file" name="file" id="exampleFile" ref={this.fileInput} />
            <FormText color="muted">
              This is some placeholder block-level help text for the above input.
              It is a bit lighter and easily wraps to a new line.
            </FormText>
            <Button type="submit">Soumettre</Button>
          </FormGroup>
        </form>
        {/* <SignOut /> */}
        <img src={this.props.photo1 ? require(`../../../back/tmp/${photo1}`) : Giluna} alt="customer decoration" />

      </Container>
    );
  }
}

UploadPics.propTypes = {
};

const mapStatetoProps = state => ({
  photo1: state.customizationCustomer.photo1,
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStatetoProps, mapDispatchToProps)(UploadPics);
