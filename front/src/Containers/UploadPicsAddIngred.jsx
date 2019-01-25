import React, { Component } from 'react';
import {
  Container, FormGroup, FormText, Button,
} from 'reactstrap';
import axios from 'axios';

class UploadPicsAddIngred extends Component {
  constructor(props) {
    super(props);
    this.fileInput = React.createRef();
  }

  submitFile = (event) => {
    event.preventDefault();
    const data = new FormData();
    data.append('foo', 'bar');
    data.append('avatar', this.fileInput.current.files[0]);

    const config = {
      headers: { Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjMTlmYWU1Mzk3NjYwODg0ODhmZTFkOCIsImVtYWlsIjoieW91cGl0YXRhb3VpbmVAeW9wbWFpbC5jb20iLCJpYXQiOjE1NDUyMDgzNTN9.6pRCWwrnGZKC60XrpUGSdWPGlKEtVKHyoDOR1ZQN6k4' },

      onUploadProgress: (progressEvent) => {
        const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
      },
    };

    axios.post('/api/uploadfile', data, config);
  }

  render() {
    // const token = localStorage.getItem('token');
    return (
      <Container>
        {/* Hello {token}<br /> */}
        <form onSubmit={this.submitFile}>
          <FormGroup>
            <input type="file" name="file" id="exampleFile" ref={this.fileInput} />
            <FormText color="muted">
              Importez l'image de votre ingrédient.
            </FormText>
            <Button size="sm" type="submit">Envoyer</Button>
          </FormGroup>
        </form>
        {/* <SignOut /> */}
      </Container>
    );
  }
}

export default UploadPicsAddIngred;
