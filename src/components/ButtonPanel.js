import PropTypes from 'prop-types';
import React from 'react';
import Button from './Button';

const buttons = [
  ['AC', '+/-', '%', '÷'],
  ['7', '8', '9', 'x'],
  ['4', '5', '6', '-'],
  ['1', '2', '3', '+'],
  ['0', '.', '='],
];

class ButtonPanel extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    const { clickHandler } = this.props;
    clickHandler(buttonName);
  }

  render() {
    return (
      <div className="button-panel">
        {buttons.map((row, i) => (
          <div key={row[0]}>
            {row.map((b, j) => (
              <Button
                key={b}
                name={b}
                {...(b === '0' && { wide: true })}
                {...(i < 4 && j < 3 && { color: 'lightgrey' })}
                {...(i === 4 && j < 2 && { color: 'lightgrey' })}
                clickHandler={this.handleClick}
              />
            ))}
          </div>
        ))}
      </div>
    );
  }
}

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
