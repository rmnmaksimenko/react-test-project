import { Component } from 'react';
import shortid from 'shortid';

class NewForm extends Component {
  state = {
    currentName: '',
    value: '',
    exp: 'junior',
    license: false,
  };

  nameInputID = shortid.generate();
  valueInputID = shortid.generate();

  handleChange = e => {
    const { name, value } = e.currentTarget;

    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    e.currentTarget.reset();
  };

  handleLicenseChange = e => {
    console.log(e.currentTarget.checked);
    this.setState({ license: e.currentTarget.checked });
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor={this.nameInputID}>
            Имя{' '}
            <input
              type="text"
              name="currentName"
              value={this.state.name}
              onChange={this.handleChange}
              id={this.nameInputID}
            />
          </label>
          <label htmlFor={this.valueInputID}>
            Значение{' '}
            <input
              type="text"
              name="value"
              value={this.state.name}
              onChange={this.handleChange}
              id={this.valueInputID}
            />
          </label>
          <p>Ваш уровень</p>
          <label>
            <input
              type="radio"
              name="exp"
              value="junior"
              onChange={this.handleChange}
              checked={this.state.exp === 'junior'}
            />{' '}
            Junior
          </label>

          <label>
            <input
              type="radio"
              name="exp"
              value="middle"
              onChange={this.handleChange}
              checked={this.state.exp === 'middle'}
            />
            Middle
          </label>
          <label>
            <input
              type="radio"
              name="exp"
              value="senior"
              onChange={this.handleChange}
              checked={this.state.exp === 'senior'}
            />
            Senior
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              name="license"
              checked={this.state.license}
              onChange={this.handleLicenseChange}
            />
            Согласен
          </label>
          <button type="submit" disabled={!this.state.license}>
            Отправить
          </button>
        </form>
      </div>
    );
  }
}

export default NewForm;
