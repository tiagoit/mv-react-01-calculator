import React from 'react';
import Button from './Button';

const buttons = [
  ['AC', '+/-', '%', '÷'],
  ['7', '8', '9', 'x'],
  ['4', '5', '6', '-'],
  ['1', '2', '3', '+'],
  ['0', '.', '='],
];

const ButtonPannel = () => (
  buttons.map((row, i) => (
    <div key={i}>
      {row.map((b) => (<Button key={b} name={b}>{b}</Button>))}
    </div>
  ))
  // return <div>{buttons[0].map((b) => <div key={b}>{b}</div>)}</div>;
);

export default ButtonPannel;
