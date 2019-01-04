import React, { Component } from 'react';
import { Col } from 'reactstrap';

import messageImage1 from '../../../Assets/Images/IMG_2729.JPG';
import messageImage2 from '../../../Assets/Images/IMG_4184.JPG';
import messageImage3 from '../../../Assets/Images/IMG-1992.JPG';
import messageImage4 from '../../../Assets/Images/IMG-3088.JPG';
import messageImage5 from '../../../Assets/Images/IMG-2403.JPG';
import messageImage6 from '../../../Assets/Images/IMG-3064.JPG';

class LeftPics extends Component {
  renderPictures = () => {
    const photos = [messageImage1, messageImage2, messageImage3, messageImage4, messageImage5, messageImage6];
    return (
      <Col className="photoDisplay">
        <img src={photos[0]} style={{ transform: 'rotateZ(15deg)' }} alt="message" />
        <img src={photos[1]} style={{ transform: 'rotateZ(-15deg)' }} alt="message" />
        <img src={photos[2]} style={{ transform: 'rotateZ(15deg)' }} alt="message" />
        <img src={photos[3]} style={{ transform: 'rotateZ(-15deg)' }} alt="message" />
        <img src={photos[4]} style={{ transform: 'rotateZ(15deg)' }} alt="message" />
        <img src={photos[5]} style={{ transform: 'rotateZ(-15deg)' }} alt="message" />
      </Col>
    );
  }

  render() {
    return (
      this.renderPictures()
    );
  }
}

export default LeftPics;
