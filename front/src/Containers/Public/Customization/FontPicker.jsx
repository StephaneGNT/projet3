import React from 'react';
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
import { toggle, chooseFont } from '../../../Actions/customization_actions';
import '../../../Assets/Styles/Personalisation.css';

const CustomMessageInput = (props) => {
  const {
    dropdownOpen,
    selectedFonts,
    toggleFunction,
    chooseFontTypeFunction,
    wantsCustomMessage,
  } = props;

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
          <Dropdown isOpen={dropdownOpen} className={!wantsCustomMessage ? 'disableHover' : null} toggle={toggleFunction}>
            <DropdownToggle className="fontdropdown" caret>
              Police du message:
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
                      onClick={() => chooseFontTypeFunction(index)}
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
};

CustomMessageInput.propTypes = {
  dropdownOpen: PropTypes.bool.isRequired,
  selectedFonts: PropTypes.arrayOf(PropTypes.string).isRequired,
  toggleFunction: PropTypes.func.isRequired,
  chooseFontTypeFunction: PropTypes.func.isRequired,
  wantsCustomMessage: PropTypes.bool.isRequired,
};

const mapStatetoProps = state => ({
  selectedFonts: state.customizationAdmin.selectedFonts,
  wantsCustomMessage: state.customizationAdmin.wantsCustomMessage,
  dropdownOpen: state.customizationAdmin.dropdownOpen,
});

const mapDispatchToProps = dispatch => ({
  toggleFunction: () => dispatch(toggle()),
  chooseFontTypeFunction: choice => dispatch(chooseFont(choice)),
});

export default connect(mapStatetoProps, mapDispatchToProps)(CustomMessageInput);
