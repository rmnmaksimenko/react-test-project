import { Component } from 'react';

export const Button = ({ changeMessage, label }) => (
  <button type="button" onClick={changeMessage}>
    {label}
  </button>
);

export class Time extends Component {
  state = {
    message: new Date().toLocaleTimeString(),
  };

  updateMessage = e => {
    console.log(e);
    this.setState({
      message: new Date().toLocaleTimeString(),
    });
  };

  render() {
    return (
      <>
        <span>{this.state.message}</span>
        <Button label="Change message" changeMessage={this.updateMessage} />
      </>
    );
  }
}
