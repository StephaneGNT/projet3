import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Row,
  Col,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import '../../../Assets/Styles/Customization.css';

class CustomMessageInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownOpen: false,
    };
  }

  sendFontChoiceToParent = (font) => {
    const { sendFontChoice } = this.props;
    sendFontChoice(font);
  }

  render() {
    const {
      selectedFonts,
      wantsCustomMessage,
    } = this.props;
    const { dropdownOpen } = this.state;

    return (
      <div>
        {
          selectedFonts.map(index => (
            <div key={index}>
              <link
                rel="stylesheet"
                href={`https://fonts.googleapis.com/css?family=${index}`}
              />
            </div>))
        }
        <div className="fontTable">
          {
            selectedFonts.map((font, index) => (
              <div
                className="fontBubbles"
                key={font}
                style={{
                  backgroundColor: index % 2 === 0 ? '#f5f5f4' : 'white',
                  fontFamily: font,
                  fontSize: '2.5vmin',
                }}
                onClick={() => this.sendFontChoiceToParent(font)}
              >
                Pimp my cake

                </div>))
          }
        </div>
      </div>
    );
  }
}


CustomMessageInput.propTypes = {
  selectedFonts: PropTypes.arrayOf(PropTypes.string).isRequired,
  // toggleFunction: PropTypes.func.isRequired,
  chooseFontTypeFunction: PropTypes.func.isRequired,
  wantsCustomMessage: PropTypes.bool.isRequired,
  sendFontChoice: PropTypes.func.isRequired,
};

const mapStatetoProps = state => ({
  selectedFonts: state.customizationAdmin.selectedFonts,
  wantsCustomMessage: state.customizationAdmin.wantsCustomMessage,
});

const mapDispatchToProps = dispatch => ({
  // toggleFunction: () => dispatch(toggle()),
  // chooseFontTypeFunction: choice => dispatch(chooseFont(choice)),
});

export default connect(mapStatetoProps, mapDispatchToProps)(CustomMessageInput);
