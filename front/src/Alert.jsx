import React from 'react';
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import alert from './Actions/alert';

const Alert = (props) => {
  const { alertState, alertAction, className } = props;
  return (
    <div onKeyPress={(event) => {
      if (event.key === 'Enter') {
        alertAction('');
      }
    }}>
      <Modal backdrop="static" style={{ top: '30%' }} isOpen={alertState.alert} toggle={alertAction} className={className}>
        {/* <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>i */}
        <ModalBody style={{ textAlign: 'center' }}>
          {alertState.message}
        </ModalBody>
        <ModalFooter style={{ justifyContent: 'center' }}>
          <Button
            autoFocus
            color="secondary"
            onClick={() => alertAction('')}
          >
            OK
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};


Alert.propTypes = {
  className: PropTypes.string.isRequired,
  alertState: PropTypes.shape({}).isRequired,
  alertAction: PropTypes.func.isRequired,
};

const mapStatetoProps = state => ({
  alertState: state.alert,
});

const mapDispatchToProps = dispatch => ({
  alertAction: message => dispatch(alert(message)),
});

export default connect(mapStatetoProps, mapDispatchToProps)(Alert);
