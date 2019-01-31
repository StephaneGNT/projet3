import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container, Row } from 'reactstrap';

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
      const design = cakeLayoutType(item.type);
      return (
        <Container>
          <Row className="cakeProgressLayout">
            <p>
              <img src={item.image} alt="ingredient" className={cakeLayoutType()} />
            </p>
          </Row>
        </Container>
      );
    }
    return (
      <Container>
        <Row className="cakeProgressLayout">
          <p><img src={item.image} alt="ingredient" /></p>
        </Row>
      </Container>
    );
  };
  return (
    <Container>
      <Row className="cakeLayout justify-content-center">
        {cake.ingredients.map((item, index, arr) => compareIndexToLength(item, index, arr))}
      </Row>
    </Container>
  );
};

CakeImage.propTypes = {
  cake: PropTypes.shape({}).isRequired,
};

const mapStateToProps = state => ({
  cake: state.cakeCharacteristics,
});


export default connect(mapStateToProps, null)(CakeImage);
