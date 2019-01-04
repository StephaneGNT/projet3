import React from 'react';
import { Col } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const RightPics = (props) => {
  const { photos } = props;
  return (
    <Col className="photoDisplay" id="photoDisplayRightPics">
      <img src={photos[0]} style={{ transform: 'rotateZ(15deg)' }} alt="message" />
      <img src={photos[1]} style={{ transform: 'rotateZ(-15deg)' }} alt="message" />
      <img src={photos[2]} style={{ transform: 'rotateZ(15deg)' }} alt="message" />
      <img src={photos[3]} style={{ transform: 'rotateZ(-15deg)' }} alt="message" />
      <img src={photos[4]} style={{ transform: 'rotateZ(15deg)' }} alt="message" />
      <img src={photos[5]} style={{ transform: 'rotateZ(-15deg)' }} alt="message" />
    </Col>
  );
};

RightPics.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapStateToProps = state => ({
  photos: state.rightColumnPics,
});

export default connect(mapStateToProps, null)(RightPics);
