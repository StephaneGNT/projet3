import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Row, Container, Label, Col,
} from 'reactstrap';
import changeCakeSize from '../../../../Actions/cakeActions/changeCakeSize';
import changeCakeStory from '../../../../Actions/cakeActions/changeCakeStory';

import '../../../../Assets/Styles/CakeSizeSelection.css';

class CakeSizeSelection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      size: '',
      minStory: 1,
      story: 1,
      maxStory: 2,
    };
    this.timeout = null;
  }

  saveCakeInfo = (value) => {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => { this.saveCakeSize(value); }, 500);
  };

  saveCakeSize = (size) => {
    const { selectCakeSize, selectCakeStory } = this.props;
    this.setState({ size });
    if (size >= 5) {
      this.setState({
        minStory: Math.ceil(size / 25),
        maxStory: Math.ceil(size / 5),
        story: Math.ceil(size / 25),
      });
      const { story } = this.state;
      selectCakeSize(parseInt(size, 10));
      selectCakeStory(parseInt(story, 10));
    }
  }

  saveCakeStory = (story) => {
    const { selectCakeStory } = this.props;
    this.setState({ story });
    selectCakeStory(parseInt(story, 10));
  }

  render() {
    const {
      story, minStory, maxStory, size,
    } = this.state;
    const errorSizeStyle = {
      visibility: (size > 0 && size <= 5) ? 'visible' : 'hidden',
      color: 'red',
      fontSize: '0.7em',
    };
    const storyErrorMessage = story < minStory ? `Votre gâteau ne peut pas faire moins de ${minStory} étage(s).` : `Votre gâteau ne peut pas faire plus de ${maxStory} étage(s).`;
    const errorStoryStyle = {
      visibility: (story < minStory || story > maxStory) ? 'visible' : 'hidden',
      color: 'red',
      fontSize: '0.8em',
    };

    return (
      <Container className="b-cakesize-select">
        <Row>
          <Label className="labels-perso">Choisissez la taille de votre gâteau</Label>
          <Col>
            <Label className="lb-2">Nombre de personnes : </Label>
            <input
              onChange={e => this.saveCakeInfo(e.target.value)}
            />
            <div style={errorSizeStyle}>Vous ne pouvez pas commander pour moins de 5 personnes.</div>
          </Col>
          <Col>
            <Label className="lb-2">Nombre d'étages : </Label>
            <input
              onChange={e => this.saveCakeStory(e.target.value)}
              value={story}
            />
          </Col>
        </Row>
        <Row style={errorStoryStyle}>
          {storyErrorMessage}
        </Row>
      </Container>
    );
  }
}

CakeSizeSelection.propTypes = {
  selectCakeSize: PropTypes.func.isRequired,
  selectCakeStory: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  cake: state.cakeCharacteristics,
});

const mapDispatchToProps = dispatch => ({
  selectCakeSize: size => dispatch(changeCakeSize(size)),
  selectCakeStory: story => dispatch(changeCakeStory(story)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CakeSizeSelection);
