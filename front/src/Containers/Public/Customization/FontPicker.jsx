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
import { chooseFont } from '../../../Actions/customization_actions';
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
      chooseFontTypeFunction,
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
        <Row>
          <Col sm="6" lg="6">
            <Dropdown
              isOpen={dropdownOpen}
              className={!wantsCustomMessage ? 'disableHover' : null}
              toggle={() => this.setState({ dropdownOpen: !dropdownOpen })}
            >
              <DropdownToggle className="fontdropdown" caret>
                Police

              </DropdownToggle>
              <DropdownMenu>
                {
                  selectedFonts.map(index => (
                    <div key={index}>
                      <DropdownItem
                        style={{
                          fontFamily: index,
                          fontSize: '2.5vmin',
                        }}
                        onClick={() => this.sendFontChoiceToParent(index)}
                      >
                        Pimp my cake
                      </DropdownItem>
                      <DropdownItem divider />
                    </div>))
                }
              </DropdownMenu>
            </Dropdown>
          </Col>
        </Row>
      </div>
    );
  }
}


CustomMessageInput.propTypes = {
  selectedFonts: PropTypes.arrayOf(PropTypes.string).isRequired,
  // toggleFunction: PropTypes.func.isRequired,
  chooseFontTypeFunction: PropTypes.func.isRequired,
  wantsCustomMessage: PropTypes.bool.isRequired,
};

const mapStatetoProps = state => ({
  selectedFonts: state.customizationAdmin.selectedFonts,
  wantsCustomMessage: state.customizationAdmin.wantsCustomMessage,
});

const mapDispatchToProps = dispatch => ({
  // toggleFunction: () => dispatch(toggle()),
  chooseFontTypeFunction: choice => dispatch(chooseFont(choice)),
});

export default connect(mapStatetoProps, mapDispatchToProps)(CustomMessageInput);
