import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Row, Container, Label,
} from 'reactstrap';
import changeCakeSize from '../../../../Actions/cakeActions/changeCakeSize';
import changeCakeStory from '../../../../Actions/cakeActions/changeCakeStory';

import '../../../../Assets/Styles/CakeSizeSelection.css';

class CakeSizeSelection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      minStory: 1,
      story: 1,
      maxStory: 2,
      errorSize: false,
      errorStory: false,
      errorStoryMessage: '',
    };
    this.timeout = null;
  }

  saveCakeInfo = (value) => {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => { this.saveCakeSize(value); }, 500);
  };

  saveCakeSize = (size) => {
    const { selectCakeSize } = this.props;
    if (size < 5) this.setState({ errorSize: true });
    else {
      this.setState({
        errorSize: false,
        minStory: Math.ceil(size / 25),
        maxStory: Math.floor(size / 5),
        story: Math.ceil(size / 25),
      });
      selectCakeSize(parseInt(size, 10));
    }
  }

  saveCakeStory = (story) => {
    const { selectCakeStory } = this.props;
    const { minStory, maxStory } = this.state;
    this.setState({ story });
    if (story < minStory) {
      this.setState({
        errorStory: true,
        errorStoryMessage: `Votre gâteau ne peut pas faire moins de ${minStory} étage(s).`,
      });
    } else if (story > maxStory) {
      this.setState({
        errorStory: true,
        errorStoryMessage: `Votre gâteau ne peut pas faire plus de ${maxStory} étage(s).`,
      });
    } else {
      this.setState({ errorStory: false });
      selectCakeStory(parseInt(story, 10));
    }
  }

  render() {
    const {
      story, minStory, errorSize, errorStory, errorStoryMessage,
    } = this.state;
    const errorSizeStyle = {
      visibility: errorSize ? 'visible' : 'hidden',
      color: 'red',
      fontSize: '0.8em',
    };
    const errorStoryStyle = {
      visibility: errorStory ? 'visible' : 'hidden',
      color: 'red',
      fontSize: '0.8em',
    };

    console.log(this.state)

    return (
      <Container style={{ minWidth: '100%' }}>
        <Label className="labels-perso mt-3">Choisissez la taille de votre gâteau</Label>
        <Row>
          <Label className="labels-perso mt-3">Nombre de personnes : </Label>
          <input
            onChange={e => this.saveCakeInfo(e.target.value)}
          />
        </Row>
        <Row style={errorSizeStyle}>
          Vous ne pouvez pas commander pour moins de 5 personnes.
        </Row>
        <Row>
          <Label className="labels-perso mt-3">Nombre d'étages : </Label>
          <input
            onChange={e => this.saveCakeStory(e.target.value)}
            value={story}
            // placeholder={`Min. ${minStory}`}
          />
        </Row>
        <Row style={errorStoryStyle}>
          {errorStoryMessage}
        </Row>
      </Container>
    );
  }
}

CakeSizeSelection.propTypes = {
  size: PropTypes.number.isRequired,
  story: PropTypes.number.isRequired,
  selectCakeSize: PropTypes.func.isRequired,
  selectCakeStory: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  size: state.cakeCharacteristics.size,
  story: state.cakeCharacteristics.story,
  cake: state.cakeCharacteristics,
});

const mapDispatchToProps = dispatch => ({
  selectCakeSize: amount => dispatch(changeCakeSize(amount)),
  selectCakeStory: amount => dispatch(changeCakeStory(amount)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CakeSizeSelection);
