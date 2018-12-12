import React from 'react';
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
    textDisabled,
    selectedFonts,
    toggle,
    chooseFontType,
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
          <Dropdown isOpen={dropdownOpen} className={textDisabled ? 'disableHover' : null} toggle={toggle}>
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
                      onClick={() => chooseFontType(index)}
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

const mapStatetoProps = state => ({
  selectedFonts: state.customization.selectedFonts,
  textDisabled: state.customization.textDisabled,
  dropdownOpen: state.customization.dropdownOpen,
});

const mapDispatchToProps = dispatch => ({
  toggle: () => dispatch(toggle()),
  chooseFontType: choice => dispatch(chooseFont(choice)),
});

export default connect(mapStatetoProps, mapDispatchToProps)(CustomMessageInput);
