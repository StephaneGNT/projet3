import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { Row } from 'reactstrap';
import IMG_0987 from '../../../Assets/Images/selectionGallerie/IMG_0987.JPG';
import IMG_2222 from '../../../Assets/Images/selectionGallerie/IMG_2222.JPG';
import IMG_2247 from '../../../Assets/Images/selectionGallerie/IMG_2247.jpg';
import IMG_2459 from '../../../Assets/Images/selectionGallerie/IMG_2459.JPG';
import IMG_3088 from '../../../Assets/Images/selectionGallerie/IMG_3088.png';
import IMG_5546 from '../../../Assets/Images/selectionGallerie/IMG_5546.JPG';
import IMG_9627 from '../../../Assets/Images/selectionGallerie/IMG_9627.JPG';
import IMG_9746 from '../../../Assets/Images/selectionGallerie/IMG-9746.JPG';

const DemoCarousel = () => {
  const imageStyle = {
    width: '100%',
    height: '100%',
  };

  return (
    <Row className="body-carousel">
      <Carousel
        showStatus={false}
        showThumbs={false}
        showIndicators={false}
        infiniteLoop
        autoPlay
      >
        <div style={imageStyle}>
          <img src={IMG_0987} alt="Gâteau" style={imageStyle} />
        </div>
        <div style={imageStyle}>
          <img src={IMG_2222} alt="Gâteau" style={imageStyle} />
        </div>
        <div style={imageStyle}>
          <img src={IMG_2247} alt="Gâteau" style={imageStyle} />
        </div>
        <div style={imageStyle}>
          <img src={IMG_2459} alt="Gâteau" style={imageStyle} />
        </div>
        <div style={imageStyle}>
          <img src={IMG_3088} alt="Gâteau" style={imageStyle} />
        </div>
        <div style={imageStyle}>
          <img src={IMG_5546} alt="Gâteau" style={imageStyle} />
        </div>
        <div style={imageStyle}>
          <img src={IMG_9627} alt="Gâteau" style={imageStyle} />
        </div>
        <div style={imageStyle}>
          <img src={IMG_9746} alt="Gâteau" style={imageStyle} />
        </div>
      </Carousel>
    </Row>
  );
};

export default DemoCarousel;
