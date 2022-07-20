import { Component } from 'react';
import './App.css';
import Counter from './counter';
import NewForm from './form';
import { Time } from './time';

class App extends Component {
  formSubmitHahdler = data => {
    console.log('app', data);
  };
  render() {
    return (
      <div>
        {/* <Counter /> */}
        {/* <Time /> */}
        <NewForm onSubmit={this.formSubmitHahdler} />
      </div>
    );
  }
}

export default App;
