import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Row,
  Col,
  Button,
} from 'reactstrap';
import { connect } from 'react-redux';
import changeCakeSize from '../../../../Actions/cakeActions/changeCakeSize';
import changeCakeStory from '../../../../Actions/cakeActions/changeCakeStory';
import { addCakePieces, removeCakePieces } from '../../../../Actions/cakeActions/changeCakePiecesAndStories';

class CakeStoryDisplay extends Component {
  constructor(props) {
    super(props);
    this.size = 0;
    this.story = 0;
    this.chosenStory = [];
  }

  getDisabledMinus = () => {
    const { chosenStories, story } = this.props;
    return (chosenStories.indexOf(story) === -1);
  };

  render() {
    const {
      width,
      story,
      taille,
      addPieces,
      removePieces,
    } = this.props;

    return (
      <Container className="cakeSize">
        <Row>
          <Col sm="6">
            <div className="story" style={{ width }}>{story}</div>
          </Col>
          <Col sm="3"><div>{taille}</div></Col>
          <Col sm="3" className="buttonDisplay">
            <Button onClick={() => addPieces(story)}>+</Button>
            <Button disabled={this.getDisabledMinus()} onClick={() => removePieces(story)}>-</Button>
          </Col>
        </Row>
      </Container>
    );
  }
}

CakeStoryDisplay.propTypes = {
  width: PropTypes.string.isRequired,
  taille: PropTypes.string.isRequired,
  addPieces: PropTypes.func.isRequired,
  removePieces: PropTypes.func.isRequired,
  chosenStories: PropTypes.arrayOf(PropTypes.number).isRequired,
  story: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  cake: state.cakeCharacteristics,
  chosenStories: state.chosenStories,
});

const mapDispatchToProps = dispatch => ({
  selectCakeSize: size => dispatch(changeCakeSize(size)),
  selectCakestory: story => dispatch(changeCakeStory(story)),
  addPieces: value => dispatch(addCakePieces(value)),
  removePieces: value => dispatch(removeCakePieces(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CakeStoryDisplay);
