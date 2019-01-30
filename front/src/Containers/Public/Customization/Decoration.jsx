import React, { Component } from 'react';
import { Button, Input } from 'reactstrap';
import PropTypes from 'prop-types';
import axios from 'axios';

class Decoration extends Component {
  constructor(props) {
    super(props);
    this.state = { uploaded1: '', uploaded2: '' };
  }

  componentWillMount() {
    const { customSummary } = this.props;
    const axiosGetPhotos = (reducerPhoto, photoState) => {
      if (reducerPhoto) {
        axios.get(`/api/image/get/${reducerPhoto}`)
          .then((response) => {
            const image = `data:image/jpg;base64,${response.data}`;
            this.setState({ [photoState]: image });
          });
      }
    };
    axiosGetPhotos(customSummary.photo1, 'uploaded1');
    axiosGetPhotos(customSummary.photo2, 'uploaded2');
  }

  handleImageChange = (e) => {
    const { decoType, sendFileEvent } = this.props;
    sendFileEvent(e, decoType);
  }


  submitFile = (file) => {
    const data = new FormData();
    const { modify } = this.props;
    data.append('avatar', file);
    axios.post('/api/image/upload', data)
      .then((result) => {
        modify('GET_PHOTO_URL', result.data);
      });
  }

  updateDescription = (e) => {
    const { modify } = this.props;
    modify('UPDATE_3D_DESCRIPTION', e.target.value);
  }

  hideInputField = () => {
    const { decoType, customSummary, preview } = this.props;
    if ((decoType === '2D' && (preview || customSummary.photo1))
      || (decoType === '3D' && (preview || customSummary.photo2))) return true;
  }

  render() {
    const { uploaded1, uploaded2 } = this.state;
    const { decoType, photography, customSummary, preview, deleteUrl } = this.props;
    // const urlNum = preview;
    const centerContent = { display: 'flex', flexDirection: 'column', alignItems: 'center' };
    let imagePreview = null;
    if (preview) {
      imagePreview = (
        <div style={centerContent}>
          {!photography && (
            <Button
              style={{ marginTop: '0.5vh', marginBottom: '0,5vh' }}
              onClick={() => deleteUrl(decoType)}
              color="danger"
            >
              Supprimer photo
            </Button>
          )}
          <br />
          <img src={preview} alt="exemple" />
        </div>
      );
    } else {
      imagePreview = (
        <div>
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
            // accept="image/png"
            />
          </div>
        </div>
      );
    }
    return (
      <div style={centerContent}>
        {(() => {
          if ((!preview && !photography) || preview) return imagePreview;
          return <img src={decoType === '2D' ? uploaded1 : uploaded2} alt="Exemple" />;
        }
        )()}
        <br />
        {decoType === '3D' && (
          <div className="b-textarea-custom">
            <div className="lb-2">Description : </div>
            <Input
              name="description3D"
              type="textarea"
              onChange={this.updateDescription}
              value={customSummary.description3D}
              resize="none"
              maxLength="300"
              bgSize="sm"
            />
          </div>
        )}
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
  preview: PropTypes.string.isRequired,
  deleteUrl: PropTypes.func.isRequired,
};

export default Decoration;
