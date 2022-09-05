import { Component } from 'react';
import { Modal__backdrop, Modal__content } from './modal.styled';

export default class Modal extends Component {
  componentDidMount() {
    console.log('Modal componentDidMount');
  }

  componentWillUnmount() {
    console.log('Modal componentWillUnmount');
  }

  render() {
    return (
      <Modal__backdrop>
        <Modal__content>{this.props.children}</Modal__content>
      </Modal__backdrop>
    );
  }
}
