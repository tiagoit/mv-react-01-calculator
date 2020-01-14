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
      this.setState(previousState => {
        let next = previousState.next || '0';
        if (buttonName !== '.') {
          try {
            next = parseFloat(next += buttonName);
          } catch (e) {
            next = 0;
          }
        } else if (next.toString().indexOf('.') === -1) next += buttonName;
        return { next };
      });
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
