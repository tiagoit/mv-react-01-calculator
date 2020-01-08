import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    if (/^\d|\.$/.test(buttonName)) {
      this.setState(previousState => ({
        next: (previousState.next ? previousState.next + buttonName : buttonName),
      }));
    } else {
      this.setState((state) => calculate(state, buttonName));
    }
  }

  render() {
    const { next, total, operation } = this.state;
    return (
      <div className="app">
        <Display value={(next || total || 0).toString()} op={operation} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}

export default App;
