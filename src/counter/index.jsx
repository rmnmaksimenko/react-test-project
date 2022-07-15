import { Component } from 'react';

class Counter extends Component {
  static defaultProps = {
    step: 1,
    initialValue: 10,
  };

  state = {
    value: this.props.initialValue,
  };

  handleIncrement = () => {
    this.setState((state, props) => {
      return { value: state.value + props.step };
    });
  };

  handleDecrement = () => {
    this.setState((state, props) => {
      return { value: state.value - props.step };
    });
  };

  render() {
    const { step } = this.props;

    return (
      <div className="container">
        <button type="button" onClick={this.handleIncrement}>
          + {step}
        </button>
        <span>{this.state.value}</span>
        <button type="button" onClick={this.handleDecrement}>
          - {step}
        </button>
      </div>
    );
  }
}

export default Counter;
