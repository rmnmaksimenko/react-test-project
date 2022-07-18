import { Component } from 'react';

class NewForm extends Component {
  state = {
    currentName: '',
    value: 0,
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    console.log(name);
    console.log(value);
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="container">
        <form>
          <label>
            Имя{' '}
            <input
              type="text"
              name="currentName"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Значение{' '}
            <input
              type="number"
              name="value"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>
        </form>
      </div>
    );
  }
}

export default NewForm;
