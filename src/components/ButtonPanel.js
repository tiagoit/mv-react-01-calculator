import React from 'react';
import Button from './Button';

const buttons = [
  ['AC', '+/-', '%', '÷'],
  ['7', '8', '9', 'x'],
  ['4', '5', '6', '-'],
  ['1', '2', '3', '+'],
  ['0', '.', '='],
];

const ButtonPanel = () => (
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
          />
        ))}
      </div>
    ))}
  </div>
);

export default ButtonPanel;
