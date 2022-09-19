import { Component } from 'react';

const INDEX_KEY = 'currentTabIndex';

export class TabIndex extends Component {
  state = {
    tabIndex: 1,
    maxIndex: this.props.maxIndex,
  };

  changeIndex = value => {
    this.setState(state => ({ tabIndex: state.tabIndex + value }));
  };

  componentDidMount() {
    const localIndex = localStorage.getItem(INDEX_KEY);
    if (localIndex) {
      this.setState({ tabIndex: Number(localIndex) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.tabIndex !== this.state.tabIndex) {
      localStorage.setItem(INDEX_KEY, this.state.tabIndex);
    }
  }

  render() {
    let { tabIndex, maxIndex } = this.state;
    console.log(this.state.tabIndex);
    return (
      <div>
        <section>
          <button
            type="button"
            disabled={tabIndex === 1}
            onClick={() => this.changeIndex(-1)}
          >
            Уменьшить
          </button>
          <button
            type="button"
            disabled={tabIndex === maxIndex}
            onClick={() => this.changeIndex(1)}
          >
            Увеличить
          </button>
        </section>
        <p>
          {tabIndex}/{maxIndex}
        </p>
      </div>
    );
  }
}
