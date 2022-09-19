import { Component } from 'react';
import './App.css';
import Counter from './counter';
import NewForm from './form';
import { Time } from './time';
import Modal from './modal';
import Tabs from './tabs';
import tabs from './tabs/tabs.json';
import { TabIndex } from './tabindex';

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
        <Tabs items={tabs} />
        {showModal && (
          <Modal onCloseModal={this.toggleModal}>
            <h1>Привет это контент модалки как children</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat
              aperiam earum omnis quos rem sed praesentium eius asperiores
              minus. Repellendus consequuntur repellat sequi adipisci eum
              voluptate eius voluptatem voluptatum vel.
            </p>
            <button type="button" onClick={this.toggleModal}>
              Закрыть
            </button>
          </Modal>
        )}
        {/* <Counter /> */}
        {/* <Time /> */}
        {/* <NewForm onSubmit={this.formSubmitHahdler} /> */}
        <TabIndex maxIndex={15} />
      </div>
    );
  }
}

export default App;
