import React, { Component } from 'react';
import { Button, Input } from 'reactstrap';
import PropTypes from 'prop-types';
import axios from 'axios';

class Decoration extends Component {
  constructor(props) {
    super(props);
    this.state = { imagePreviewUrl1: '', imagePreviewUrl2: '' };
  }

  submitFile = (file) => {
    const data = new FormData();
    const { modify } = this.props;
    data.append('foo', 'bar');
    data.append('avatar', file);

    const config = {
      headers: { Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjMTlmYWU1Mzk3NjYwODg0ODhmZTFkOCIsImVtYWlsIjoieW91cGl0YXRhb3VpbmVAeW9wbWFpbC5jb20iLCJpYXQiOjE1NDUyMDgzNTN9.6pRCWwrnGZKC60XrpUGSdWPGlKEtVKHyoDOR1ZQN6k4' },
    };
    axios.post('/api/uploadfile', data, config)
      .then((result) => {
        // this.setState({ photo: result.data });
        modify('GET_PHOTO_URL', result.data);
      });
  }


  resetUrl = (type) => {
    if (type === '2D') return this.setState({ imagePreviewUrl1: '' });
    return this.setState({ imagePreviewUrl2: '' });
  }

  sendPhotoUrl = (url) => {
    const { modify } = this.props;
    const type = 'GET_PHOTO_URL';
    modify(type, url);
  }


  hideInputField = () => {
    const { decoType, customSummary } = this.props;
    const { imagePreviewUrl1, imagePreviewUrl2 } = this.state;
    if ((decoType === '2D' && (imagePreviewUrl1 || customSummary.photo1))
      || (decoType === '3D' && (imagePreviewUrl2 || customSummary.photo2))) return true;
  }

  handleImageChange(e) {
    e.preventDefault();
    const reader = new FileReader();
    const file = e.target.files[0];
    const { decoType, sendFileEvent } = this.props;
    const urlNum = decoType === '2D' ? 'imagePreviewUrl1' : 'imagePreviewUrl2';
    reader.onloadend = () => {
      this.setState({ [urlNum]: reader.result });
    };
    reader.readAsDataURL(file);
    sendFileEvent(file, decoType);
  }

  render() {
    const { imagePreviewUrl1, imagePreviewUrl2 } = this.state;
    const { decoType, photography } = this.props;
    const urlNum = decoType === '2D' ? imagePreviewUrl1 : imagePreviewUrl2;
    const centerContent = { display: 'flex', flexDirection: 'column', alignItems: 'center' };
    let imagePreview = null;
    if (urlNum) {
      imagePreview = (
        <div style={centerContent}>
          {!photography && (
            <Button
              style={{ marginTop: '0.5vh', marginBottom: '0,5vh' }}
              onClick={() => this.resetUrl(decoType)}
            >
              Supprimer photo
            </Button>
          )}
          <br />
          <img src={urlNum} alt="exemple" />
        </div>
      );
    } else {
      imagePreview = (
        <div className="previewText">
          <p style={{ textAlign: 'center' }}>
            Votre photo ici
            <br />
            (Cliquez pour ajouter)
          </p>
          <Input
            type="file"
            className="inputField"
            name={decoType === '2D' ? 'file1' : 'file2'}
            id={decoType === '2D' ? 'file1' : 'file2'}
            onChange={e => this.handleImageChange(e)}
            maxsize={5242880}
            multiple={false}
            accept="image/png"
          />
        </div>);
    }
    return (
      <div style={centerContent}>
        {(() => {
          if ((!urlNum && !photography) || urlNum) return imagePreview;
          // return <img src={`/api/image/${photography}`} alt="Exemple" />;
          return <img src={require(`../../../../../back/tmp/${photography}`)} alt="Exemple" />;
        }
        )()}
        <br />
      </div>
    );
  }
}

Decoration.propTypes = {
  customSummary: PropTypes.shape({}).isRequired,
  modify: PropTypes.func.isRequired,
  sendFileEvent: PropTypes.func.isRequired,
  decoType: PropTypes.string.isRequired,
  photography: PropTypes.string.isRequired,
};

export default Decoration;
