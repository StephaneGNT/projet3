import React from 'react';
// import {ReactDOM} from 'react-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { Row } from 'reactstrap';

import IMG_0987 from '../../../Assets/Images/selectionGallerie/IMG_0987.JPG';
// import IMG_1754 from '../../../Assets/Images/IMG_1754.JPG';
// import IMG_1992 from '../../../Assets/Images/IMG_1992.JPG';
import IMG_2222 from '../../../Assets/Images/selectionGallerie/IMG_2222.JPG';
import IMG_2247 from '../../../Assets/Images/selectionGallerie/IMG_2247.jpg';
import IMG_2459 from '../../../Assets/Images/selectionGallerie/IMG_2459.JPG';
// import IMG_2729 from '../../../Assets/Images/IMG_2729.JPG';
// import IMG_3043 from '../../../Assets/Images/IMG_3043.JPG';
// import IMG_3064 from '../../../Assets/Images/IMG_3064.JPG';
import IMG_3088 from '../../../Assets/Images/selectionGallerie/IMG_3088.png';
// import IMG_3222 from '../../../Assets/Images/IMG_3222.JPG';
// import IMG_4184 from '../../../Assets/Images/IMG_4184.JPG';
import IMG_5546 from '../../../Assets/Images/selectionGallerie/IMG_5546.JPG';
// import IMG_7138 from '../../../Assets/Images/IMG_7138.JPG';
// import IMG_8291 from '../../../Assets/Images/IMG_8291.JPG';
// import IMG_8292 from '../../../Assets/Images/IMG_8292.JPG';
// import IMG_9122 from '../../../Assets/Images/IMG_9122.JPG';
// import IMG_9593 from '../../../Assets/Images/IMG_9593.JPG';
import IMG_9627 from '../../../Assets/Images/selectionGallerie/IMG_9627.JPG';
import IMG_9746 from '../../../Assets/Images/selectionGallerie/IMG-9746.JPG';

const DemoCarousel = () => {
  const imageStyle = {
    width: '100%',
    height: '100%',
  };

  return (
    <Row style={{ width: '25vw' }}>
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
        {/* <div style={imageStyle}>
          <img src={IMG_1754} alt="Gâteau" style={imageStyle} />
        </div>
        <div style={imageStyle}>
          <img src={IMG_1992} alt="Gâteau" style={imageStyle} />
        </div> */}
        <div style={imageStyle}>
          <img src={IMG_2222} alt="Gâteau" style={imageStyle} />
        </div>
        <div style={imageStyle}>
          <img src={IMG_2247} alt="Gâteau" style={imageStyle} />
        </div>
        <div style={imageStyle}>
          <img src={IMG_2459} alt="Gâteau" style={imageStyle} />
        </div>
        {/* <div style={imageStyle}>
          <img src={IMG_2729} alt="Gâteau" style={imageStyle} />
        </div>
        <div style={imageStyle}>
          <img src={IMG_3043} alt="Gâteau" style={imageStyle} />
        </div>
        <div style={imageStyle}>
          <img src={IMG_3064} alt="Gâteau" style={imageStyle} />
        </div> */}
        <div style={imageStyle}>
          <img src={IMG_3088} alt="Gâteau" style={imageStyle} />
        </div>
        {/* <div style={imageStyle}>
          <img src={IMG_3222} alt="Gâteau" style={imageStyle} />
        </div>
        <div style={imageStyle}>
          <img src={IMG_4184} alt="Gâteau" style={imageStyle} />
        </div> */}
        <div style={imageStyle}>
          <img src={IMG_5546} alt="Gâteau" style={imageStyle} />
        </div>
        {/* <div style={imageStyle}>
          <img src={IMG_7138} alt="Gâteau" style={imageStyle} />
        </div>
        <div style={imageStyle}>
          <img src={IMG_8291} alt="Gâteau" style={imageStyle} />
        </div>
        <div style={imageStyle}>
          <img src={IMG_8292} alt="Gâteau" style={imageStyle} />
        </div>
        <div style={imageStyle}>
          <img src={IMG_9122} alt="Gâteau" style={imageStyle} />
        </div>
        <div style={imageStyle}>
          <img src={IMG_9593} alt="Gâteau" style={imageStyle} />
        </div> */}
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
