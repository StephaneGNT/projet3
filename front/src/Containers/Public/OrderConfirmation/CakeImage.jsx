import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Row } from 'reactstrap';
import '../../../Assets/Styles/CakeInProgress.css';

const CakeImage = (props) => {
  const { cake } = props;
  const compareIndexToLength = (item, index, arr) => {
    if (index + 1 === arr.length) {
      const cakeLayoutType = () => {
        switch (item.type) {
          case 'Toppings': return 'toppingsLayout';
          case 'Glaçage': return 'icingsLayout';
          default: return null;
        }
      };
      return (
        <Row className="cakeProgressLayout">
          <p>
            <img src={item.img} alt="ingredient" className={cakeLayoutType()} />
          </p>
        </Row>
      );
    }
    return (
      <Row className="cakeProgressLayout">
        <p><img src={item.img} alt="ingredient" /></p>
      </Row>
    );
  };
  return (
    <div>
      <Row className="cakeLayout justify-content-center">
        {cake.ingredients.map((item, index, arr) => compareIndexToLength(item, index, arr))}
      </Row>
    </div>
  );
};

CakeImage.propTypes = {
  cake: PropTypes.shape({}).isRequired,
};

const mapStateToProps = state => ({
  cake: state.cakeCharacteristics,
});

export default connect(mapStateToProps, null)(CakeImage);
