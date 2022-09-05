import { Component } from 'react';
import './App.css';
import Counter from './counter';
import NewForm from './form';
import { Time } from './time';
import Modal from './modal';

class App extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  formSubmitHahdler = data => {
    console.log('app', data);
  };
  render() {
    console.log('appRender');

    const { showModal } = this.state;
    return (
      <div>
        <button type="button" onClick={this.toggleModal}>
          Открыть модалку
        </button>
        {/* <Counter /> */}
        {/* <Time /> */}
        {/* <NewForm onSubmit={this.formSubmitHahdler} /> */}
        {showModal && <Modal />}
      </div>
    );
  }
}

export default App;
