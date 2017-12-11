import React from "react";
// import { Link } from 'react-router-dom';
import { Modal } from "react-bootstrap";

import PropTypes from "prop-types";

import "./Modal.css";

class ModalComponent extends React.Component {
  static propTypes = {
    isOpen: PropTypes.bool.isRequired,
    returnTo: PropTypes.string.isRequired,
    history: PropTypes.object.isRequired,
    // returnTo: PropTypes.string,
    children: PropTypes.object
    // component: PropTypes.object,
  };

  static defaultProps = {
    children: undefined
  };

  constructor(props) {
    super(props);

    this.state = { showModal: props.isOpen, returnTo: props.returnTo };

    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      showModal: nextProps.isOpen,
      returnTo: nextProps.returnTo
    });
  }

  close() {
    this.props.history.push(this.state.returnTo);
    // this.setState({ showModal: false, returnTo: undefined });
  }

  open() {
    this.setState({ showModal: true });
  }

  render() {
    // const popover = (
    //   <Popover id="modal-popover" title="popover">
    //     very popover. such engagement
    //   </Popover>
    // );
    // const tooltip = (
    //   <Tooltip id="modal-tooltip">
    //     wow.
    //   </Tooltip>
    // );
    return (
      <Modal
        dialogClassName="ModalDialog"
        show={this.state.showModal}
        onHide={this.close}
        bsSize="large"
      >
        <Modal.Header closeButton />
        <Modal.Body>
          <div className="container">{this.props.children}</div>
        </Modal.Body>
      </Modal>
    );
  }
}

export default ModalComponent;
