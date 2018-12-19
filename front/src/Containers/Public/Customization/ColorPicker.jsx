import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { CirclePicker } from 'react-color';
import { Button, ButtonGroup, Row, Col } from 'reactstrap';
import FontPicker from './FontPicker';
import { changeBgColor, changeFontColor } from '../../../Actions/customization_actions';
import '../../../Assets/Styles/Personalisation.css';

class ColorPicker extends Component {
  constructor(props) {
    super(props);
    this.state = { color: 'font' };
  }

  changeColorPalette = (palette) => {
    this.setState({ color: palette });
  }

  render() {
    const buttonStyle = { 'background-color': 'rgb(129, 38, 38)' }
    const { changeBackgroundColor, changeFontColour } = this.props;
    const { color } = this.state;
    return (
      <div>
        <Row>
          <Col className="buttonGroup">
            <ButtonGroup>
              <FontPicker />
              <Button
                onClick={() => this.changeColorPalette('font')}
                style={color === 'font' ? buttonStyle : {}}
              >
                Couleur de l’écriture
              </Button>
              <Button
                onClick={() => this.changeColorPalette('background')}
                style={color === 'background' ? buttonStyle : {}}
              >
                Couleur de fond
              </Button>
            </ButtonGroup>
          </Col>
        </Row>
        <Row>
          {
            (color === 'font')
              ? <CirclePicker className="palette" name="fontColor" onChange={changeFontColour} />
              : <CirclePicker className="palette" name="backgroundColor" onChange={changeBackgroundColor} />
          }
        </Row>
      </div>
    );
  }
}


ColorPicker.propTypes = {
  changeBackgroundColor: PropTypes.func.isRequired,
  changeFontColour: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  changeBackgroundColor: color => dispatch(changeBgColor(color)),
  changeFontColour: color => dispatch(changeFontColor(color)),
});

export default connect(null, mapDispatchToProps)(ColorPicker);
