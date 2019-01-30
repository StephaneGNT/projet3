import React from 'react';
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { confirm } from './Actions/alertAndConfirm';

const Confirm = (props) => {
  const { confirmState, confirmAction, className } = props;
  return (
    <Modal style={{ top: '30%' }} isOpen={confirmState.confirm} toggle={confirmAction} className={className}>
      {/* <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>i */}
      <ModalBody style={{ textAlign: 'center' }}>
        {confirmState.message}
      </ModalBody>
      <ModalFooter style={{ justifyContent: 'center' }}>
        <Button
          color="secondary"
          onClick={() => confirmAction('', true)}
        >
          Oui
        </Button>
        <Button
          color="secondary"
          onClick={() => confirmAction('', false)}
        >
          Non
        </Button>
      </ModalFooter>
    </Modal>
  );
};


Confirm.propTypes = {
  className: PropTypes.string.isRequired,
  confirmState: PropTypes.shape({}).isRequired,
  confirmAction: PropTypes.func.isRequired,
};

const mapStatetoProps = state => ({
  confirmState: state.confirm,
});

const mapDispatchToProps = dispatch => ({
  confirmAction: message => dispatch(confirm(message)),
});

export default connect(mapStatetoProps, mapDispatchToProps)(Confirm);
