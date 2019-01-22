import React from 'react';
// import {ReactDOM} from 'react-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { Row } from 'reactstrap';

import IMG_2247 from '../../../Assets/Images/IMG_2247.jpg';
import IMG_2729 from '../../../Assets/Images/IMG_2729.JPG';
import IMG_3064 from '../../../Assets/Images/IMG_3064.JPG';
import IMG_4184 from '../../../Assets/Images/IMG_4184.JPG';
import IMG_1992 from '../../../Assets/Images/IMG-1992.JPG';
import IMG_2403 from '../../../Assets/Images/IMG-2403.JPG';
import IMG_3088 from '../../../Assets/Images/IMG-3088.JPG';
import IMG_8291 from '../../../Assets/Images/IMG-8291.JPG';
import IMG_8295 from '../../../Assets/Images/IMG-8295.jpg';
// import IMG_9122 from '../../../Assets/Images/IMG-9122.JPG';
import IMG_9593 from '../../../Assets/Images/IMG-9593.JPG';

const DemoCarousel = () => {
  const imageStyle = {
    width: '100%',
    height: '100%',
  };

  return (
    <Row style={{ width: '30vw' }}>
      <Carousel
        showStatus={false}
        showThumbs={false}
        showIndicators={false}
        infiniteLoop
        autoPlay
      >
        <div style={imageStyle}>
          <img src={IMG_2247} alt="Gâteau" style={imageStyle} />
        </div>
        <div style={imageStyle}>
          <img src={IMG_2729} alt="Gâteau" style={imageStyle} />
        </div>
        <div style={imageStyle}>
          <img src={IMG_3064} alt="Gâteau" style={imageStyle} />
        </div>
        <div style={imageStyle}>
          <img src={IMG_4184} alt="Gâteau" style={imageStyle} />
        </div>
        <div style={imageStyle}>
          <img src={IMG_1992} alt="Gâteau" style={imageStyle} />
        </div>
        <div style={imageStyle}>
          <img src={IMG_2403} alt="Gâteau" style={imageStyle} />
        </div>
        <div style={imageStyle}>
          <img src={IMG_3088} alt="Gâteau" style={imageStyle} />
        </div>
        <div style={imageStyle}>
          <img src={IMG_8291} alt="Gâteau" style={imageStyle} />
        </div>
        <div style={imageStyle}>
          <img src={IMG_8295} alt="Gâteau" style={imageStyle} />
        </div>
        <div style={imageStyle}>
          <img src={IMG_9593} alt="Gâteau" style={imageStyle} />
        </div>
      </Carousel>
    </Row>
  );
};

export default DemoCarousel;
